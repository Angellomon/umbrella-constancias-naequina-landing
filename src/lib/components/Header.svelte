<script lang="ts">
  import { lang, content } from "../store";
  import { toggleLang } from "../utils";

  export const target = "https://naequina.com/";
</script>

<header>
  <img class="logo" src={$content.LOGO_SRC[$lang]} alt="logo naequina esp" />

  <div class="contenido">
    <a href={target}>{$content.MAIN_SITE_BUTTON_TEXT[$lang]}</a>
    <img
      on:click={() => toggleLang()}
      on:keydown={() => {}}
      class="flag"
      src={$content.FLAG_IMG_SRC[$lang]}
      alt={$lang}
    />
  </div>
</header>

<style>
  header {
    background: var(--color-principal);
    background: -moz-linear-gradient(
      90deg,
      var(--color-principal-rgba) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      var(--color-principal-rgba) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    background: linear-gradient(
      90deg,
      var(--color-principal-rgba) 0%,
      rgba(0, 0, 0, 1) 100%
    );

    height: 80px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: space-around;
    align-items: center;

    border-bottom: 1px solid white;
  }

  header img {
    cursor: pointer;
  }

  header img.logo {
    width: 300px;
    transition: width 0.5s;
  }

  header img.flag {
    max-width: 50px;
    margin-left: 10px;
  }

  header a {
    text-decoration: none;
    color: var(--font-color);

    padding: 10px 10px;
  }

  header a:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transition: background 0.5s;
  }

  div.contenido {
    /* min-width: 45vw; */

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  /* media queries */
  @media (max-width: 605px) {
    header {
      height: 20vh;
    }
  }
</style>
