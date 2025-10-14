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
    <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-end gap-4">
        <div className="flex min-w-[200px] flex-1 flex-col gap-2">
          <label
            htmlFor="name-filter"
            className="text-sm font-semibold text-gray-700"
          >
            Team Name
          </label>
          <input
            id="name-filter"
            type="text"
            placeholder="Search by team name..."
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            className="rounded-md border border-gray-300 bg-white px-3.5 py-2.5 text-[15px] text-gray-700 transition-all placeholder:text-gray-400 focus:border-blue-500 focus:ring-3 focus:ring-blue-500/10 focus:outline-none"
          />
        </div>

        <div className="flex min-w-[200px] flex-1 flex-col gap-2">
          <label
            htmlFor="university-filter"
            className="text-sm font-semibold text-gray-700"
          >
            University
          </label>
          <select
            id="university-filter"
            value={universityFilter}
            onChange={(e) => setUniversityFilter(e.target.value)}
            className="rounded-md border border-gray-300 bg-white px-3.5 py-2.5 text-[15px] text-gray-700 transition-all focus:border-blue-500 focus:ring-3 focus:ring-blue-500/10 focus:outline-none"
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
          <button
            onClick={handleReset}
            className="cursor-pointer rounded-md border border-gray-300 bg-gray-100 px-5 py-2.5 text-[15px] font-medium whitespace-nowrap text-gray-600 transition-all hover:border-gray-400 hover:bg-gray-200 active:scale-[0.98]"
          >
            Reset Filters
          </button>
        )}
      </div>
    </div>
  );
}
