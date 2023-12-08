export type PotionSubset = {
    slug: string;
    name: string;
    image: string;
    effect: string;
    difficulty: string;
    characteristics: string;
};

export type Pagination = {
    current: number;
    next?: number | null;
    last?: number;
    records: number;
};

export type PotionResponse = {
    potions: PotionSubset[] | [];
    pagination: Pagination | null;
};

export type PotionDetails = {
    name: string;
    difficulty: string;
    effect: string;
    image: string;
    characteristics: string[] | string;
    inventors: string[] | string;
    ingredients: string[] | string;
    manufacturers: string[] | string;
    side_effects: string[] | string;
    time: string;
    wiki: any;
};
