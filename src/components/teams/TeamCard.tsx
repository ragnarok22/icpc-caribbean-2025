import type { Team } from "@/lib/definitions";
import { ParticipantType } from "@/lib/definitions";
import { DEFAULT_TEAM_PICTURE, DEFAULT_UNIVERSITY_LOGO } from "@/lib/data";
import clsx from "clsx";

interface TeamCardProps {
  team: Team;
}

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Gradient overlay on image */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-10 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
        <img
          src={team.picture || DEFAULT_TEAM_PICTURE}
          alt={team.teamName}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Team info overlay */}
        <div className="absolute right-0 bottom-0 left-0 z-20 p-4 md:p-6">
          <div className="flex items-start gap-3 md:gap-4">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="bg-yellow/30 absolute inset-0 rounded-full blur-md"></div>
                <img
                  src={team.university.logo || DEFAULT_UNIVERSITY_LOGO}
                  alt={`${team.university.name} logo`}
                  className="relative h-12 w-12 rounded-full bg-white object-contain p-1 shadow-xl ring-2 ring-white/50 md:h-14 md:w-14"
                />
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="mb-0.5 truncate text-xl leading-tight font-bold text-white drop-shadow-lg md:mb-1 md:text-2xl">
                {team.teamName}
              </h3>
              <p className="truncate text-xs font-medium text-white/90 drop-shadow-md md:text-sm">
                {team.university.name}
              </p>
            </div>
          </div>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute top-4 right-4 z-20">
          <div className="bg-yellow/90 flex h-10 w-10 items-center justify-center rounded-full shadow-lg backdrop-blur-sm">
            <svg
              className="text-blue h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Participants section */}
      <div className="flex flex-1 flex-col p-4 md:p-6">
        <div className="mb-2.5 flex items-center justify-between md:mb-3">
          <h4 className="text-xs font-bold tracking-wider text-gray-500 uppercase md:text-sm">
            Integrantes
          </h4>
          <span className="bg-blue/10 text-blue rounded-full px-2.5 py-0.5 text-xs font-semibold md:px-3 md:py-1">
            {team.participants.length}
          </span>
        </div>

        <ul className="flex flex-col gap-2">
          {team.participants.map((participant, index) => {
            const isCoach = participant.type === ParticipantType.COACH;
            return (
              <li key={index} className="group/item">
                <div
                  className={clsx(
                    "relative overflow-hidden rounded-lg border-2 px-2.5 py-2 transition-all duration-300 md:rounded-xl md:px-3 md:py-2.5",
                    isCoach
                      ? "border-yellow/30 from-yellow/5 to-yellow/10 hover:border-yellow/60 hover:from-yellow/10 hover:to-yellow/20 bg-linear-to-r"
                      : "border-blue/30 from-blue/5 to-blue/10 hover:border-blue/60 hover:from-blue/10 hover:to-blue/20 bg-linear-to-r",
                  )}
                >
                  {/* Animated background shimmer */}
                  <div
                    className={clsx(
                      "absolute inset-0 -translate-x-full transition-transform duration-500 group-hover/item:translate-x-full",
                      isCoach
                        ? "via-yellow/10 bg-linear-to-r from-transparent to-transparent"
                        : "via-blue/10 bg-linear-to-r from-transparent to-transparent",
                    )}
                  ></div>

                  <div className="relative flex min-w-0 items-center gap-1.5 md:gap-2">
                    {/* Icon */}
                    {isCoach ? (
                      <svg
                        className="text-yellow h-3.5 w-3.5 flex-shrink-0 md:h-4 md:w-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-label="Coach"
                      >
                        {/* Light bulb icon */}
                        <path d="M12 2C9.24 2 7 4.24 7 7c0 1.857 1.03 3.466 2.543 4.309-.366.478-.64 1.018-.812 1.604A1.5 1.5 0 0010 15h4a1.5 1.5 0 001.269-2.087 5.965 5.965 0 01-.812-1.604C15.97 10.466 17 8.857 17 7c0-2.76-2.24-5-5-5zm1.5 14h-3l-.5 2h4l-.5-2zm-.5 4h-2l-.25 1a1 1 0 001 1h.5a1 1 0 001-1l-.25-1z" />
                        <circle cx="12" cy="7" r="3.5" />
                      </svg>
                    ) : (
                      <svg
                        className="text-blue h-3.5 w-3.5 flex-shrink-0 md:h-4 md:w-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-label="Member"
                      >
                        {/* Balloon icon */}
                        <path d="M12 2C9.24 2 7 4.69 7 8c0 2.5 1.5 4.65 3.5 5.65V17h3v-3.35C15.5 12.65 17 10.5 17 8c0-3.31-2.24-6-5-6z" />
                        <ellipse cx="12" cy="7.5" rx="3.5" ry="4.5" />
                        <path d="M12 17l-1 5h2l-1-5z" />
                      </svg>
                    )}
                    <span className="min-w-0 flex-1 truncate text-xs font-medium text-gray-800 md:text-sm">
                      {participant.name}
                    </span>
                    {/* Desktop: text label */}
                    <span
                      className={clsx(
                        "hidden flex-shrink-0 items-center justify-center rounded-lg px-2.5 py-1 text-xs font-bold tracking-wider uppercase shadow-sm transition-all md:flex",
                        isCoach ? "bg-yellow text-blue" : "bg-blue text-white",
                      )}
                    >
                      {isCoach ? "Coach" : "Member"}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Bottom accent line with diagonal stripes */}
      <div
        className="h-1.5"
        style={{
          background:
            "linear-gradient(135deg, var(--color-blue) 0%, var(--color-blue) 33%, var(--color-yellow) 33%, var(--color-yellow) 66%, var(--color-red) 66%, var(--color-red) 100%)",
        }}
      ></div>
    </article>
  );
}
