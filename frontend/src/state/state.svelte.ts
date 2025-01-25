export const globalState = {
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
}