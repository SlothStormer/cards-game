<script lang="ts">
    import Card from "./Card.svelte";

    let { cards, focusedCard= $bindable() } = $props();
</script>

<div class="absolute bottom-0 left-0 w-full">
    <div class="flex items-center justify-center mx-auto max-w-4xl relative">
        {#each cards as card, i}
            <Card
                data={card}
                hoverable={true}
                bind:bindableProp={focusedCard}
            />
        {/each}
    </div>
</div>
