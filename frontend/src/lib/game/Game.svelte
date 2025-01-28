<script lang="ts">  
    import Board from "./Board.svelte";
    import Card from "./Card.svelte";
    import Deck from "./Deck.svelte";

    import { globalState, playerState, gameState } from "../../state/state.svelte";

    import { io } from "socket.io-client";
    import { onDestroy, onMount } from "svelte";

    let socket = io(globalState.serverIP);
    let firstPlayer = $state(true);

    onMount(() => {
        socket.emit("player-join", { username: playerState.username });
        socket.on("update-board", (data) => {
            gameState.data = data.data;
            gameState.player1 = data.player1;
            gameState.player2 = data.player2;
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
    <Board socket={socket} />
    <div
    class="basis-2/3 bg-gray-950 h-full flex flex-col justify-center items-center"
    >
        <div class="flex flex-row">
            <Card
                data={globalState.focusedCard}
                size="large"
                socket={socket}
            />
            <div class="bg-gray-950">
            </div>
        </div>
        <Deck cards={playerState.cards} socket={socket} />
    </div>
</main>