<script lang="ts">
    let {
        data,
        size,
        posX = -1,
        posY = -1,
        socket = null,
        place = null,
    } = $props();
    import {
        gameState,
        globalState,
        playerState,
    } from "../../state/state.svelte";

    const hover = () => {
        globalState.focusedCard = data;
    };

    function allowDrop(e: DragEvent) {
        e.preventDefault();
        const { currentTarget } = e;
        if (!currentTarget) return;

        if (currentTarget instanceof HTMLElement) {
            currentTarget.classList.add("outline-2","outline-indigo-500", "bg-indigo-800");
        }
    }

    function dragLeave(e: DragEvent) {
        const { currentTarget } = e;
        if (!currentTarget) return;

        if (currentTarget instanceof HTMLElement) {
            currentTarget.classList.remove("outline-2","outline-indigo-500", "bg-indigo-800");
        }
    }

    function drag(e: DragEvent) {
        if (e.dataTransfer === null) return;
        e.dataTransfer.setData(
            "text/plain",
            JSON.stringify({ data, posX, posY }),
        );
    }

    function drop(e: DragEvent) {
        if (e.dataTransfer === null) return;
        let dragInfo = JSON.parse(e.dataTransfer?.getData("text/plain"));
        gameState.data[posY][posX] = dragInfo.data;

        if (dragInfo.posY != -1) {
            gameState.data[dragInfo.posY][dragInfo.posX] = { value: "" };
        } else {
            playerState.cards.splice(dragInfo.posX, 1);
        }

        if (!socket) return;
        socket.emit("update-board", gameState);
    }
</script>

{#if size === "small"}
    <div class="border h-32 rounded-lg" style="aspect-ratio: 2/3;">
        {#if data.value}
            <div
                class="bg-fuchsia-950 h-full rounded-lg select-none"
                onmouseenter={hover}
                draggable={"true"}
                ondragstart={drag}
                aria-hidden="true"
            >
                <div class="flex flex-col gap-2">
                    <span class="text-xs font-bold text-center overflow-hidden"
                        >{data.value}</span
                    >
                    <div class="flex justify-center items-center w-full">
                        <img
                            src={data.img}
                            alt=""
                            draggable="false"
                            class="w-16 rounded-sm"
                        />
                    </div>
                </div>
            </div>
        {:else if place}
            <div
                class="h-full rounded-lg bg-purple-900 select-none"
                ondrop={drop}
                ondragover={allowDrop}
                ondragleave={dragLeave}
                aria-hidden="true"
            >
                <div class="flex flex-col gap-2">
                    <span class="text-xs font-bold text-center overflow-hidden"
                        >{place ? place : data.value}</span
                    >
                    <div class="flex justify-center items-center w-full">
                        <img
                            src={data.img}
                            alt=""
                            draggable="false"
                            class="w-16 rounded-sm"
                        />
                    </div>
                </div>
            </div>
        {:else}
            <div
                class="h-full rounded-lg"
                ondrop={drop}
                ondragover={allowDrop}
                ondragleave={dragLeave}
                aria-hidden="true"
            ></div>
        {/if}
    </div>
{:else if size === "medium"}
    <div class="border h-56 rounded-lg" style="aspect-ratio: 2/3;">
        {#if data}
            <div
                class="bg-fuchsia-950 h-full rounded-lg select-none"
                onmouseenter={hover}
                draggable="true"
                ondragstart={drag}
                aria-hidden="true"
            >
                <div class="flex flex-col gap-2">
                    <span class="text-xs">{data.value}</span>
                    <div class="flex justify-between">
                        <span class="text-xs">{data.type}</span>
                        <span class="text-xs">{data.element}</span>
                    </div>
                    <div class="flex justify-center items-center w-full">
                        <img
                            src={data.img}
                            alt=""
                            draggable="false"
                            class="w-32 rounded-sm"
                        />
                    </div>
                    <div class="flex justify-between">
                        <span>ATK {data.atk}</span>
                        <span>VID {data.vid}</span>
                    </div>
                </div>
            </div>
        {/if}
    </div>
{:else if size === "large"}
    <div class="border h-96 rounded-lg" style="aspect-ratio: 2/3;">
        {#if data}
            <div class="bg-fuchsia-950 h-full rounded-lg select-none">
                <div class="flex flex-col gap-2">
                    <span class="">{data.value}</span>
                    <div class="flex justify-between">
                        <span class="">{data.type}</span>
                        <span class="">{data.element}</span>
                    </div>
                    <img src={data.img} alt="" draggable="false" />
                    <span class="text-xs text-left">{data.description}</span>
                    <div class="flex justify-between">
                        {#if data.atk}
                            <span>ATK {data.atk}</span>
                        {/if}
                        {#if data.vid}
                            <span>VID {data.vid}</span>
                        {/if}
                    </div>
                </div>
            </div>
        {/if}
    </div>
{/if}
