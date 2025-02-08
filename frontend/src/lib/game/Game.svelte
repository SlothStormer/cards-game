<script lang="ts">  
    import Board from "./Board.svelte";
    import Card from "./Card.svelte";
    import Deck from "./Deck.svelte";

    import { globalState, playerState, gameState } from "../../state/state.svelte";

    import { io } from "socket.io-client";
    import { onDestroy, onMount } from "svelte";
    import Item from "./Item.svelte";

    let socket = io(globalState.serverIP);

    onMount(() => {
        socket.emit("player-join", { username: playerState.username, deck: playerState.savedDeck, hand: playerState.hand });
        socket.on("update-board", (data) => {
            gameState.data = data.data;
            gameState.player1 = data.player1;
            gameState.player2 = data.player2;
            console.log("Tablero recibido:", data);

            if (data.player1.username === playerState.username) {
                playerState.savedDeck = data.player1.deck;
                playerState.hand = data.player1.hand;
            } else if (data.player2.username === playerState.username) {
                playerState.savedDeck = data.player2.deck;
                playerState.hand = data.player2.hand;
            }
        });
    });

    onDestroy(() => {
        socket.close();
    });

    function setSubMenuFocus(e: MouseEvent) {
    if (e.target instanceof HTMLButtonElement) {
        playerState.subMenuFocus = e.target.value;
    }
}
</script>

<main
    class="flex flex-row items-center justify-stretch h-full w-screen max-h-full max-w-screen"
>
    <Board socket={socket} />
    <div
    class="basis-2/3 bg-gray-950 h-full flex flex-col justify-between items-center"
    >
        <div class="flex flex-row h-full w-full items-center">
            <div class="basis-1/4 flex flex-col items-center">
                <Card
                    data={globalState.focusedCard}
                    size="large"
                    socket={socket}
                />
            </div>
            <div class="bg-gray-800 basis-3/4 h-full flex flex-col justify-center">
                <div>
                    <button value="calc" onclick={setSubMenuFocus}>Calculadora</button>
                    <button value="apil" onclick={setSubMenuFocus}>Apiladas</button>
                </div>
                {#if playerState.subMenuFocus === "calc"}
                    CALCULADORA
                {:else if playerState.subMenuFocus === "apil"}
                    APILADAS
                    if
                    
                    {#each globalState.focusedStack as card}
                        <Item item={card} />
                    {/each}
                {/if}
            </div>
        </div>
        <Deck cards={playerState.hand} socket={socket} />
    </div>
</main>