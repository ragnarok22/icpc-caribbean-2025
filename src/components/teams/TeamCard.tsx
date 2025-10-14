import type { Team } from "@/lib/definitions";
import { ParticipantType } from "@/lib/definitions";

interface TeamCardProps {
  team: Team;
}

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-6 flex gap-4">
        <img
          src={team.picture}
          alt={team.teamName}
          className="h-30 w-30 shrink-0 rounded-lg object-cover"
        />
        <div className="flex flex-col justify-center gap-2">
          <h3 className="m-0 text-2xl font-bold text-gray-900">
            {team.teamName}
          </h3>
          <div className="flex items-center gap-2">
            <img
              src={team.university.logo}
              alt={`${team.university.name} logo`}
              className="h-8 w-8 object-contain"
            />
            <span className="text-sm text-gray-600">
              {team.university.name}
            </span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="m-0 mb-4 text-lg font-semibold text-gray-900">
          Participants
        </h4>
        <ul className="m-0 flex list-none flex-col gap-3 p-0">
          {team.participants.map((participant, index) => (
            <li
              key={index}
              className="flex items-center justify-between rounded bg-gray-50 p-2"
            >
              <span className="font-medium text-gray-800">
                {participant.name}
              </span>
              <span
                className={`rounded px-2 py-1 text-xs font-semibold uppercase ${
                  participant.type === ParticipantType.COACH
                    ? "bg-yellow-200 text-yellow-800"
                    : "bg-blue-200 text-blue-800"
                }`}
              >
                {participant.type === ParticipantType.COACH
                  ? "Coach"
                  : "Member"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
