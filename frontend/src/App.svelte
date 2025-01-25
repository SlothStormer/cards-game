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
  <nav>
    <button onclick={() => changePage("home")}>Home</button>
    <button onclick={() => changePage("game")}>Game</button>
    <button onclick={() => changePage("admin")}>Admin</button>
  </nav>
  {#if globalState.page === "home"}
    <Home bind:page={globalState.page} />
  {:else if globalState.page === "game"}
    <Game />
  {:else if globalState.page === "admin"}
    <Admin />
  {/if}
</div>
