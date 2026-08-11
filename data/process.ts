export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Get Your Quote",
    description:
      "Tell us about your vehicle and what you'd like protected. We'll come back with package guidance and next steps.",
  },
  {
    number: "02",
    title: "Vehicle Assessment",
    description:
      "We assess your paint condition in person to confirm the right package and preparation required.",
  },
  {
    number: "03",
    title: "Paint Preparation",
    description:
      "Decontamination and, where needed, correction to bring the paint to the right condition before coating.",
  },
  {
    number: "04",
    title: "Ceramic Application",
    description:
      "Your chosen Gtechniq ceramic system is professionally applied and cured under controlled conditions.",
  },
  {
    number: "05",
    title: "Handover & Aftercare",
    description:
      "A full walkthrough of your finished vehicle, plus guidance on how to maintain your coating long-term.",
  },
];
