<script lang="ts">
    let { socket = null } = $props();
    import { gameState } from "../../state/state.svelte";
    import Card from "./Card.svelte";

    let defaults = [
        "Desterrados",
        "Mazo",
        "Cementerio",
        "Extra Deck",
        "Campo",
        "Clima",
    ];

    let { rows, cols } = gameState;
</script>

<div
    class="flex flex-col gap-1 items-center justify-center bg-purple-950 p-6 basis-1/3 h-full"
>
    {#each Array(rows) as _, i}
        <div class="flex flex-row gap-1">
            {#each Array(cols) as _, j}
                {#if j == 0 || j == cols - 1}
                    <Card
                        data={gameState.data[i][j]}
                        place={defaults[j == 0 ? i : cols - 2 - i]}
                        size="small"
                        posX={j}
                        posY={i}
                        {socket}
                    />
                {:else}
                    <Card
                        data={gameState.data[i][j]}
                        size="small"
                        posX={j}
                        posY={i}
                        {socket}
                    />
                {/if}
            {/each}
        </div>
        {#if i == 2}
            <div class="flex flex-col w-full justify-around items-center">
                <div class="flex flex-row w-full justify-end">
                    <span>{gameState.player2}</span>
                </div>
                <div class="bg-white opacity-50 w-full h-0.5 "></div>
                <div class="flex flex-row w-full justify-start">
                    <span>{gameState.player1}</span>
                </div>
            </div>
        {/if}
    {/each}
</div>
