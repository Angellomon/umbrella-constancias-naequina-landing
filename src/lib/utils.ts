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

export async function submitEmail(
  email: string,
  onError: (v: string) => void = () => {}
) {
  const isValidEmail = validateEmail(email);

  try {
    if (!isValidEmail) throw "incorrect-email";

    const query = `correo=${email.toLowerCase()}`;
    const result = await fetch(
      `${emailConfig.serverUrl}/pdf/${emailConfig.eventId}?${query}`
    );

    if (result.status == 404) throw "not-found";
    if (result.status == 400) throw "incorrect-email";
    if (result.status == 500) throw "server-error";

    const blob = await result.blob();
    const file = window.URL.createObjectURL(blob);

    window.location.assign(file);
  } catch (errCode) {
    onError(errCode);
  }
}

export function validateEmail(email: any) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const emailConfig = {
  serverUrl: "https://constancias.umbrellaservices.angellos.net",
  eventId: "wqnv7jnduv",
};
