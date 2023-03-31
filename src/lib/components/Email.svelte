<script type="ts">
  import { content, lang, email } from "../store";
  import { submitEmail } from "../utils";

  function handleSubmitClick() {
    submitEmail($email);
  }
</script>

<section>
  <div class="email-label-container">
    <div class="email-label">
      {$content.EMAIL_LABEL_TEXT[$lang]}
    </div>
  </div>
  <div class="email-input-container">
    <input
      bind:value={$email}
      placeholder={$content.EMAIL_PLACEHOLDER[$lang]}
      type="email"
      name="enail"
      id="email"
    />
    <button on:click={handleSubmitClick}
      >{$content.EMAIL_BUTTON_TEXT[$lang]}</button
    >
  </div>
</section>

<style>
  section {
    background-color: var(--bg-color-dark);
    color: var(--font-color);

    width: 50%;
    min-height: 250px;
  }

  div.email-label-container {
    position: relative;
    width: 70%;
  }

  div.email-label {
    background: var(--color-principal);
    background: -moz-linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      var(--color-principal-rgba) 50%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      var(--color-principal-rgba) 50%
    );
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      var(--color-principal-rgba) 50%
    );

    font-size: 20px;
    font-family: Montserrat Italic;
    text-decoration: underline;
    /* font-weight: bold;
    font-style: italic; */

    padding: 5px 15px;
  }

  div.email-label::after {
    content: "";
    position: absolute;
    background-image: url("/img/triangle.png");
    width: 60px;
    height: 100%;
    background: var(--color-principal);
    transform: skewX(-30deg);
    -webkit-transform: skewX(-30deg);
    /* z-index: -10; */

    top: 0;
    right: -20px;
  }

  div.email-input-container {
    padding: 10vh 5vh;
    margin: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    border: none;

    /* margin: 0 10%; */
    padding: 5px 20px;

    width: 70%;
  }

  input:focus,
  input:active {
    border-color: var(--color-principal);
  }

  button {
    background-color: var(--color-principal);

    border: none;
    border-radius: 50px;

    color: var(--font-color);

    font-size: 20px;

    margin-top: 20px;

    padding: 5px 30px;
  }

  button:hover {
    background-color: rgba(229, 54, 69, 0.8);

    cursor: pointer;
  }

  @media (max-width: 755px) {
    section {
      width: 100%;
    }
  }
</style>
