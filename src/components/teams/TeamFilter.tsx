import { useState, useEffect } from "react";
import type { Team } from "@/lib/definitions";

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
    <div className="team-filter">
      <div className="filter-controls">
        <div className="filter-group">
          <label htmlFor="name-filter" className="filter-label">
            Team Name
          </label>
          <input
            id="name-filter"
            type="text"
            placeholder="Search by team name..."
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            className="filter-input"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="university-filter" className="filter-label">
            University
          </label>
          <select
            id="university-filter"
            value={universityFilter}
            onChange={(e) => setUniversityFilter(e.target.value)}
            className="filter-select"
          >
            <option value="">All Universities</option>
            {universities.map((university) => (
              <option key={university} value={university}>
                {university}
              </option>
            ))}
          </select>
        </div>

        {hasActiveFilters && (
          <button onClick={handleReset} className="filter-reset-button">
            Reset Filters
          </button>
        )}
      </div>
    </div>
  );
}
