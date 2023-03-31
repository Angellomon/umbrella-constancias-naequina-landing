<script type="ts">
  const logosPaths = [
    "logo-galope",
    "logo-equitonik",
    "logo-galotec",
    "logo-grupo-nutec",
    "logo-uvm",
    "logo-aammvee",
  ];
</script>

<footer>
  {#each logosPaths as logo}
    <img src={`/img/${logo}.svg`} alt="" />
  {/each}
</footer>

<style>
  footer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  img {
    height: 60px;
  }
</style>
