import { lang } from "./store";

export function toggleLang() {
  let currentLang;
  lang.subscribe((l) => {
    currentLang = l;
  });

  if (currentLang == "en") {
    lang.set("es");
  } else if (currentLang == "es") {
    lang.set("en");
  }
}

export function submitEmail(email: string) {
  const isValidEmail = validateEmail(email);

  if (!isValidEmail) return;

  // TODO: impl pdf download
}

export function validateEmail(email: any) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
