<script lang="ts">
    import Card from "./Card.svelte";
    import { gameState, playerState } from "../../state/state.svelte";

    let { cards, socket = null } = $props();

    function allowDrop (e: DragEvent) {
        e.preventDefault();
    }

    function drop(e: DragEvent) {
        if (e.dataTransfer === null) return;
        let dragInfo = JSON.parse(e.dataTransfer?.getData("text/plain"));
        gameState.data[dragInfo.posY][dragInfo.posX] = { card: {}, stack: [] };

        playerState.cards.push(dragInfo.data);
        if (!socket) return;
        socket.emit("update-board", gameState);
    }
</script>

<div class="w-full bg-amber-200 h-80" ondrop={drop} ondragover={allowDrop} aria-hidden="true">
    <div class="flex items-center justify-center mx-auto max-w-4xl relative h-full overflow-x-scroll">
        {#each cards as card, i}
            <Card data={card} size="medium" posX={i} />
        {/each}
    </div>
</div>
