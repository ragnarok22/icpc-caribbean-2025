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
    <section className="team-list">
      <div className="team-list-header">
        <h2>Participating Teams</h2>
        <p className="team-count">
          {filteredTeams.length} {filteredTeams.length === 1 ? "team" : "teams"}
          {filteredTeams.length !== teams.length && (
            <span className="filter-count">
              {" "}
              (filtered from {teams.length})
            </span>
          )}
        </p>
      </div>

      <TeamFilter teams={teams} onFilterChange={setFilteredTeams} />

      {filteredTeams.length === 0 ? (
        <div className="no-teams-message">
          <p>No teams found matching your filters.</p>
          <p className="suggestion">Try adjusting your search criteria.</p>
        </div>
      ) : (
        <div className="teams-grid">
          {filteredTeams.map((team, index) => (
            <TeamCard key={index} team={team} />
          ))}
        </div>
      )}
    </section>
  );
}
