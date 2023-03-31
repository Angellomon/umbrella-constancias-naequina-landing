<script lang="ts">
  import { content, lang } from "../store";
  import EventLogo from "./svg/EventLogo.svelte";
</script>

<section>
  <div class="message-side">
    <EventLogo width={260} />
    <h1>{$content.TITLE_TEXT_1[$lang].toLocaleUpperCase()}</h1>
    <h2>{$content.TITLE_TEXT_2[$lang].toLocaleUpperCase()}</h2>
  </div>
  <div class="img-side">
    <img width="500px" src="/img/horse-1.png" alt="horse-img" />
  </div>
</section>

<style>
  section {
    background-color: #f4f4f4;
    background-repeat: no-repeat;
    background-size: 600px;
    background-image: url("/img/bg-dots.png");
    background-position: right center;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    align-items: flex-end;

    height: 25vh;
    min-height: 200px;

    border-bottom: 30px solid var(--bg-color-dark);
  }

  div.message-side {
    display: flex;
    flex-direction: column;

    align-self: flex-start;
    flex-grow: 2;

    margin-top: 10px;
    margin-left: 10vw;
  }

  div.img-side {
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    align-self: flex-end;

    min-width: 20vw;
  }

  div.img-side img {
    max-width: 250px;

    /* margin-left: 10%; */
  }

  h1 {
    font-family: Montserrat Bold;
    font-size: 30px;

    margin: 0;
  }

  h2 {
    font-family: Montserrat Regular;
    font-weight: lighter;

    color: var(--color-principal);

    margin: 0;
  }

  @media (max-width: 925px) {
    section {
      height: 65vh;

      /* background-size: 1000px; */
      background-size: cover;
    }

    div.img-side img {
      max-width: 500px;
    }

    div.img-side {
      align-items: flex-end;
    }
  }

  @media (max-width: 465px) {
    section {
      height: 70vh;
      background-size: cover;
      /* background-size: 1050px; */
    }

    div.img-side img {
      max-width: 500px;
    }
  }
</style>
