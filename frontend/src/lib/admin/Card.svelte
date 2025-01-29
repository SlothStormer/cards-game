<script lang="ts">
    let { data, previewCard = $bindable() } = $props();

    function showCard() {
        previewCard = data;
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }
</script>

<div
    class=" border border-white/50 w-72 max-w-sm bg-purple-900 shadow-lg rounded-lg overflow-hidden"
    onclick={showCard}
    aria-hidden="true"
>
    <div class="relative h-48 m-2 rounded-md">
        <img src={data.img} alt="Card" class="w-full h-full object-cover rounded-md" />
        <span
            class=" absolute top-0 left-0 bg-purple-500 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold"
            >{data.element}</span
        >
        <span class="absolute bottom-0 left-0 bg-black/50 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">Tipos: {data.type}</span>
    </div>
    <div class="p-1 border border-white/50 rounded-md m-2">
        <h2 class="text-xl font-bold mb-1 pb-1 border-b">{data.title}</h2>
        <p class="text-gray-200 text-base/tight mb-2">
            {data.description}
        </p>
        <div class="flex justify-between items-center">
            <div
                class="bg-purple-500 text-white px-3 py-1 rounded-sm text-sm font-semibold"
            >
                ATK: {data.atk}
            </div>
            <div
                class="bg-purple-500 text-white px-3 py-1 rounded-sm text-sm font-semibold"
            >
                VIDA: {data.vid}
            </div>
        </div>
    </div>
</div>
