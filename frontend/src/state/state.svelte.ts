export const globalState = $state({
    focusedCard: "",
    serverIP: "http://localhost:3000",
    username: "Sloth",
    page: "home",
    cards: [
        {
            value: "Skorpidus, el Azote del pantano",
            type: ["Insecto", "Normal", "Efecto"],
            element: "Tierra",
            description:
                'Cada que vez que esta carta, luego de atacar a otra, le deja una marca de "Infeccion Cronica". La carta afectada con "Infeccion Cronica" recibe 400 extra de daño que cuenta como daño de efecto. Cada vez que una Carta de tipo Insecto, luego de atacar a una carta afectada por "Infeccion Cronica", le suma una marca mas',
            atk: 1500,
            vid: 700,
        },
        { value: "Carta 2", type: ["Insecto", "Normal", "Efecto"], suit: "H" },
        { value: "Carta 3", type: ["Insecto", "Normal", "Efecto"], suit: "H" },
        { value: "Carta 4", type: ["Insecto", "Normal", "Efecto"], suit: "H" },
        { value: "Carta 5", type: ["Insecto", "Normal", "Efecto"], suit: "H" },
        { value: "Carta 6", type: ["Insecto", "Normal", "Efecto"], suit: "H" },
    ]
});

export const playerState = $state({
    username: "Sloth",
    cards: [...globalState.cards],
});

export const gameState = $state({
    player1: "",
    player2: "",
    turn: 1,
    rows: 6,
    cols: 7,
    data: [
        [
            { value: "Desterrados" },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "Clima" },
        ],
        [
            { value: "Mazo" },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "Campo" },
        ],
        [
            { value: "Cementerio" },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "Extra Deck" },
        ],
        [
            { value: "Extra Deck" },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "Cementerio" },
        ],
        [
            { value: "Campo" },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "Mazo" },
        ],
        [
            { value: "Clima" },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "", },
            { value: "Desterrados" },
        ],
    ]
});

type Card = {
    value: string;
    type: string[];
    element: string;
    description: string;
    atk: number;
    vid: number;
};