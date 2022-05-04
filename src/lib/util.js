import axios from "axios";
import { correo, status } from "./store";

const BASE_URL = "https://umbrella-constancias.herokuapp.com";

export const consultarCorreo = async () => {
  let email;
  correo.subscribe((v) => {
    email = v;
  });

  const validEmail = validarCorreo(email);
  if (!validEmail) return;

  try {
    status.set({
      downloadError: false,
      invalidEmail: false,
      loadingEmail: true,
    });

    const res = await axios.get(
      `${BASE_URL}/eventos/js5636rutw/asistentes/buscar?correo=${email}`,
      {
        responseType: "blob",
      }
    );

    if (res.status !== 200) return;

    const _url = window.URL.createObjectURL(new Blob([res.data]));

    const link = document.createElement("a");

    link.href = _url;
    link.setAttribute(
      "download",
      `CONSTANCIA DE PARTICIPACIÓN - 5° Ciclo Internacional de Conferencias.pdf`
    );

    document.body.appendChild(link);

    link.click();
  } catch (err) {
    console.log(err);
    status.update((v) => ({ ...v, downloadError: true }));
  } finally {
    status.update((v) => ({ ...v, loadingEmail: false }));
  }
};

export const validarCorreo = (correo = "") => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let res = re.test(String(correo).toLowerCase());
  status.update((v) => ({ ...v, invalidEmail: !res }));

  return res;
};
