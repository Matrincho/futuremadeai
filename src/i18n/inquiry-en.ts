import type { InquiryCopy } from "./types";

export const inquiryEn: InquiryCopy = {
  back: "Back",
  title: "Project inquiry",
  lead: "A few details help us respond with something useful—no long questionnaires.",
  submit: "Submit inquiry",
  successTitle: "Thanks — you're all set.",
  successBody:
    "This form does not send data yet. When you connect a backend, you can replace this with email confirmation or your own flow.",
  labels: {
    firstName: "First name",
    lastName: "Last name",
    workEmail: "Work email",
    company: "Company",
    companyWebsite: "Company website",
    role: "Your role",
    companySize: "Company size",
    projectDescription: "Tell us about your project",
  },
  placeholders: {
    firstName: "First name",
    lastName: "Last name",
    workEmail: "you@company.com",
    company: "Your company",
    companyWebsite: "https://yourcompany.com",
    roleSelect: "Select your role",
    companySizeSelect: "Number of employees",
    projectDescription:
      "What challenges are you facing? What does success look like for your business?",
  },
  roles: [
    { value: "c-level", label: "C-level / Executive" },
    { value: "director", label: "Director / VP" },
    { value: "manager", label: "Manager" },
    { value: "ic", label: "Individual contributor" },
    { value: "founder", label: "Founder / Owner" },
    { value: "consultant", label: "Consultant / Freelance" },
    { value: "other", label: "Other" },
  ],
  companySizes: [
    { value: "1-10", label: "1–10" },
    { value: "11-50", label: "11–50" },
    { value: "51-200", label: "51–200" },
    { value: "201-1000", label: "201–1000" },
    { value: "1000+", label: "1000+" },
  ],
};
