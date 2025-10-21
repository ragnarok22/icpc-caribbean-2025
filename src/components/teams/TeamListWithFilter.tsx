import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Team } from "@/lib/definitions";
import TeamFilter from "./TeamFilter";
import TeamCard from "./TeamCard";

interface TeamListWithFilterProps {
  teams: Team[];
}

export default function TeamListWithFilter({ teams }: TeamListWithFilterProps) {
  const [filteredTeams, setFilteredTeams] = useState<Team[]>(teams);

  return (
    <div className="from-blue/5 min-h-screen bg-gradient-to-b via-white to-gray-50">
      {/* Hero Section */}
      <section className="from-blue via-blue to-blue/90 relative bg-gradient-to-br px-4 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,193,7,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent_50%)]"></div>

        <div className="relative mx-auto max-w-6xl text-center">
          <div className="mb-6 inline-block">
            <div className="bg-yellow/20 flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm">
              <div className="bg-yellow h-2 w-2 animate-pulse rounded-full"></div>
              <span className="text-sm font-semibold tracking-wide">
                Final Caribeña 2025 del ICPC
              </span>
            </div>
          </div>

          <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
            Equipos Participantes
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 sm:text-xl">
            Descubre los equipos que competirán en la Final Regional del Caribe
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-center">
            <div className="group">
              <div className="text-yellow mb-2 text-4xl font-bold transition-transform group-hover:scale-110">
                {teams.length}
              </div>
              <div className="text-sm tracking-wider text-white/80 uppercase">
                Equipos Totales
              </div>
            </div>
            <div className="h-12 w-px bg-white/20"></div>
            <div className="group">
              <div className="text-yellow mb-2 text-4xl font-bold transition-transform group-hover:scale-110">
                {new Set(teams.map((t) => t.university.name)).size}
              </div>
              <div className="text-sm tracking-wider text-white/80 uppercase">
                Universidades
              </div>
            </div>
            <div className="h-12 w-px bg-white/20"></div>
            <div className="group">
              <div className="text-yellow mb-2 text-4xl font-bold transition-transform group-hover:scale-110">
                {teams.reduce((acc, t) => acc + t.participants.length, 0)}
              </div>
              <div className="text-sm tracking-wider text-white/80 uppercase">
                Participantes
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute right-0 bottom-0 left-0">
          <svg
            viewBox="0 0 1440 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 48h1440V0s-120 48-360 48S720 0 720 0s-120 48-360 48S0 0 0 0v48z"
              fill="white"
              fillOpacity="0.05"
            />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <TeamFilter teams={teams} onFilterChange={setFilteredTeams} />

        {/* Results Count */}
        <div className="mb-8 text-center">
          <p className="text-lg text-gray-700">
            Mostrando{" "}
            <span className="text-blue font-bold">{filteredTeams.length}</span>{" "}
            {filteredTeams.length === 1 ? "equipo" : "equipos"}
            {filteredTeams.length !== teams.length && (
              <span className="text-base text-gray-500">
                {" "}
                de {teams.length} totales
              </span>
            )}
          </p>
        </div>

        {filteredTeams.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-white px-8 py-16 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
              <svg
                className="h-8 w-8 text-gray-400"
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
            </div>
            <p className="mb-2 text-xl font-semibold text-gray-700">
              No se encontraron equipos
            </p>
            <p className="text-base text-gray-500">
              Intenta ajustar los filtros de búsqueda
            </p>
          </div>
        ) : (
          <motion.div
            className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredTeams.map((team, index) => (
                <motion.div
                  key={`${team.teamName}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.3,
                    layout: { duration: 0.3 },
                  }}
                >
                  <TeamCard team={team} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>
    </div>
  );
}
