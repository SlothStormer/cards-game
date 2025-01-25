<script lang="ts">  
    import Board from "./Board.svelte";
    import Card from "./Card.svelte";
    import Deck from "./Deck.svelte";

    import { globalState } from "../../state/state.svelte";

    import { io } from "socket.io-client";
    import { onDestroy, onMount } from "svelte";

    let socket = io(globalState.serverIP);

    onMount(() => {
        socket.emit("player-join", { username: "Sloth" });
        socket.on("update-board", (data) => {
            console.log("Tablero recibido:", data);
        });
    });

    onDestroy(() => {
        socket.close();
    });
</script>

<main
    class="flex flex-row items-center justify-stretch h-full w-screen max-h-full max-w-screen"
>
    <Board />
    <div
    class="basis-2/3 bg-gray-950 h-full flex flex-col justify-center items-center"
    >
        <div class="flex flex-row">
            <Card
                data={globalState.focusedCard}
                hoverable={false}
                size="large"
            />
            <div class="bg-gray-950">Hola</div>
        </div>
        <Deck cards={globalState.cards} />
    </div>
</main>