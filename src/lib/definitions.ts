export type University = {
  name: string;
  logo: string;
};

export enum ParticipantType {
  MEMBER = "MEMBER",
  COACH = "COACH",
}

export type Participant = {
  name: string;
  type: ParticipantType;
};

export type Team = {
  teamName: string;
  picture: string;
  participants: Participant[];
  university: University;
};

export type Sponsor = {
  logo: string;
  name: string;
  url: string;
};

export type Social = {
  name: "instagram" | "telegram" | "youtube" | "facebook";
  url: string;
  image: {
    logo: string;
    width: number;
    height: number;
  };
};
