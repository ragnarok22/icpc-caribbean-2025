# API Integration Documentation

Este documento explica cómo usar las funciones de integración con la API del ICPC Caribe 2025.

## Archivos de la integración

- **`src/lib/definitions.ts`** - Contiene los tipos TypeScript para las respuestas de la API
- **`src/lib/api.ts`** - Contiene las funciones principales para consumir la API y ejemplos de uso

## API Base URL

La URL base de la API se configura mediante la variable de entorno `PUBLIC_API_BASE_URL`:

```bash
PUBLIC_API_BASE_URL=https://api.example.com
```

Para configurarla:

1. Copia el archivo `.env.example` a `.env`:

   ```bash
   cp .env.example .env
   ```

2. Edita `.env` si necesitas cambiar la URL base de la API.

**Nota:** Las variables de entorno que comienzan con `PUBLIC_` están disponibles tanto en el servidor como en el cliente en Astro.

## Funciones disponibles

### 1. `getSponsors(params?)`

Obtiene la lista de sponsors desde la API.

**Parámetros:**

- `page` (opcional): Número de página, por defecto `1`
- `page_size` (opcional): Tamaño de página, por defecto `10`, máximo `100`

**Ejemplo de uso:**

```typescript
import { getSponsors } from "@/lib/api";

// Obtener sponsors con paginación por defecto
const response = await getSponsors();

// Obtener sponsors con paginación personalizada
const response = await getSponsors({ page: 2, page_size: 20 });

// Verificar si hubo error
if (response.error) {
  console.error("Error:", response.error);
} else {
  console.log("Sponsors:", response.data);
  console.log("Paginación:", response.pagination);
}
```

**Respuesta:**

```typescript
{
  data: [
    {
      name: "nombre del sponsor",
      description: "descripcion del sponsor",
      category: "nombre de la categoria",
      amount_donated: 1000,
      image_url: "https://example.com/logo.png"
    }
  ],
  pagination: {
    page: 1,
    pageSize: 10,
    hasNextPage: false
  },
  error?: "mensaje de error si ocurrió alguno"
}
```

### 2. `getTeams(params?)`

Obtiene la lista de equipos desde la API.

**Parámetros:**

- `id` (opcional): ID del equipo específico
- `university_id` (opcional): ID de la universidad para filtrar
- `name` (opcional): Nombre del equipo para búsqueda parcial
- `page` (opcional): Número de página, por defecto `1`
- `page_size` (opcional): Tamaño de página, por defecto `10`, máximo `100`

**Ejemplo de uso:**

```typescript
import { getTeams } from "@/lib/api";

// Obtener todos los equipos
const response = await getTeams();

// Obtener equipos filtrados por nombre
const response = await getTeams({ name: "Team A" });

// Obtener equipos de una universidad específica
const response = await getTeams({ university_id: "123" });

// Obtener un equipo específico por ID
const response = await getTeams({ id: "456" });

// Verificar si hubo error
if (response.error) {
  console.error("Error:", response.error);
} else {
  console.log("Equipos:", response.data);
  console.log("Paginación:", response.pagination);
}
```

**Respuesta:**

```typescript
{
  data: [
    {
      id: "1",
      name: "nombre del equipo",
      description: "descripcion del equipo",
      university: "nombre de la universidad",
      country: "nombre del pais",
      image_url: "https://example.com/team.png",
      contestants: [
        {
          name: "nombre del concursante",
          description: "descripcion del concursante",
          is_coach: false
        }
      ]
    }
  ],
  pagination: {
    page: 1,
    pageSize: 10,
    hasNextPage: true
  },
  error?: "mensaje de error si ocurrió alguno"
}
```

## Funciones de transformación

### `transformAPISponsor(apiSponsor)`

Transforma un sponsor de la API al formato interno usado en el proyecto.

```typescript
import { transformAPISponsor } from "@/lib/api";

const apiSponsor = {
  name: "Sponsor Name",
  description: "Description",
  category: "Gold",
  amount_donated: 5000,
  image_url: "https://example.com/logo.png",
};

const sponsor = transformAPISponsor(apiSponsor);
// Retorna: { logo: "https://example.com/logo.png", name: "Sponsor Name", url: "" }
```

### `transformAPITeam(apiTeam)`

Transforma un equipo de la API al formato interno usado en el proyecto.

```typescript
import { transformAPITeam } from "@/lib/api";

const apiTeam = {
  id: "1",
  name: "Team Alpha",
  description: "A great team",
  university: "Universidad de Holguín",
  country: "Cuba",
  image_url: "https://example.com/team.png",
  contestants: [
    { name: "John Doe", description: "Member", is_coach: false },
    { name: "Jane Smith", description: "Coach", is_coach: true },
  ],
};

const team = transformAPITeam(apiTeam);
// Retorna el equipo en formato Team con participantes y universidad
```

## Ejemplos de uso avanzado

### Cargar todos los sponsors (todas las páginas)

```typescript
import { getSponsors, transformAPISponsor } from "@/lib/api";

async function fetchAllSponsors() {
  const allSponsors = [];
  let page = 1;
  let hasNextPage = true;

  while (hasNextPage) {
    const response = await getSponsors({ page, page_size: 100 });

    if (response.error) {
      console.error("Error:", response.error);
      break;
    }

    allSponsors.push(...response.data.map(transformAPISponsor));
    hasNextPage = response.pagination.hasNextPage;
    page++;
  }

  return allSponsors;
}
```

### Cargar todos los equipos (todas las páginas)

```typescript
import { getTeams, transformAPITeam } from "@/lib/api";

async function fetchAllTeams() {
  const allTeams = [];
  let page = 1;
  let hasNextPage = true;

  while (hasNextPage) {
    const response = await getTeams({ page, page_size: 100 });

    if (response.error) {
      console.error("Error:", response.error);
      break;
    }

    allTeams.push(...response.data.map(transformAPITeam));
    hasNextPage = response.pagination.hasNextPage;
    page++;
  }

  return allTeams;
}
```

### Buscar equipos por nombre

```typescript
import { getTeams } from "@/lib/api";

async function searchTeamsByName(searchTerm: string) {
  const response = await getTeams({ name: searchTerm, page_size: 50 });

  if (response.error) {
    return [];
  }

  return response.data;
}
```

## Uso en componentes Astro

```astro
---
import { getSponsors, transformAPISponsor } from "@/lib/api";

const response = await getSponsors({ page_size: 50 });
const sponsors = response.error ? [] : response.data.map(transformAPISponsor);
---

<div>
  {
    sponsors.map((sponsor) => (
      <div>
        <img src={sponsor.logo} alt={sponsor.name} />
        <h3>{sponsor.name}</h3>
      </div>
    ))
  }
</div>
```

## Uso en componentes React

```tsx
import { useEffect, useState } from "react";
import { getTeams, transformAPITeam } from "@/lib/api";
import type { Team } from "@/lib/definitions";

export function TeamList() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTeams() {
      const response = await getTeams({ page_size: 100 });

      if (response.error) {
        setError(response.error);
      } else {
        setTeams(response.data.map(transformAPITeam));
      }

      setLoading(false);
    }

    fetchTeams();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {teams.map((team) => (
        <div key={team.teamName}>
          <h3>{team.teamName}</h3>
          <p>{team.university.name}</p>
        </div>
      ))}
    </div>
  );
}
```

## Manejo de errores

Todas las funciones de la API incluyen manejo de errores integrado. Si ocurre un error:

1. Se registra en la consola con `console.error`
2. Se retorna una respuesta con un array `data` vacío
3. Se incluye un campo `error` con el mensaje descriptivo

```typescript
const response = await getSponsors();

if (response.error) {
  // Manejar el error
  console.error("Failed to load sponsors:", response.error);
  // Mostrar mensaje al usuario
  // Reintentar la petición
  // etc.
} else {
  // Procesar los datos exitosamente
  const sponsors = response.data;
}
```

## Tipos TypeScript

Todos los tipos están definidos en `src/lib/definitions.ts`:

- `APIPagination` - Información de paginación
- `APISponsor` - Sponsor desde la API
- `APISponsorsResponse` - Respuesta completa de sponsors
- `APIContestant` - Concursante desde la API
- `APITeam` - Equipo desde la API
- `APITeamsResponse` - Respuesta completa de equipos
- `GetSponsorsParams` - Parámetros para getSponsors
- `GetTeamsParams` - Parámetros para getTeams

## Notas importantes

1. **Límite de page_size**: El tamaño máximo de página es 100. Si se pasa un valor mayor, se ajustará automáticamente a 100.

2. **Transformación de datos**: Las funciones `transformAPISponsor` y `transformAPITeam` convierten los datos de la API al formato interno del proyecto. Algunos campos (como `url` en sponsors o `logo` en universidades) no están disponibles en la API y se establecen como cadenas vacías.

3. **Búsqueda parcial**: El parámetro `name` en `getTeams` realiza una búsqueda parcial, por lo que "Team" encontrará "Team Alpha", "Super Team", etc.

4. **Caché**: Astro cachea automáticamente las llamadas durante el build. Para datos dinámicos en tiempo real, considera usar estos endpoints en componentes del lado del cliente o con revalidación.
