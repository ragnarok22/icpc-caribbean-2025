import { ParticipantType, type Team } from "@/lib/definitions";

export const TEAMS: Team[] = [
  {
    teamName: "Team 1",
    picture: "",
    participants: [
      {
        name: "Participant 1",
        type: ParticipantType.MEMBER,
      },
      {
        name: "Participant 2",
        type: ParticipantType.MEMBER,
      },
      {
        name: "Participant 3",
        type: ParticipantType.COACH,
      },
    ],
    university: {
      name: "University 1",
      logo: "",
    },
  },
  {
    teamName: "Team 2",
    picture: "",
    participants: [
      {
        name: "Participant 1",
        type: ParticipantType.MEMBER,
      },
      {
        name: "Participant 2",
        type: ParticipantType.MEMBER,
      },
      {
        name: "Participant 3",
        type: ParticipantType.COACH,
      },
    ],
    university: {
      name: "University 1",
      logo: "",
    },
  },
];
