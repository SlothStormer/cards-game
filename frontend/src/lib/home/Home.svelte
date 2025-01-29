<script lang="ts">
    import { globalState, playerState } from "../../state/state.svelte";
    let ip: string = $state("");
    let username: string = $state("");
    let { page= $bindable() } = $props();

    function conectarServer() {
        console.log(ip);
        globalState.serverIP = ip;
        playerState.username = username;
        page = "game";
    }
</script>

<div class="h-full flex flex-col justify-center items-center">
    <div class=" bg-purple-950 p-4 rounded-2xl shadow-lg">
        <h1 class="text-white text-3xl font-bold mb-4">Bienvenido al juego de cartas anashei</h1>
        <div class="flex flex-col w-full items-center">
            <div class="flex justify-between mb-2">
                <input type="text" bind:value={username} placeholder="Usuario" class="bg-purple-500 text-xl p-2 rounded-md" />
            </div>
            <div class="flex text-xl justify-between">
                <input type="text" bind:value={ip} placeholder="Direccion del Server" class="bg-purple-500 text-xl p-2 rounded-md" />
            </div>
            <div class="flex justify-center">
                <button onclick={conectarServer} class="bg-purple-700 text-white p-2 rounded-md mt-4 cursor-pointer hover:bg-purple-400 transition-all duration-100">Conectar</button>
            </div>
        </div>
    </div>
</div>
