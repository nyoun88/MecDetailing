export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

/** Homepage "THE FINISH STARTS BEFORE THE COATING" technical timeline. */
export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Assess",
    description: "Paint condition is assessed in person to confirm the right package and preparation required.",
  },
  {
    number: "02",
    title: "Decontaminate",
    description: "Chemical and mechanical decontamination removes bonded surface contaminants before anything else happens.",
  },
  {
    number: "03",
    title: "Correct",
    description: "Machine polishing addresses swirl marks, light scratches and oxidation where the paint condition requires it.",
  },
  {
    number: "04",
    title: "Prepare",
    description: "Panels are wiped down and inspected under lighting to confirm the surface is coating-ready.",
  },
  {
    number: "05",
    title: "Coat",
    description: "Your chosen Gtechniq ceramic system is applied by hand, panel by panel, under controlled conditions.",
  },
  {
    number: "06",
    title: "Cure",
    description: "The coating is left to cure before handover, with aftercare guidance for the first wash and beyond.",
  },
];

/** Retained for the customer-facing "quote → coating" journey used elsewhere. */
export interface JourneyStep {
  number: string;
  title: string;
  description: string;
}

export const journeySteps: JourneyStep[] = [
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
