<script lang="ts">
    let { data, hoverable = true, size } = $props();
    import { globalState } from "../../state/state.svelte";

    const hover = () => {
        globalState.focusedCard = data;
        console.log(data);
    };

    console.log(data.img);
</script>

{#if size === "small"}
    <div class="border h-32 rounded-lg" style="aspect-ratio: 2/3;">
        {#if data.value}
            <div
                class="bg-fuchsia-950 h-full rounded-lg select-none"
                onmouseenter={hover}
                draggable={data.img ? "true" : "false"}
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
        {:else}
            <div
                class="bg-black opacity-50 h-full rounded-lg"
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
            <div
                class="bg-fuchsia-950 h-full rounded-lg select-none"
            >
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
