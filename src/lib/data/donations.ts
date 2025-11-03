export type DonationCardEntry = {
  label: string;
  display: string;
  copy: string;
  ariaLabel: string;
  isMonospace?: boolean;
};

export type DonationCard = {
  id: string;
  title: string;
  description: string;
  entries: DonationCardEntry[];
};

export const DONATION_CARDS: DonationCard[] = [
  {
    id: "national",
    title: "Donaciones monetarias nacionales",
    description:
      "Transferencias bancarias o donaciones en efectivo en cualquier moneda con curso legal en Cuba.",
    entries: [
      {
        label: "Contacto",
        display: "+53 52465767 (Yisel Clavel, Directora ICPC Cuba)",
        copy: "+5352465767",
        ariaLabel: "Copiar contacto de Yisel Clavel",
      },
      {
        label: "Tarjeta CUP",
        display: "9204 0699 9334 6196",
        copy: "9204069993346196",
        ariaLabel: "Copiar tarjeta CUP",
        isMonospace: true,
      },
      {
        label: "Tarjeta MLC",
        display: "9235 0699 9592 1551",
        copy: "9235069995921551",
        ariaLabel: "Copiar tarjeta MLC",
        isMonospace: true,
      },
    ],
  },
  {
    id: "crypto",
    title: "Criptomonedas",
    description:
      "Coordinamos un enlace de pago según la moneda y el monto. Escríbenos para acompañarte en el proceso.",
    entries: [
      {
        label: "Atención personalizada",
        display: "+53 52465767 (Yisel)",
        copy: "+5352465767",
        ariaLabel: "Copiar contacto de Yisel",
      },
      {
        label: "Soporte opcional",
        display: "+53 51578493 (Guillermo, solo WhatsApp)",
        copy: "+5351578493",
        ariaLabel: "Copiar contacto de Guillermo",
      },
    ],
  },
];
