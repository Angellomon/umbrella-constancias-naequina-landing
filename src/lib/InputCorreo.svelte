<script>
  import { correo } from "./store";

  const handleEnviar = async () => {
    if (!$correo) return;

    console.log(correo);
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
