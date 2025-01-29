<script lang="ts">
    import { type CardType } from "../../types/types";
    import Card from "./Card.svelte";
    let password = $state("1234");

    let cards = $state<CardType[]>([]);
    let search = $state("");

    let previewCard = $state<CardType>({
        title: "",
        description: "",
        img: "",
        type: "",
        element: "",
        atk: 0,
        vid: 0,
        _id: "",
    });

    async function getCards() {
        const response = await fetch("http://localhost:3000/");
        cards = await response.json();
    }

    async function addCard() {
        const response = await fetch("http://localhost:3000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: previewCard.title,
                type: previewCard.type,
                element: previewCard.element,
                img: previewCard.img,
                description: previewCard.description,
                atk: previewCard.atk,
                vid: previewCard.vid,
            }),
        });

        console.log(await response.json());
        clearPreview();
        getCards();
    }

    async function updateCard() {
        const response = await fetch(
            `http://localhost:3000/${previewCard._id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: previewCard.title,
                    type: previewCard.type,
                    element: previewCard.element,
                    img: previewCard.img,
                    description: previewCard.description,
                    atk: previewCard.atk,
                    vid: previewCard.vid,
                }),
            },
        );

        console.log(await response.json());
        clearPreview();
        getCards();
    }

    async function deleteCard() {
        const response = await fetch(
            `http://localhost:3000/${previewCard._id}`,
            {
                method: "DELETE",
            },
        );

        console.log(await response.json());
        clearPreview();
        getCards();
    }

    function clearPreview() {
        previewCard = {
            title: "",
            description: "",
            img: "",
            type: "",
            element: "",
            atk: 0,
            vid: 0,
            _id: "",
        };

        window.location.reload();
    }

    getCards();
</script>

<div class="flex flex-col">
    <input type="password" name="password" bind:value={password} />
{#if password == "1234"}
    <h1>Bienvenido</h1>
    <div
        class="bg-neutral-700/95 p-2 rounded-2xl m-4 flex flex-row justify-between w-fit mx-auto gap-2 h-full"
    >
        <form
            action="/add-card"
            method="post"
            class="flex flex-col gap-2 h-fit"
        >
            <h1 class="font-bold text-xl">Agregar carta a la base de datos</h1>
            <input
                type="text"
                class="bg-neutral-600 p-2 rounded-lg"
                name="value"
                placeholder="Titulo"
                bind:value={previewCard.title}
            />
            <input
                type="text"
                class="bg-neutral-600 p-2 rounded-lg"
                name="type"
                placeholder="Tipo/s"
                bind:value={previewCard.type}
            />
            <input
                type="text"
                class="bg-neutral-600 p-2 rounded-lg"
                name="element"
                placeholder="Elemento"
                bind:value={previewCard.element}
            />
            <input
                type="text"
                class="bg-neutral-600 p-2 rounded-lg"
                name="img"
                placeholder="Imagen URL"
                bind:value={previewCard.img}
            />
            <textarea
                name="description"
                placeholder="Descripción"
                class="bg-neutral-600 p-2 rounded-lg"
                bind:value={previewCard.description}
            ></textarea>
            <input
                type="number"
                class="bg-neutral-600 p-2 rounded-lg"
                name="atk"
                placeholder="Ataque"
                bind:value={previewCard.atk}
            />
            <input
                type="number"
                class="bg-neutral-600 p-2 rounded-lg"
                name="vid"
                placeholder="Vida"
                bind:value={previewCard.vid}
            />
            <div class="flex justify-between">
                {#if !previewCard._id}
                    <div
                        class="bg-green-800 cursor-pointer text-white px-3 py-1 rounded-sm text-sm font-semibold"
                        onclick={addCard}
                        aria-hidden="true"
                    >
                        Agregar
                    </div>
                    <div
                        class="bg-neutral-400 cursor-pointer text-white px-3 py-1 rounded-sm text-sm font-semibold"
                        onclick={clearPreview}
                        aria-hidden="true"
                    >
                        Limpiar
                    </div>
                {:else}
                    <div
                        class="bg-green-800 cursor-pointer text-white px-3 py-1 rounded-sm text-sm font-semibold"
                        onclick={updateCard}
                        aria-hidden="true"
                    >
                        Actualizar
                    </div>
                    <div
                        class="bg-neutral-400 cursor-pointer text-white px-3 py-1 rounded-sm text-sm font-semibold"
                        onclick={clearPreview}
                        aria-hidden="true"
                    >
                        Limpiar
                    </div>
                    <div
                        class="bg-red-800 cursor-pointer text-white px-3 py-1 rounded-sm text-sm font-semibold"
                        onclick={deleteCard}
                        aria-hidden="true"
                    >
                        Eliminar
                    </div>
                {/if}
            </div>
        </form>
        <div class="h-auto w-0.5 bg-white/50"></div>
        <div>
            <h1 class="mb-2 font-bold text-xl">Preview</h1>
            <Card data={previewCard} />
        </div>
    </div>

    <div class="bg-purple-950 mx-auto p-2 rounded-2xl h-screen flex flex-col">
        <div class="flex justify-center m-2 w-full">
            <div class="flex flex-row gap-2 w-full">
                <input
                    placeholder="🔍Buscar cartas por título"
                    type="text"
                    class="bg-purple-800 p-2 rounded-lg"
                    bind:value={search}
                />
            </div>
        </div>
        <div class="overflow-y-scroll">
            <div class="grid grid-cols-3 w-full space-y-2">
                {#each cards as card}
                    {#if card.title
                        .toLowerCase()
                        .includes(search.toLowerCase())}
                        <div class="">
                            <Card data={card} bind:previewCard />
                        </div>
                    {/if}
                {/each}
            </div>
        </div>
    </div>
{:else}
    <h1>Contraseña incorrecta</h1>
{/if}
</div>

