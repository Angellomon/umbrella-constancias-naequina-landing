<footer>
  <a class="logo-nae" href="https://gponutec.com">
    <img class="gruponutec" src="/logos/nutec.png" alt="GRUPONUTEC" /></a
  >
  <span class="separator" />
  <div>
    <a class="icon" href="https://facebook.com/naequina">
      <img class="icon" src="/icons/facebook.png" alt="facebook" />
    </a>
    <a href="https://youtube.com/channel/UCxkEv07Fa9GroMMxANGdBxw" class="icon">
      <img class="icon" src="/icons/youtube.png" alt="youtube" />
    </a>
  </div>
</footer>

<style>
  a.logo-nae {
    align-self: center;
    display: flex;
    justify-content: right;
  }
  a.icon {
    align-self: center;
    justify-self: right;
  }
  img.icon {
    align-self: center;
    width: 40px;
    height: 40px;
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

    width: 8.6vh;
    height: 88vh;

    transform: rotateY(180deg);

    max-height: 10vh;
  }

  span.separator::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: var(--azul-secundario);
    clip-path: polygon(100% 0, 0 0, 0 100%);
  }

  span.separator::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: var(--naranja-principal);
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
  }

  footer {
    background-color: var(--naranja-principal);

    display: flex;
    justify-content: right;
    position: relative;

    max-height: 10vh;
  }

  @media screen and (max-width: 411px) {
    a.logo-nae {
      left: 5%;
    }

    img.gruponutec {
      width: 70%;
      height: 70%;
      align-self: center;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1366px) {
    img.gruponutec {
      height: 100%;
      width: 100%;
      align-self: center;
    }

    a.logo-nae {
      left: 63vw !important;
    }

    span.separator {
      width: 9.5vh;
      height: 99vh;
    }
  }

  @media screen and (min-width: 1367px) {
    a.logo-nae {
      left: 70%;
    }
  }
</style>
