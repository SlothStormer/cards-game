export function draggable(node: any, data: any) {
    let state = data;

    node.draggable = true;
    node.style.cursor = "grab";

    function handle_dragstart(event: any) {
        event.dataTransfer.setData("text/plain", state);
    }

    node.addEventListener("dragstart", handle_dragstart);

    return {
        update() {
            state = data;
        },
        destroy() {
            node.removeEventListener("dragstart", handle_dragstart);
        },
    }
}

export function dropzone(node: any, options: any) {
    let state = {
        dropEffect: "move",
        dragover_class: 'droppable',
        ...options
    }

    function handle_dragenter(e: any) {
        e.target.classList.add(state.dragover_class);
    }

    function handle_dragleave(e: any) {
        e.target.classList.remove(state.dragover_class);
    }

    function handle_dragvoer(e: any) {
        e.preventDefault();
        e.dataTransfer.dropEffect = state.dropEffect;
    }

    function handle_drop(e: any) {
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain");
        console.log(data);
        e.target.classList.remove(state.dragover_class);        
    }    

    node.addEventListener("dragenter", handle_dragenter);
    node.addEventListener("dragleave", handle_dragleave);
    node.addEventListener("dragover", handle_dragvoer);
    node.addEventListener("drop", handle_drop);
}
