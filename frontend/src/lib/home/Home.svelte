<script lang="ts">
    import { globalState } from "../../state/state.svelte";
    let ip: string = $state("");
    let username: string = $state("");
    let { page= $bindable() } = $props();

    function conectarServer() {
        console.log(ip);
        globalState.serverIP = ip;
        page = "game";
    }
</script>

<div>
    <span>Bienvenido a juguito nashei</span>
    <br>
    <span>ip para conectarse</span>
    <div class="w-80 border p-2">
        <div class="flex justify-between mb-2">
            <span>Username</span>
            <input type="text" bind:value={username} placeholder="" class="bg-gray-500 p-2 rounded-md" />
        </div>
        <div class="flex justify-between">
            <span>Ip</span>
            <input type="text" bind:value={ip} placeholder="xx-xx-xx-xx" class="bg-gray-500 p-2 rounded-md" />
        </div>
    </div>
    <button onclick={conectarServer}>Conectar</button>
</div>
