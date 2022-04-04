<script>
  import Titulo from "./Titulo.svelte";
</script>

<section>
  <img src="/logos/nae.png" alt="NAEQUINA" />
  <hr />
  <Titulo />
</section>

<style>
  img {
    height: 100%;
    /* max-width: 80%; */
  }

  hr {
    color: white;
    width: 70%;
    border-left: none;
    border-right: none;
    border-bottom: none;
    border-top: 0.5px solid white;
  }

  @media (max-width: 411px) {
    section {
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      width: 100%;
      background-color: var(--naranja-principal);
    }
  }

  @media (min-width: 768px) {
    section {
      position: absolute;
      float: right;
    }
  }
</style>
