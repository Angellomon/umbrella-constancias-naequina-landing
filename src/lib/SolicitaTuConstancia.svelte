<script></script>

<div>
  <section>
    <p>
      <span class="black">SOLICITA TU</span>
      <span class="white">CONSTANCIA</span>
    </p>
  </section>
</div>

<style>
  div {
    background: linear-gradient(90deg, rgba(0,0,0,0) 0%, #99cfff 100%);
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
    font-size: 2.6em;
    font-weight: bold;

    position: relative;
    padding-right: 5%;

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

  @media (min-width: 768px) {
    div {
      width: 100%;
    }
    
    section {
      border-top: none;
      height: 40vh;
    }

    p {
      font-size: 3.5em;

      position: absolute;
      top: 20%;
      left: 40%;

      width: 30vw;
      text-align: center;
    }
  }
</style>