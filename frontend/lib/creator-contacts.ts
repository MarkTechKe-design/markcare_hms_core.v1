export const creatorContacts = [
  {
    name: "Eng. Mark Ochieng Oduor",
    role: "Lead Systems Architect & Core Engineer",
    phone: "0718178521",
    whatsappNumber: "254718178521",
    focus: "Platform architecture, core HMS deployment, secure APIs, and operational governance.",
    message:
      "Hello Eng. Mark, I need assistance with MarkCare HMS. Kindly help me with setup, support, or system guidance.",
  },
  {
    name: "Eng. Moikoyo Paul",
    role: "Frontend developer major",
    phone: "0715673393",
    whatsappNumber: "254715673393",
    focus: "Premium interfaces, user experience, dashboards, and workflow design.",
    message:
      "Hello Eng. Moikoyo, I need assistance with MarkCare HMS. Kindly help me with setup, support, or system guidance.",
  },
] as const;

export const supportContacts = creatorContacts.filter((creator) =>
  creator.name.includes("Mark"),
);

export function getWhatsappLink(whatsappNumber: string, message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
