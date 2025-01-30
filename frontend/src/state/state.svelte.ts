import { type CardType } from "../types/types";

export const globalState = $state({
    focusedCard: "",
    serverIP: "http://localhost:3000",
    username: "",
    page: "home",
    cards: [
        {
            card: {
                title: "Skorpidus, el Azote del pantano",
                type: "Insecto, Normal, Efecto",
                element: "Tierra",
                img: "https://cdn.discordapp.com/attachments/812955771046068225/1331797645420789780/image.png?ex=67958fb6&is=67943e36&hm=b4caf2b2af547e4ed2507ea33629ada8b43a8ffc6a0b9cae56600498558ab716&",
                description:
                    'Cada que vez que esta carta, luego de atacar a otra, le deja una marca de "Infeccion Cronica". La carta afectada con "Infeccion Cronica" recibe 400 extra de daño que cuenta como daño de efecto. Cada vez que una Carta de tipo Insecto, luego de atacar a una carta afectada por "Infeccion Cronica", le suma una marca mas',
                atk: 1500,
                vid: 700,
            },
            stack: []
        },
        { card: { title: "Carta 2", type: "Insecto, Normal, Efecto", }, stack: [], },
        { card: { title: "Carta 3", type: "Insecto, Normal, Efecto", }, stack: [], },
        { card: { title: "Carta 4", type: "Insecto, Normal, Efecto", }, stack: [], },
        { card: { title: "Carta 5", type: "Insecto, Normal, Efecto", }, stack: [], },
        { card: { title: "Carta 6", type: "Insecto, Normal, Efecto", }, stack: [], },
    ]
});

export const playerState = $state({
    username: "",
    subMenuFocus: 'calc',
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
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },

        ],
        [
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
        ],
        [
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
        ],
        [
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
        ],
        [
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
        ],
        [
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
            { card: {} as CardType | {}, stack: [] as CardType[] },
        ],
    ]
});