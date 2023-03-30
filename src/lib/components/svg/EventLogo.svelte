<script lang="ts">
  import EventLogoEsp from "./EventLogoESP.svelte";
  import EventLogoEng from "./EventLogoENG.svelte";

  import { lang } from "../../store";

  export let width: number = 300;
</script>

{#if $lang == "en"}
  <EventLogoEng {width} />
{:else}
  <EventLogoEsp {width} />
{/if}
