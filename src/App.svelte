<script>
  import FooterEmpresas from "./lib/FooterEmpresas.svelte";
import FooterGrupoNutec from "./lib/FooterGrupoNutec.svelte";
import Header from "./lib/Header.svelte";
import Importante from "./lib/Importante.svelte";
import InputCorreo from "./lib/InputCorreo.svelte";
import SolicitaTuConstancia from "./lib/SolicitaTuConstancia.svelte";
</script>

<main>
  <Header />
  <SolicitaTuConstancia />
  <Importante />
  <InputCorreo />
  <FooterGrupoNutec />
  <FooterEmpresas />
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
