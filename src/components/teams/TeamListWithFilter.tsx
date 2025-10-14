import { useState } from "react";
import type { Team } from "@/lib/definitions";
import TeamFilter from "./TeamFilter";
import TeamCard from "./TeamCard";

interface TeamListWithFilterProps {
  teams: Team[];
}

export default function TeamListWithFilter({ teams }: TeamListWithFilterProps) {
  const [filteredTeams, setFilteredTeams] = useState<Team[]>(teams);

  return (
    <section className="mx-auto max-w-6xl p-8">
      <div className="mb-8 text-center">
        <h2>Participating Teams</h2>
        <p className="m-0 text-base text-gray-600">
          {filteredTeams.length} {filteredTeams.length === 1 ? "team" : "teams"}
          {filteredTeams.length !== teams.length && (
            <span className="text-[14.5px] text-gray-400">
              {" "}
              (filtered from {teams.length})
            </span>
          )}
        </p>
      </div>

      <TeamFilter teams={teams} onFilterChange={setFilteredTeams} />

      {filteredTeams.length === 0 ? (
        <div className="px-8 py-12 text-center text-gray-600">
          <p className="my-2 text-lg">No teams found matching your filters.</p>
          <p className="text-[15px] text-gray-400">
            Try adjusting your search criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-8">
          {filteredTeams.map((team, index) => (
            <TeamCard key={index} team={team} />
          ))}
        </div>
      )}
    </section>
  );
}
