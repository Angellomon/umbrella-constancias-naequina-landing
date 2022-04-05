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
    justify-self: right;
    position: absolute;
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

  img.gruponutec {
    height: 70%;
    width: 70%;
    align-self: center;
    text-align: right;
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

  @media (max-width: 411px) {
    a.logo-nae {
      left: 10%;
    }

    img.gruponutec {
      width: 70%;
      height: 70%;
      align-self: center;
    }
  }

  @media (min-width: 768px) {
    span.separator {
      display: block;
      position: relative;

      width: 9.5vh;
      height: 99vh;

      transform: rotateY(180deg);

      max-height: 10vh;
    }
  }
</style>
