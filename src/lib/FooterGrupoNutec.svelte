<footer>
  <img class="gruponutec" src="/logos/nutec.png" alt="GRUPONUTEC">
  <span class="separator" />
  <div>
    <img class="icon" src="/icons/facebook.png" alt="facebook">
    <img class="icon" src="/icons/youtube.png" alt="youtube">
  </div>
</footer>

<style>
  img.icon {
    width: 40px;
    height: 40px;
    align-self: center;
  }

  img.gruponutec {
    height: 60%;
    width: 60%;
    align-self: center;
  }

  div {
    display: inline-flex;
    border-right: none;
    background-color: var(--azul-secundario);

    padding-right: 2vw;
  }

  span.separator {
    display: block;
    position: relative;

    width: 8.5vh;
    height: 8vh;

    transform: rotateY(180deg);

    max-height: 10vh;
  }

  span.separator::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: var(--azul-secundario);
    clip-path: polygon(100% 0, 0 0 , 0 100%);
  }
  
  span.separator::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: var(--naranja-principal);
    clip-path: polygon(100% 0, 0 100% , 100% 100%);
  }

  span.separator::before {
    position: absolute;
  }

  footer {
    background-color: var(--naranja-principal);

    display: flex;
    justify-content: right;

    max-height: 10vh;
  }

</style>