import type { InquiryCopy } from "./types";

export const inquiryBg: InquiryCopy = {
  back: "Назад",
  title: "Запитване за проект",
  lead: "Кратко описание ни помага да отговорим по смисъл — без дълги анкети.",
  submit: "Изпрати запитване",
  successTitle: "Благодарим — готово е.",
  successBody:
    "Формулярът все още не изпраща данни. След като свържете бекенд, заменете това с имейл или ваша стъпка.",
  labels: {
    firstName: "Име",
    lastName: "Фамилия",
    workEmail: "Работен имейл",
    company: "Компания",
    companyWebsite: "Уебсайт на компанията",
    role: "Вашата роля",
    companySize: "Размер на компанията",
    projectDescription: "Разкажете ни за вашия проект",
  },
  placeholders: {
    firstName: "Име",
    lastName: "Фамилия",
    workEmail: "you@company.com",
    company: "Вашата компания",
    companyWebsite: "https://yourcompany.com",
    roleSelect: "Изберете вашата роля",
    companySizeSelect: "Брой служители",
    projectDescription:
      "Пред какви предизвикателства сте изправени? Как изглежда успехът за вашия бизнес?",
  },
  roles: [
    { value: "c-level", label: "Ръководство / изпълнителен екип" },
    { value: "director", label: "Директор / VP" },
    { value: "manager", label: "Мениджър" },
    { value: "ic", label: "Експерт / специалист" },
    { value: "founder", label: "Основател / собственик" },
    { value: "consultant", label: "Консултант / фрийланс" },
    { value: "other", label: "Друго" },
  ],
  companySizes: [
    { value: "1-10", label: "1–10" },
    { value: "11-50", label: "11–50" },
    { value: "51-200", label: "51–200" },
    { value: "201-1000", label: "201–1000" },
    { value: "1000+", label: "1000+" },
  ],
};
