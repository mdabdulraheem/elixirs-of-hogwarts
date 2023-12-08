import { PotionDetails, PotionResponse } from '@/types/potion';
import { LOGO_URL, NOT_AVAILABLE } from './constants';

export const serializePotionsResponse = (
    potionsResponse: any,
): PotionResponse => {
    try {
        const pagination = potionsResponse.meta.pagination;
        const potions = potionsResponse.data.map((potion: any) => {
            const { slug, name, image, effect, difficulty, characteristics } =
                potion.attributes;
            return {
                slug,
                name,
                image: image || LOGO_URL,
                effect: effect || NOT_AVAILABLE,
                difficulty: difficulty || NOT_AVAILABLE,
                characteristics: characteristics || NOT_AVAILABLE,
            };
        });

        return { pagination, potions };
    } catch (error) {
        console.error('Error in serializePotionsResponse:', error);
        return {
            potions: [],
            pagination: null,
        };
    }
};

export const serializePotionDetailsResponse = (
    potionDetailsResponse: any,
): PotionDetails | null => {
    try {
        const {
            name,
            difficulty,
            effect,
            image,
            characteristics,
            inventors,
            ingredients,
            manufacturers,
            side_effects,
            time,
            wiki,
        } = potionDetailsResponse.attributes;

        return {
            name,
            difficulty: difficulty || NOT_AVAILABLE,
            effect: effect || NOT_AVAILABLE,
            image: image || LOGO_URL,
            characteristics: characteristics?.split(',') || NOT_AVAILABLE,
            inventors: inventors?.split(',') || NOT_AVAILABLE,
            ingredients: ingredients?.split(',') || NOT_AVAILABLE,
            manufacturers: manufacturers?.split(',') || NOT_AVAILABLE,
            side_effects: side_effects?.split(',') || NOT_AVAILABLE,
            time: time || NOT_AVAILABLE,
            wiki,
        };
    } catch (error) {
        console.error('Error in  serializePotionDetailsResponse:: ', error);
        return null;
    }
};
