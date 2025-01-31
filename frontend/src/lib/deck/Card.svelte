<script lang="ts">
    import { playerState } from "../../state/state.svelte";

    let { data } = $props();

    function addCard() {
        console.log(data._id)
        const stackCount = playerState.savedDeck.filter((card) => card.card._id === data._id).length;
        const inventoryCount = playerState.savedDeck.filter((card) => card.card.type === "Inventario").length;
        const coreCount = 15;

        const monsterCount = playerState.savedDeck.length - inventoryCount - coreCount;

        // find if card is a Monster card
        if (data.type != "Inventario" && data.type != "Núcleo Simple" && data.type != "Núcleo Doble" && data.type != "Núcleo Triple") {
            console.log("monster");
            if (playerState.hand.length > 6) {
                alert("No puedes tener más de 7 monstruos en el mazo");
                return;
            }

            if (playerState.hand.filter((card) => card.card._id === data._id).length > 0) {
                alert("No puedes repetir un mounstro");
                return;
            }

            playerState.hand.push({ card: data, stack: [] });
            return;
        }
        
        if (playerState.savedDeck.length >= 35) {
            alert("No puedes tener más de 35 cartas en el mazo");
            return;
        }
    
        if (stackCount > 2 ) {
            alert("No puedes repetir más de 3 veces una carta");
            return;
        }  

        if (monsterCount > 6) {
            alert("No puedes tener más de 7 monstruos en el mazo");
            return;
        }

        playerState.savedDeck.push({ card: data, stack: [] });
    }
</script>

<div
    class=" border border-white/50 w-72 max-w-sm bg-purple-900 shadow-lg rounded-lg overflow-hidden select-none"
    aria-hidden="true"
    onclick={addCard}
>
    <div class="relative h-48 m-2 rounded-md">
        <img src={data.img ? data.img : "placeholder-square.jpg"} alt="Card" class="w-full h-full object-cover rounded-md" />
        {#if data.element}
        <span
            class=" absolute top-0 left-0 bg-purple-500 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold"
            >{data.element}</span
        >
        {/if}
        {#if data.number}
        <span
            class=" absolute top-0 right-0 bg-white/60 text-black px-2 py-1 m-2 rounded-md text-sm font-semibold"
            >Nº{data.number}</span
        >
        {/if}
        {#if data.type}
        <span class="absolute bottom-0 left-0 bg-black/50 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">Tipos: {data.type}</span>
        {/if}
    </div>
    <div class="p-1 border border-white/50 rounded-md m-2">
        <h2 class="text-xl font-bold mb-1 pb-1 border-b">{data.title}</h2>
        {#if data.description}
        <p class="text-gray-200 text-base/tight mb-2">
            {data.description}
        </p>
        {/if}
        <div class="flex justify-between items-center">
            {#if data.atk}
            <div
                class="bg-purple-500 text-white px-3 py-1 rounded-sm text-sm font-semibold"
            >
                ATK: {data.atk}
            </div>
            {/if}

            {#if data.vid}
            <div
                class="bg-purple-500 text-white px-3 py-1 rounded-sm text-sm font-semibold"
            >
                VIDA: {data.vid}
            </div>
            {/if}
        </div>
    </div>
</div>
