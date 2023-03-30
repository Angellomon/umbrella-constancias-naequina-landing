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
  EMAIL_TEXT: {
    en: "Provide your email",
    es: "Ingresa tu correo electrónico",
  },
  MESSAGE_TEXT_1: {
    en: "Heads up",
    es: "Importante",
  },
  MESSAGE_TEXT_2_A: {
    en: "In order to be elegible for downloading your Assistance Certificate you must have at least",
    es: "Recuerda que para tener derecho a tu constancia debes haber cumplido, por lo menos, con un mínimo",
  },
  MESSAGE_TEXT_2_B: {
    en: "75% of total assistance time",
    es: "de 75% del tiempo del evento",
  },
  MESSAGE_TEXT_2_C: {
    en: "connected (using the same email you signed up).",
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
};

export const content = readable(initialData);
