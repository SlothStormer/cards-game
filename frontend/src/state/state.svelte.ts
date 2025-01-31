import { type CardType } from "../types/types";

export const globalState = $state({
    focusedCard: "",
    serverIP: "http://localhost:3000",
    username: "",
    page: "home",
});

export const playerState = $state({
    username: "",
    subMenuFocus: 'calc',
    deckCount: new Map(),
    savedDeck: [{
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
            __v: 0
        }, stack: [],
    }, {
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
            __v: 0
        }, stack: [],
    }, {
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
            __v: 0
        }, stack: [],
    }, {
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
            __v: 0
        }, stack: [],
    }, {
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
            __v: 0
        }, stack: [],
    }, {
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
            __v: 0
        }, stack: [],
    }, {
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
            __v: 0
        }, stack: [],
    }, {
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
            __v: 0
        }, stack: [],
    }, {
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
            __v: 0
        }, stack: [],
    }, {
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
            __v: 0
        }, stack: [],
    },{
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
            __v: 0
        }, stack: [],
    },{
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
            __v: 0
        }, stack: [],
    },{
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
            __v: 0
        }, stack: [],
    },{
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
            __v: 0
        }, stack: [],
    },{
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
            __v: 0
        }, stack: [],
    }],
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