<script>
  import Header from "./lib/Header.svelte";
</script>

<main>
  <Header />
  <h1>Hola</h1>
</main>

<style>
  @font-face {
    font-family: Montserrat;
    src: url("/fonts/montserrat.ttf");
  }
  :root {
    --azul-principal: #3e8fd4;
    --azul-secundario: #537acf;

    --gris-principal: #242424;

    --naranja-principal: #f6a82c;

    font-family: "Montserrat", sans-serif;
  }

  main {
    display: flex;
    position: relative;
  }

  @media (max-width: 411px) {
    main {
      flex-direction: column;
    }
  }
</style>
