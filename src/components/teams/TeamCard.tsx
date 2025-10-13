import type { Team } from "@/lib/definitions";
import { ParticipantType } from "@/lib/definitions";

interface TeamCardProps {
  team: Team;
}

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <article className="team-card">
      <div className="team-header">
        <img
          src={team.picture}
          alt={`${team.teamName} team photo`}
          className="team-picture"
        />
        <div className="team-info">
          <h3 className="team-name">{team.teamName}</h3>
          <div className="university">
            <img
              src={team.university.logo}
              alt={`${team.university.name} logo`}
              className="university-logo"
            />
            <span className="university-name">{team.university.name}</span>
          </div>
        </div>
      </div>

      <div className="participants">
        <h4>Participants</h4>
        <ul className="participants-list">
          {team.participants.map((participant, index) => (
            <li key={index} className="participant">
              <span className="participant-name">{participant.name}</span>
              <span
                className={`participant-type ${participant.type.toLowerCase()}`}
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
