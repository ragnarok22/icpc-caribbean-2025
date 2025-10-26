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
        <div className="absolute right-0 bottom-0 left-0 z-20 p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="bg-yellow/30 absolute inset-0 rounded-full blur-md"></div>
                <img
                  src={team.university.logo || DEFAULT_UNIVERSITY_LOGO}
                  alt={`${team.university.name} logo`}
                  className="relative h-14 w-14 rounded-full bg-white object-contain p-1 shadow-xl ring-2 ring-white/50"
                />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="mb-1 text-2xl leading-tight font-bold text-white drop-shadow-lg">
                {team.teamName}
              </h3>
              <p className="text-sm font-medium text-white/90 drop-shadow-md">
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
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="text-sm font-bold tracking-wider text-gray-500 uppercase">
            Integrantes
          </h4>
          <span className="bg-blue/10 text-blue rounded-full px-3 py-1 text-xs font-semibold">
            {team.participants.length}
          </span>
        </div>

        <ul className="flex flex-col gap-2.5">
          {team.participants.map((participant, index) => {
            const isCoach = participant.type === ParticipantType.COACH;
            return (
              <li key={index} className="group/item">
                <div
                  className={clsx(
                    "relative overflow-hidden rounded-xl border-2 px-4 py-3 transition-all duration-300",
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

                  <div className="relative flex items-center justify-between">
                    <span className="font-medium text-gray-800">
                      {participant.name}
                    </span>
                    {/* Desktop: text, Mobile: icon */}
                    <span
                      className={clsx(
                        "flex items-center justify-center rounded-lg px-3 py-1 text-xs font-bold tracking-wider uppercase shadow-sm transition-all",
                        isCoach ? "bg-yellow text-blue" : "bg-blue text-white",
                      )}
                    >
                      {/* Text visible only on md+ screens */}
                      <span className="hidden md:inline">
                        {isCoach ? "Coach" : "Member"}
                      </span>
                      {/* Icon visible only on small screens */}
                      {isCoach ? (
                        <svg
                          className="h-4 w-4 md:hidden"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-label="Coach"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ) : (
                        <svg
                          className="h-4 w-4 md:hidden"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-label="Member"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
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
