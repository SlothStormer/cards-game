export interface CardType {
    number: number;
    title: string;
    description: string;
    img: string;
    type: string;
    element: string;
    atk: number;
    vid: number;
    _id: string;
    __v: number;
}

export interface PlayerState {
    username: string;
    subMenuFocus: string;
    deckCount: Map<string, number>;
    hand: { card: CardType; stack: CardType[] }[];
    savedDeck: { card: CardType; stack: CardType[] }[];
}