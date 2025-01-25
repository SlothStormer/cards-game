export type Card = {
    value: string;
    type: string[];
    element: string;
    description: string;
    atk: number;
    vid: number;
}

export type Cards = Card[];

export type Deck = Card[];

export type Graveyard = Card[];

export type Space = {
    card: Card;
    row: number;
    col: number;
    isEmpty: boolean;
    vid: number;
    atk: number;
};

export type Player = {
    username: string;
    hand: Card[], // Cartas en mano
    exiled: Card[], // Cartas desterradas
    deck: Card[], // Mazo
    graveyard: Card[], // Cementerio
    field: Card[], // Cartas en el campo
    extraDeck: Card[], // Extra deck
    climate: Card[], // Clima
}

export type GameState = {
    player1: Player,
    player2: Player,
    turn: number, // 1 o 2
}

export type Session = {
    id: string,
    socket: string,
    gameState: GameState,
}