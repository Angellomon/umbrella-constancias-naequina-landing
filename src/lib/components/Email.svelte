<script lang="ts">
  import { fly } from "svelte/transition";

  import LoadingIcon from "../../assets/spinner-solid.svg";
  import { content, lang, email, emailIsLoading, errors } from "../store";
  import { submitEmail } from "../utils";

  async function handleSubmitError(errCode: string) {
    if (errCode == "not-found") $errors.emailNotFound = true;

    if (errCode == "incorrect-email") $errors.invalidEmail = true;

    if (errCode == "server-error") $errors.serverError = true;
  }

  async function handleSubmitClick() {
    try {
      errors.set({
        emailNotFound: false,
        invalidEmail: false,
        serverError: false,
      });

      $emailIsLoading = true;

      await submitEmail($email, handleSubmitError);
    } catch (err) {
      console.log(err);
    } finally {
      $emailIsLoading = false;
    }
  }
</script>

<section>
  <div class="email-label-container">
    <div class="email-label">
      {$content.EMAIL_LABEL_TEXT[$lang]}
    </div>
    <div class="email-notice">
      <i>{$content.EMAIL_LABEL_TEXT_NOTICE[$lang]}</i>
    </div>
  </div>
  <div class="email-input-container">
    <input
      bind:value={$email}
      placeholder={$content.EMAIL_PLACEHOLDER[$lang]}
      on:keypress={(e) => {
        if (e.key == "Enter" || e.keyCode == 13) handleSubmitClick();
      }}
      type="email"
      name="enail"
      id="email"
    />
    <button on:click={handleSubmitClick}>
      <span class="txt">{$content.EMAIL_BUTTON_TEXT[$lang]}</span>

      {#if $emailIsLoading}
        <img class="loading" src={LoadingIcon} alt="loading..." />
      {/if}
    </button>

    {#if $errors.emailNotFound}
      <p transition:fly>{$content.ERROR_EMAIL_NOT_FOUND[$lang]}</p>
    {/if}

    {#if $errors.invalidEmail}
      <p transition:fly>{$content.ERROR_EMAIL_INVALID[$lang]}</p>
    {/if}

    {#if $errors.serverError}
      <p transition:fly>{$content.ERROR_EMAIL_OTHER[$lang]}</p>
    {/if}
  </div>
</section>

<style>
  section {
    background-color: var(--bg-color-dark);
    color: var(--font-color);

    width: 50%;
    min-height: 250px;
    transition: height 1s linear;
  }

  div.email-label-container {
    position: relative;

    transition: height 1s linear;

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

  div.email-notice {
    position: absolute;

    bottom: -30px;
    left: 15px;

    color: white;
    font-family: "Montserrat Regular";
    font-size: 12px;
    line-height: 1;
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

  img.loading {
    color: white;

    -webkit-animation-name: spin;
    -webkit-animation-duration: 4000ms;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-name: spin;
    -moz-animation-duration: 4000ms;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
    -ms-animation-name: spin;
    -ms-animation-duration: 4000ms;
    -ms-animation-iteration-count: infinite;
    -ms-animation-timing-function: linear;

    animation-name: spin;
    animation-duration: 4000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    /* position: absolute;
    right: 15%; */

    justify-self: flex-end;

    margin-left: 15px;

    width: 23px;
    height: 23px;

    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(125deg)
      brightness(103%) contrast(102%);
  }

  p {
    margin: 10px 0;
  }

  input {
    border: none;

    font-size: large;
    text-align: center;

    /* margin: 0 10%; */
    padding: 10px 20px;

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

    padding: 5px 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    /* width: 30%; */
  }

  button:hover {
    background-color: rgba(229, 54, 69, 0.8);

    cursor: pointer;
  }

  button span.txt {
    /* position: absolute;
    left: 10px; */

    justify-self: flex-start;
  }

  @media (max-width: 755px) {
    section {
      width: 100%;
    }

    img.loading {
      width: 20px;
      height: 20px;
    }
  }

  @-moz-keyframes spin {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
