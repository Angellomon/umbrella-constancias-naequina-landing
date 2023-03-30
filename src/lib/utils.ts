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
