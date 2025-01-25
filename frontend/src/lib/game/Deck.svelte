<script lang="ts">
    import Card from "./Card.svelte";

    let { cards } = $props();
</script>

<div class="w-full">
    <div class="flex items-center justify-center mx-auto max-w-4xl relative">
        {#each cards as card, i}
            <Card data={card} hoverable={true} size="medium" />
        {/each}
    </div>
</div>
