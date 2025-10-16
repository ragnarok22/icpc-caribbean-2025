import { useState, useEffect } from "react";
import type { Team } from "@/lib/definitions";
import CustomSelect from "./CustomSelect";

interface TeamFilterProps {
  teams: Team[];
  onFilterChange: (filteredTeams: Team[]) => void;
}

export default function TeamFilter({ teams, onFilterChange }: TeamFilterProps) {
  const [nameFilter, setNameFilter] = useState("");
  const [universityFilter, setUniversityFilter] = useState("");

  // Get unique universities from teams
  const universities = Array.from(
    new Set(teams.map((team) => team.university.name)),
  ).sort();

  // Prepare options for CustomSelect
  const universityOptions = [
    { value: "", label: "Todas las Universidades" },
    ...universities.map((university) => ({
      value: university,
      label: university,
    })),
  ];

  useEffect(() => {
    const filtered = teams.filter((team) => {
      const matchesName = team.teamName
        .toLowerCase()
        .includes(nameFilter.toLowerCase());
      const matchesUniversity =
        !universityFilter || team.university.name === universityFilter;

      return matchesName && matchesUniversity;
    });

    onFilterChange(filtered);
  }, [nameFilter, universityFilter, teams, onFilterChange]);

  const handleReset = () => {
    setNameFilter("");
    setUniversityFilter("");
  };

  const hasActiveFilters = nameFilter !== "" || universityFilter !== "";

  return (
    <div className="mb-10 rounded-2xl border border-gray-200 bg-white shadow-xl">
      {/* Header */}
      <div className="from-blue to-blue/90 bg-gradient-to-r px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="bg-yellow/20 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-sm">
            <svg
              className="text-yellow h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Filtrar Equipos</h3>
            <p className="text-sm text-white/80">
              Busca por nombre de equipo o universidad
            </p>
          </div>
        </div>
      </div>

      {/* Filter controls */}
      <div className="bg-gradient-to-b from-gray-50 to-white p-6 relative">
        <div className="flex flex-wrap items-end gap-4">
          <div className="group flex min-w-[200px] flex-1 flex-col gap-2">
            <label
              htmlFor="name-filter"
              className="flex items-center gap-2 text-sm font-bold tracking-wide text-gray-600 uppercase"
            >
              <svg
                className="text-blue h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Nombre del Equipo
            </label>
            <div className="relative">
              <input
                id="name-filter"
                type="text"
                placeholder="Buscar equipo..."
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
                className="hover:border-blue/50 focus:border-blue focus:ring-blue/10 w-full rounded-xl border-2 border-gray-300 bg-white px-4 py-3 text-[15px] text-gray-700 shadow-sm transition-all placeholder:text-gray-400 focus:shadow-lg focus:ring-4 focus:outline-none"
              />
              {nameFilter && (
                <button
                  onClick={() => setNameFilter("")}
                  className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                  aria-label="Clear search"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          <div className="group flex min-w-[200px] flex-1 flex-col gap-2">
            <label
              htmlFor="university-filter"
              className="flex items-center gap-2 text-sm font-bold tracking-wide text-gray-600 uppercase"
            >
              <svg
                className="text-blue h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              Universidad
            </label>
            <CustomSelect
              options={universityOptions}
              value={universityFilter}
              onChange={setUniversityFilter}
              placeholder="Todas las Universidades"
            />
          </div>

          {hasActiveFilters && (
            <button
              onClick={handleReset}
              className="group hover:border-blue hover:from-blue hover:to-blue/90 relative overflow-hidden rounded-xl border-2 border-gray-300 bg-gradient-to-r from-gray-100 to-gray-50 px-6 py-3 text-[15px] font-bold whitespace-nowrap text-gray-700 shadow-sm transition-all hover:text-white hover:shadow-lg active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Limpiar Filtros
              </span>
            </button>
          )}
        </div>

        {/* Active filters indicator */}
        {hasActiveFilters && (
          <div className="mt-4 flex flex-wrap gap-2">
            {nameFilter && (
              <span className="bg-blue/10 text-blue inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
                Nombre: {nameFilter}
              </span>
            )}
            {universityFilter && (
              <span className="bg-blue/10 text-blue inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                </svg>
                {universityFilter}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
