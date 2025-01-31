<script lang="ts">
    import { onMount } from "svelte";
    import { type CardType } from "../../types/types";
    import Card from "./Card.svelte";
    import { playerState } from "../../state/state.svelte";
    import Item from "./Item.svelte";

    let cards = $state<CardType[]>([]);

    onMount(async () => {
        const response = await fetch("http://181.26.215.143/api");
        cards = await response.json();
        cards.sort((a, b) => a.number - b.number);
        cards = cards.slice(3);
    });

    function getsavedDeckCount(savedDeck: any) {
        let countMap = new Map();
        savedDeck.forEach(({ card }: any) => {
            countMap.set(card._id, (countMap.get(card._id) || 0) + 1);
        });
        return Array.from(countMap.entries()).map(([id, count]) => ({
            id,
            card: savedDeck.find((c: any) => c.card._id === id).card,
            count,
        }));
    }

    function savesavedDeck() {
        localStorage.setItem("savedDeck", JSON.stringify(playerState.savedDeck));
    }

    function cleansavedDeck() {
        playerState.savedDeck = [
            {
                card: {
                    _id: "679bbc33abe52e80b9aeb518",
                    number: 0,
                    title: "Nucleo Simple",
                    type: "",
                    element: "Nucleo",
                    img: "/Nucleo simple.webp",
                    description: "",
                    atk: 0,
                    vid: 0,
                    __v: 0,
                },
                stack: [],
            },
            {
                card: {
                    _id: "679bbc33abe52e80b9aeb518",
                    number: 0,
                    title: "Nucleo Simple",
                    type: "",
                    element: "Nucleo",
                    img: "/Nucleo simple.webp",
                    description: "",
                    atk: 0,
                    vid: 0,
                    __v: 0,
                },
                stack: [],
            },
            {
                card: {
                    _id: "679bbc33abe52e80b9aeb518",
                    number: 0,
                    title: "Nucleo Simple",
                    type: "",
                    element: "Nucleo",
                    img: "/Nucleo simple.webp",
                    description: "",
                    atk: 0,
                    vid: 0,
                    __v: 0,
                },
                stack: [],
            },
            {
                card: {
                    _id: "679bbc33abe52e80b9aeb518",
                    number: 0,
                    title: "Nucleo Simple",
                    type: "",
                    element: "Nucleo",
                    img: "/Nucleo simple.webp",
                    description: "",
                    atk: 0,
                    vid: 0,
                    __v: 0,
                },
                stack: [],
            },
            {
                card: {
                    _id: "679bbc33abe52e80b9aeb518",
                    number: 0,
                    title: "Nucleo Simple",
                    type: "",
                    element: "Nucleo",
                    img: "/Nucleo simple.webp",
                    description: "",
                    atk: 0,
                    vid: 0,
                    __v: 0,
                },
                stack: [],
            },
            {
                card: {
                    _id: "679bbc74abe52e80b9aeb524",
                    number: 0,
                    title: "Nucleo Doble",
                    type: "",
                    element: "Nucleo",
                    img: "/Nucleo doble.webp",
                    description: "",
                    atk: 0,
                    vid: 0,
                    __v: 0,
                },
                stack: [],
            },
            {
                card: {
                    _id: "679bbc74abe52e80b9aeb524",
                    number: 0,
                    title: "Nucleo Doble",
                    type: "",
                    element: "Nucleo",
                    img: "/Nucleo doble.webp",
                    description: "",
                    atk: 0,
                    vid: 0,
                    __v: 0,
                },
                stack: [],
            },
            {
                card: {
                    _id: "679bbc74abe52e80b9aeb524",
                    number: 0,
                    title: "Nucleo Doble",
                    type: "",
                    element: "Nucleo",
                    img: "/Nucleo doble.webp",
                    description: "",
                    atk: 0,
                    vid: 0,
                    __v: 0,
                },
                stack: [],
            },
            {
                card: {
                    _id: "679bbc74abe52e80b9aeb524",
                    number: 0,
                    title: "Nucleo Doble",
                    type: "",
                    element: "Nucleo",
                    img: "/Nucleo doble.webp",
                    description: "",
                    atk: 0,
                    vid: 0,
                    __v: 0,
                },
                stack: [],
            },
            {
                card: {
                    _id: "679bbc74abe52e80b9aeb524",
                    number: 0,
                    title: "Nucleo Doble",
                    type: "",
                    element: "Nucleo",
                    img: "/Nucleo doble.webp",
                    description: "",
                    atk: 0,
                    vid: 0,
                    __v: 0,
                },
                stack: [],
            },
            {
                card: {
                    _id: "679bbc89abe52e80b9aeb528",
                    number: 0,
                    title: "Nucleo Triple",
                    type: "",
                    element: "Nucleo",
                    img: "/Nucleo triple.webp",
                    description: "",
                    atk: 0,
                    vid: 0,
                    __v: 0,
                },
                stack: [],
            },
            {
                card: {
                    _id: "679bbc89abe52e80b9aeb528",
                    number: 0,
                    title: "Nucleo Triple",
                    type: "",
                    element: "Nucleo",
                    img: "/Nucleo triple.webp",
                    description: "",
                    atk: 0,
                    vid: 0,
                    __v: 0,
                },
                stack: [],
            },
            {
                card: {
                    _id: "679bbc89abe52e80b9aeb528",
                    number: 0,
                    title: "Nucleo Triple",
                    type: "",
                    element: "Nucleo",
                    img: "/Nucleo triple.webp",
                    description: "",
                    atk: 0,
                    vid: 0,
                    __v: 0,
                },
                stack: [],
            },
            {
                card: {
                    _id: "679bbc89abe52e80b9aeb528",
                    number: 0,
                    title: "Nucleo Triple",
                    type: "",
                    element: "Nucleo",
                    img: "/Nucleo triple.webp",
                    description: "",
                    atk: 0,
                    vid: 0,
                    __v: 0,
                },
                stack: [],
            },
            {
                card: {
                    _id: "679bbc89abe52e80b9aeb528",
                    number: 0,
                    title: "Nucleo Triple",
                    type: "",
                    element: "Nucleo",
                    img: "/Nucleo triple.webp",
                    description: "",
                    atk: 0,
                    vid: 0,
                    __v: 0,
                },
                stack: [],
            },
        ];
    }

    function importsavedDeck() {
        const file = (document.getElementById("savedDeck-file") as HTMLInputElement)
            .files?.[0];
        if (!file) {
            alert("Por favor, selecciona un archivo para importar.");
            return;
        }

        const reader = new FileReader();
        reader.readAsText(file);

        reader.onload = () => {
            try {
                const savedDeck = JSON.parse(reader.result as string);

                // Verifica si el JSON tiene la estructura que esperas
                if (
                    Array.isArray(savedDeck) &&
                    savedDeck.every((item) => item.card && item.card._id)
                ) {
                    playerState.savedDeck = savedDeck;
                    alert("Mazo importado exitosamente.");
                } else {
                    alert("El archivo no tiene un formato de mazo válido.");
                }
            } catch (error) {
                alert(
                    "Hubo un error al leer el archivo. Asegúrate de que sea un archivo JSON válido.",
                );
            }
        };

        reader.onerror = () => {
            alert("Hubo un error al leer el archivo.");
        };
    }

    function exportsavedDeck() {
        const savedDeck = JSON.stringify(playerState.savedDeck);
        const blob = new Blob([savedDeck], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "savedDeck.json";
        a.click();
        URL.revokeObjectURL(url);
    }
</script>

<div class="bg-neutral-900 flex flex-row justify-evenly">
    <div class="bg-neutral-900">
        <p>Creación de Mazo</p>
        <p>
            x5 cartas de Núcleo simple, x5 cartas de Núcleo doble, x5 cartas de
            Núcleo triple
        </p>
        <p>
            15 a 25 Cartas de inventario, se pueden repetir como máximo 3 veces
            una carta
        </p>

        {playerState.savedDeck.length} / 35
        <div>
            {#each getsavedDeckCount(playerState.savedDeck) as { card, count }}
                <Item item={card} {count} />
            {/each}
        </div>
        <div class="flex flex-col gap-2 mt-1 items-center mx-1">
            <div>
                <button
                    class="bg-purple-500 rounded-md px-2 py-1"
                    onclick={savesavedDeck}>Guardar Mazo</button
                >
                <button
                    class="bg-purple-500 rounded-md px-2 py-1"
                    onclick={cleansavedDeck}>Limpiar Mazo</button
                >
            </div>
            <button
                class="bg-purple-500 rounded-md px-2 py-1"
                onclick={exportsavedDeck}>Exportar Mazo</button
            >
            <div class="flex flex-row justify-center items-center">
                <input
                    type="file"
                    class="bg-neutral-500 rounded-md flex justify-between p-3 h-12"
                    id="savedDeck-file"
                    accept=".json"
                />
                <button
                    class="bg-purple-600 ml-1 rounded-md h-12 px-2"
                    onclick={importsavedDeck}>Importar Mazo</button
                >
            </div>
        </div>
    </div>

    <div class="grid grid-cols-3 gap-2">
        {#each cards as card}
            <div
                class="group flex justify-start items-start"
                aria-hidden="true"
            >
                <Card data={card} />
            </div>
        {/each}
    </div>
</div>
