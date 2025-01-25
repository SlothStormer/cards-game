<script lang="ts">
    import { globalState } from "../../state/state.svelte";
    let ip: string = $state("");
    let username: string = $state("");
    let { page= $bindable() } = $props();
    function conectarServer() {
        console.log(ip);
        globalState.serverIP = ip;
        page = "game";
        globalState.page = "game";
        console.log(globalState);
    }
</script>

<div>
    <span>Bienvenido a juguito nashei ip para conectarse</span>
    <div>
        Username
        <input type="text" bind:value={username} placeholder="" class="bg-gray-500 p-2 rounded-md" />
    </div>
    <div>
        Ip
        <input type="text" bind:value={ip} placeholder="xx-xx-xx-xx" class="bg-gray-500 p-2 rounded-md" />
    </div>
    <button onclick={conectarServer}>Conectar</button>
</div>
