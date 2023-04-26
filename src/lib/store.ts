import { writable, readable } from "svelte/store";

export const email = writable<string | null>(null);

type Langs = "en" | "es";

export const lang = writable<Langs>("es");

type LangContent = Record<Langs, string>;

type ContentByLang = Record<any, LangContent>;

const initialData = {
  MAIN_SITE_BUTTON_TEXT: {
    en: "Return to main site",
    es: "Regresar al sitio principal",
  },
  TITLE_TEXT_1: {
    en: "Download your event",
    es: "Descarga tu constancia",
  },
  TITLE_TEXT_2: {
    en: "assistance certificate",
    es: "de asistencia al evento",
  },
  EMAIL_LABEL_TEXT: {
    en: "Enter your email",
    es: "Ingresa tu correo electrónico",
  },
  EMAIL_LABEL_TEXT_NOTICE: {
    en: "Please add the same email you used to register for NAEQUINA 2023",
    es: "Favor de agregar el mismo correo con el que te registraste a NAEQUINA 2023 ",
  },
  EMAIL_BUTTON_TEXT: {
    en: "Submit",
    es: "Enviar",
  },
  MESSAGE_TEXT_1: {
    en: "Important!",
    es: "¡Importante!",
  },
  MESSAGE_TEXT_2_A: {
    en: "In order to obtain your Assistance Certificate you must have met, at least,",
    es: "Recuerda que para tener derecho a tu constancia debes haber cumplido, por lo menos, con un mínimo",
  },
  MESSAGE_TEXT_2_B: {
    en: "a minimum of 55% assistance to the event",
    es: "de 55% del tiempo del evento",
  },
  MESSAGE_TEXT_2_C: {
    en: "(always using the email with which you registered).",
    es: "conectado al mismo (utilizando el correo con el cual te registraste).",
  },
  LOGO_SRC: {
    en: "/img/logo-naequina_eng.svg",
    es: "/img/logo-naequina_esp.svg",
  },
  FLAG_IMG_SRC: {
    en: "/img/flag-mex.png",
    es: "/img/flag-usa.png",
  },
  EVENT_LOGO_IMG: {
    en: "/img/logo-event_eng.svg",
    es: "/img/logo-event_esp.svg",
  },
  EMAIL_PLACEHOLDER: {
    en: "Email",
    es: "Correo electónico",
  },
};

export const content = readable(initialData);

export const emailIsLoading = writable(false);

export const errors = writable({
  invalidEmail: false,
  emailNotFound: false,
  serverError: false,
});
