<script lang="ts">
    import { globalState } from "../../state/state.svelte";
    let { item } = $props();

    function showCard() {
        globalState.focusedCard = { card: item.card, stack: []};
    }

    function drag(e: DragEvent) {
        if (e.dataTransfer === null) return;
        
        console.log("POS DE CARTA PADRE", item.posX, item.posY);

        e.dataTransfer.setData(
            "text/plain",
            JSON.stringify({card: item, stack: [], posX: item.posX, posY: item.posY}),
        );
    }
</script>



<div
    class="flex flex-row justify ml-1 select-none"
    aria-hidden="true"
    draggable="true"
    onmouseenter={showCard}
    ondragstart={drag}
>
    <div class="bg-purple-900 p-2 rounded-lg mb-1 mr-1 w-full">
        {item.title}
    </div>
</div>
