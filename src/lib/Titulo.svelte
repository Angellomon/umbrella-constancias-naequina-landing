<script>
  import LogoConferencia from "./LogoConferencia.svelte";
</script>

<div>
  <LogoConferencia />
</div>

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 768px) {
    div {
      margin-bottom: 10px;
    }
  }
</style>
