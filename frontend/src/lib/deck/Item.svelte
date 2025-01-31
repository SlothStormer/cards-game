<script lang="ts">
    import { playerState } from "../../state/state.svelte";

    let { item, count } = $props();

    console.log("Cuenta", count)

    function deleteItem() {
        if (item.element === "Nucleo") {
            alert("No se puede eliminar una carta de nucleo");
            return;
        }
        console.log("eliminando uno de:", item._id);

        // Encontramos el índice del primer item con el mismo _id
        const index = playerState.savedDeck.findIndex(savedDeckItem => savedDeckItem.card._id === item._id);

        // Si encontramos el item en el array, lo eliminamos
        if (index !== -1) {
            playerState.savedDeck.splice(index, 1);  // Elimina solo el primer item encontrado
        }

        console.log(playerState.savedDeck);
    }

</script>

<div
    class="flex flex-row justify ml-1 select-none"
    onclick={deleteItem}
    aria-hidden="true"
>
    <div class="bg-purple-900 p-2 rounded-lg mb-1 mr-1 w-full">
        {item.title}
    </div>
    {#if count > 1}
        <div
            class="bg-purple-900 p-2 rounded-lg mb-1 mr-1 w-12 flex justify-center"
        >
            x{count}
        </div>
    {/if}
</div>
