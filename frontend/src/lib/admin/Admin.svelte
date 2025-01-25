<script lang="ts">
    let password = $state("Contraseña");
</script>

<input type="password" name="password" bind:value={password} />
{#if password == "1234"}
    <h1>Bienvenido</h1>
{:else}
    <h1>Contraseña incorrecta</h1>
{/if}