<script>
  import Titulo from "./Titulo.svelte";
</script>

<section>
  <img src="/logos/nae.png" alt="NAEQUINA" />
  <hr  class="horizontal" />
  <span  class="vertical" />
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

  section {
    background-color: var(--naranja-principal);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  @media (max-width: 411px) {
    section {
      flex-direction: column;
      width: 100%;
    }

    span.vertical {
      display: none;
    }
  }
  
  @media (min-width: 768px) {
  img {
    margin-left: 5%;
  }
    section {
      border-bottom-left-radius: 100px;

      flex-direction: row;
      position: absolute;
      justify-content: left;


      width: 60%;

      right: 0;
    }
    
    hr.horizontal {
      display: none;
    }

    span.vertical {
      display: inline;

      border-right: 1px solid white;

      width: 1px;
      height: 5vh;

      margin: 0 1.3vw 0 1vw;
    }
  }
</style>
