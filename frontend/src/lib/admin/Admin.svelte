<script lang="ts">
    import Card from "./Card.svelte";
    let password = $state("1234");

    let title = $state('Titulo');
    let type = $state("Tipo/s");
    let element = $state("Elemento");
    let img = $state("https://cdn.discordapp.com/attachments/812955771046068225/1331797645420789780/image.png?ex=67958fb6&is=67943e36&hm=b4caf2b2af547e4ed2507ea33629ada8b43a8ffc6a0b9cae56600498558ab716&");
    let description = $state("Descripcion");
    let atk = $state(0);
    let vid = $state(0);

    $inspect(title);
</script>

<input type="password" name="password" bind:value={password} />
{#if password == "1234"}
    <h1>Bienvenido</h1>
    <div class="bg-neutral-500 p-2 rounded-md m-4 flex flex-row justify-between w-fit mx-auto gap-4">        
        <form action="/add-card" method="post" class="flex flex-col gap-2 " onsubmit={e => e.preventDefault()}>
            <h1 class="font-bold text-xl">Agregar carta a la base de datos</h1>            
            <input type="text"   class="bg-neutral-600 p-2 rounded-lg" name="value" placeholder="Titulo" bind:value={title} />
            <input type="text"   class="bg-neutral-600 p-2 rounded-lg" name="type" placeholder="Tipo/s" bind:value={type} />
            <input type="text"   class="bg-neutral-600 p-2 rounded-lg" name="element" placeholder="Elemento" bind:value={element} />
            <input type="text"   class="bg-neutral-600 p-2 rounded-lg" name="img" placeholder="Imagen URL" bind:value={img} />
            <textarea name="description" placeholder="Descripción" class="bg-neutral-600 p-2 rounded-lg" bind:value={description}></textarea>
            <input type="number" class="bg-neutral-600 p-2 rounded-lg" name="atk" placeholder="Ataque" bind:value={atk} />
            <input type="number" class="bg-neutral-600 p-2 rounded-lg" name="vid" placeholder="Vida" bind:value={vid} />
            <button type="submit">Agregar</button>
        </form>
        <div>
            <h1>Preview</h1>
            <Card data={{title, type, element, img, description, atk, vid}} />
        </div>
    </div>

{:else}
    <h1>Contraseña incorrecta</h1>
{/if}