<script>
  import { correo } from "./store";
  import axios from "axios";

  // const BASE_URL = "https://localhost:5000";
  const BASE_URL = "https://umbrella-constancias.herokuapp.com";

  const handleEnviar = async () => {
    if (!$correo) return;

    try {
      const res = await axios.get(
        `${BASE_URL}/eventos/js5636rutw/asistentes/buscar?correo=${$correo}`,
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
    }
  };
</script>

<section>
  <p>Ingresa tu correo electrónico</p>

  <input bind:value={$correo} type="email" placeholder="CORREO" />

  <button on:click={handleEnviar}>ENVIAR</button>
</section>

<style>
  button {
    background-color: var(--naranja-principal);

    color: white;

    font-family: "Montserrat Bold";

    padding: 0.5em 1.4em;
    margin: 2em auto;

    font-weight: bold;
    font-size: 1.2em;

    border-radius: 30px;
    border: none;
  }

  p {
    color: white;

    font-size: 1.3em;
    font-weight: lighter;
  }

  section {
    background-color: var(--azul-principal);

    border-top: 3px solid white;
    border-bottom: 3px solid white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    text-align: center;
  }

  input {
    border: none;
    border-radius: 5px;

    margin: auto;
    padding: 0.6em 1.5em;

    width: 70%;
  }

  @media (min-width: 768px) {
    section {
      border-top: none;
      border-bottom: none;

      width: 80vw;
    }

    p {
      margin-top: 2.3em;
      font-size: 1.2em;
    }

    input {
      margin-top: 0;
      margin-bottom: 0;
      width: 60%;
    }
  }
</style>
