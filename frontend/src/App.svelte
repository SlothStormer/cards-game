<script lang="ts">
  import Game from "./lib/game/Game.svelte";
  import Home from "./lib/home/Home.svelte";
  import { globalState } from "./state/state.svelte";

  function changePage(page: string) {
    globalState.page = page;
  }
</script>

<div>
  <nav>
    <button onclick={() => changePage("home")}>Home</button>
    <button onclick={() => changePage("game")}>Game</button>
  </nav>
  {#if globalState.page === "home"}
    <Home />
  {:else if globalState.page === "game"}
    <Game />
  {/if}
</div>
