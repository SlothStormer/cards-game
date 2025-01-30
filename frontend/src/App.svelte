<script lang="ts">
    import { onMount } from "svelte";
  import Admin from "./lib/admin/Admin.svelte";
  import Game from "./lib/game/Game.svelte";
  import Home from "./lib/home/Home.svelte";
  import { globalState } from "./state/state.svelte";

  onMount(() => {
    if (localStorage.getItem("page")) {
      globalState.page = localStorage.getItem("page") as string;
    } else {
      globalState.page = "home";
    }
  });

  function changePage(page: string) {
    globalState.page = page;
    localStorage.setItem("page", page)
  }
</script>

<div class="flex flex-col justify-stretch items-stretch h-screen">
  <nav class="flex justify-center bg-black/50 p-2">
    <div class="flex flex-row gap-2">
      <button
        onclick={() => changePage("home")}
        class="bg-gray-500 p-2 rounded-md hover:bg-gray-700 cursor-pointer"
        >Inicio</button
      >
      <button
        onclick={() => changePage("game")}
        class="bg-gray-500 p-2 rounded-md hover:bg-gray-700 cursor-pointer"
        >Juego</button
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
