<script lang="ts">  
    import Board from "./Board.svelte";
    import Card from "./Card.svelte";
    import Deck from "./Deck.svelte";

    import { globalState } from "../../state/state.svelte";

    let focusedCard = $state(globalState.cards[0]);
</script>

<main
    class="flex flex-row items-center justify-stretch h-screen w-screen max-h-full max-w-screen"
>
    <aside
        class="basis-1/4 bg-gray-950 h-full flex justify-center items-center"
    >
        <Card
            bind:bindableProp={focusedCard}
            data={focusedCard}
            hoverable={false}
        />
    </aside>
    <Board />
    <aside class="basis-1/4 bg-gray-950 h-full">Hola</aside>
</main>

<!-- Mano -->
{#key globalState}
    <Deck cards={globalState.cards} bind:focusedCard />
{/key}
