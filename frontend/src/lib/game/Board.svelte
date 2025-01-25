<script lang="ts">
    import { globalState } from "../../state/state.svelte";

    let sides = 2;
    let rows = 2;
    let cols = 5;

    function drawCard() {
        console.log("draw card");
        globalState.cards.push({
            value: "Carta " + globalState.cards.length,
            type: ["Insecto", "Normal", "Efecto"],
            suit: "H",
        });
        console.log(globalState.cards);
    }
</script>

<div
    class="flex flex-col gap-4 items-center justify-center border-2 border-neutral-500 bg-purple-950 rounded-md p-6 basis-3/4"
>
    {#each Array(sides) as _, i}
        <div class="flex flex-row gap-6 items-center justify-center">
            {#if i === 0}
                <div class="flex flex-col gap-2">
                    <div
                        class="h-36 w-24 bg-neutral-700 border rounded-md text-white text-center"
                        onclick={drawCard}
                        aria-hidden="true"
                    >
                        Mazo
                    </div>
                    <div
                        class="h-36 w-24 bg-neutral-700 border rounded-md text-white text-center"
                    >
                        Cementerio
                    </div>
                </div>
            {:else}
                <div class="flex flex-col gap-2">
                    <div
                        class="h-36 w-24 bg-neutral-700 border rounded-md text-white text-center"
                    >
                        Clima
                    </div>
                    <div
                        class="h-36 w-24 bg-neutral-700 border rounded-md text-white text-center"
                    >
                        Campo
                    </div>
                </div>
            {/if}
            <div class="flex flex-col gap-2">
                {#each Array(rows) as _, i}
                    <div class="flex flex-row gap-2">
                        {#each Array(cols) as _, j}
                            <div
                                class="h-36 w-24 bg-neutral-800 border rounded-md text-white text-center"
                            ></div>
                        {/each}
                    </div>
                {/each}
            </div>
            {#if i === 1}
                <div class="flex flex-col gap-2">
                    <div
                        class="h-36 w-24 bg-neutral-700 border rounded-md text-white text-center"
                        onclick={drawCard}
                        aria-hidden="true"
                    >
                        Mazo
                    </div>
                    <div
                        class="h-36 w-24 bg-neutral-700 border rounded-md text-white text-center"
                    >
                        Cementerio
                    </div>
                </div>
            {:else}
                <div class="flex flex-col gap-2">
                    <div
                        class="h-36 w-24 bg-neutral-700 border rounded-md text-white text-center"
                    >
                        Clima
                    </div>
                    <div
                        class="h-36 w-24 bg-neutral-700 border rounded-md text-white text-center"
                    >
                        Campo
                    </div>
                </div>
            {/if}
        </div>
    {/each}
</div>
