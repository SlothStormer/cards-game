<script lang="ts">
  import Admin from "./lib/admin/Admin.svelte";
  import Game from "./lib/game/Game.svelte";
  import Home from "./lib/home/Home.svelte";
  import { globalState } from "./state/state.svelte";

  function changePage(page: string) {
    globalState.page = page;
  }
</script>

<div>
  <nav class="flex justify-center">
    <div class="flex flex-row gap-2">
      <button
        onclick={() => changePage("home")}
        class="bg-gray-500 p-2 rounded-md hover:bg-gray-700 cursor-pointer"
        >Home</button
      >
      <button
        onclick={() => changePage("game")}
        class="bg-gray-500 p-2 rounded-md hover:bg-gray-700 cursor-pointer"
        >Game</button
      >
      <button
        onclick={() => changePage("admin")}
        class="bg-gray-500 p-2 rounded-md hover:bg-gray-700 cursor-pointer"
        >Admin</button
      >
    </div>
  </nav>
  {#if globalState.page === "home"}
    <Home bind:page={globalState.page} />
  {:else if globalState.page === "game"}
    <Game />
  {:else if globalState.page === "admin"}
    <Admin />
  {/if}
</div>
