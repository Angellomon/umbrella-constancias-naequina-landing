<script lang="ts">
  import MainLayout from "./lib/components/MainLayout.svelte";

</script>

<main>
  <MainLayout />
</main>

<style>
<<<<<<< HEAD
  @font-face {
    font-family: "Montserrat Regular";
    src: url("/fonts/montserrat-regular.ttf");
  }

  @font-face {
    font-family: "Montserrat Bold";
    src: url("/fonts/montserrat-bold.ttf");
  }
  :root {
    --azul-principal: #3e8fd4;
    --azul-secundario: #537acf;
    --azul-gradiente-ini: #ccd7db;
    --azul-gradiente-fin: #83c4ec;

    --gris-principal: #242424;

    --naranja-principal: #f6a82c;

    font-family: "Montserrat Regular", sans-serif;
  }

  main {
    display: flex;
    position: relative;
    flex-direction: column;
  }

  div {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 411px) {
    div.desktop {
      display: none;
    }

    div.mobile {
      display: initial;
    }
  }

  @media (min-width: 760px) {
    div.desktop {
      display: flex;
      margin: 0;
      padding: 0;

      height: 50vh;
      border-bottom: 3px solid white;
    }

    div.mobile {
      display: none;
      margin: 0;
      padding: 0;
    }
  }
=======
>>>>>>> 257c99d (feat(app): udpate js -> ts)
</style>
