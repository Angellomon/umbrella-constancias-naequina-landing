<script lang="ts">
  import { content, lang } from "../store";
</script>

<section>
  <div class="message-container">
    <div class="message-box">
      <h3>{$content.MESSAGE_TEXT_1[$lang]}</h3>

      <p>
        {$content.MESSAGE_TEXT_2_A[$lang]}<b
          >{$content.MESSAGE_TEXT_2_B[$lang]}</b
        >{$content.MESSAGE_TEXT_2_C[$lang]}
      </p>
    </div>
  </div>
</section>

<style>
  section {
    background-color: var(--bg-color-dark);
    background-image: url("/img/white-dots.svg");
    background-repeat: no-repeat;
    background-size: 100px;
    background-position: top left;

    width: 50%;
    min-height: 250px;

    color: var(--font-color);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    align-content: flex-end;
  }

  h3 {
    font-family: Montserrat Bold;

    margin: 0;
  }

  div.message-box {
    background-color: var(--color-principal);

    padding: 15px;
    margin-top: 45px;
    margin-left: 40px;

    width: 80%;
    overflow-y: hidden;
  }

  div.message-box b {
    margin: 0 5px;
  }

  div.message-box p {
    padding: 0;
    margin: 0;
  }

  @media (max-width: 755px) {
    section {
      width: 100%;
    }

    div.message-box {
      margin-top: 45px;
      width: 70%;
    }
  }
</style>
