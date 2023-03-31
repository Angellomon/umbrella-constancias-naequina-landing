<script>
  import Email from "./Email.svelte";
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
  import Message from "./Message.svelte";
  import Title from "./Title.svelte";
</script>

<Header />
<Title />
<div class="content">
  <Email />
  <Message />
</div>
<Footer />

<style>
  div.content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
