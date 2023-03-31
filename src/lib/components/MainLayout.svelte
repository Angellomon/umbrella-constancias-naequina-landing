<script>
  import Email from "./Email.svelte";
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

<style>
  div.content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
