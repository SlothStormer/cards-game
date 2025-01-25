<script lang="ts">
    import { gameState } from "../../state/state.svelte";
    import Card from "./Card.svelte";

    console.log(gameState.cols);
    console.log(gameState.rows);
</script>

<div
    class="flex flex-col gap-1 items-center justify-center bg-purple-950 p-6 basis-1/3"
>
    {#each Array(gameState.rows) as _, i}
        <div class="flex flex-row gap-1">
            {#each Array(gameState.cols) as _, j}
                <Card data={gameState.data[i][j]?.value} />
            {/each}
        </div>
    {/each}
</div>
