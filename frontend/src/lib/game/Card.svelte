<script lang="ts">
    let { bindableProp = $bindable(), data, hoverable } = $props();

    const hover = () => {
        if (!hoverable) return;
        bindableProp = data;
    };

    const getTypes = () => {
        let types = data.type.map((type: any) => type);
        return types.join(", ");
    };
</script>

{#if data}
    <div
        class="bg-neutral-700 border rounded-md text-white text-center transform hover:-translate-y-10 transition-all duration-200 max-w-80 {hoverable
            ? 'scale-75'
            : 'min-w-80'}"
        style="aspect-ratio: 9/16"
        id={hoverable ? "card" : ""}
        draggable={hoverable ? "true" : "false"}
        onmouseenter={hover}
        aria-hidden="true"
    >
        <div class="flex flex-col gap-2">
            <span class="">{data.value}</span>
            <div class="flex justify-between">
                <span class="">{getTypes()}</span>
                <span class="">{data.element}</span>
            </div>
            <img
                src="https://cdn.discordapp.com/attachments/812955771046068225/1331797645420789780/image.png?ex=6792ecb6&is=67919b36&hm=9dc079685abe51dfa8e9f658813df5f1a763a0972f33a0fee64c1e65be0004a4&"
                alt=""
            />
            {#if !hoverable}
                <span class="text-xs text-left">{data.description}</span>
            {/if}
            <div class="flex justify-between">
                <span>ATK {data.atk}</span>
                <span>VID {data.vid}</span>
            </div>
        </div>
    </div>
{/if}

<style>
    #card {
        --element-width: 20vw;
        width: var(--element-width);

        font-size: calc(var(--element-width) / 36);
    }
</style>
