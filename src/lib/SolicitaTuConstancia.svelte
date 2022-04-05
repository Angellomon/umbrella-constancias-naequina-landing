<script></script>

<div>
  <section>
    <p>
      <span class="black">SISTEMA DE CONSTANCIAS</span>
      <span class="white">NAEQUINA</span>
    </p>
  </section>
</div>

<style>
  div {
    background: linear-gradient(
      90deg,
      var(--azul-gradiente-ini) 0%,
      var(--azul-gradiente-fin) 100%
    );
  }

  section {
    background-image: url("/img/caballo-transparente.png");
    background-size: contain;
    background-repeat: no-repeat;
    border-top: 3px solid white;
    border-bottom: 3px solid white;

    position: relative;
  }

  p {
    font-family: "Montserrat Bold";
    font-size: 1.8em;
    font-weight: bold;

    position: relative;
    padding-right: 5vw;

    text-align: right;
  }

  span.black {
    color: black;
  }

  span.white {
    color: white;
  }

  @media (max-width: 411px) {
    section {
      height: 30vh;
    }
  }

  @media (min-width: 768px) and (max-width: 1366px) {
    div {
      width: 100%;
    }

    section {
      border-top: none;
      height: 40vh;
      position: relative;
    }

    p {
      font-family: "Montserrat Bold";
      font-size: 3.5em;

      position: absolute;
      top: 20%;
      left: 30%;

      width: 60vw;
      text-align: center;
    }
  }
  @media (min-width: 1367px) {
    p {
      font-size: 3.5em;

      position: absolute;
      top: 30%;
      left: 30%;

      width: 60vw;
      text-align: center;
    }

    div {
      width: 100%;
    }

    section {
      border-top: none;
      height: 40vh;
      position: relative;
    }
  }
</style>
