import { API_URL, PAGE_SIZE } from '@/utils/constants';
import {
    serializePotionDetailsResponse,
    serializePotionsResponse,
} from '@/utils/serializers';

/**
 * Fetches the list of potions from the potterDB API.
 * Handles pagination and filtering.
 */
export const getPotions = async (
    query: string = '',
    pageNum: number = 1,
    difficulty: string | undefined,
    characteristics: string | undefined,
) => {
    try {
        let url = `${API_URL}potions?page[size]=${PAGE_SIZE}`;
        url += '&page[number]=' + pageNum;
        if (query && query !== '') {
            url += `&filter[name_cont_any]=${query}`;
        }
        if (difficulty) {
            url += `&filter[difficulty_cont_any]=${difficulty}`;
        }
        if (characteristics) {
            url += `&filter[characteristics_cont_any]=${characteristics}`;
        }

        const data = await getDataFromUrl(url);
        return serializePotionsResponse(data);
    } catch (error) {
        console.error('Error in getPotions:: ', error);
        return {
            potions: [],
            pagination: null,
        };
    }
};

/**
 * Fetches details of a single potion.
 */
export const getPotionDetails = async (slug: string) => {
    try {
        /*
        Nextjs looks for static files like favicon in  root folder.
        This is invoking the route segment.
        To avoid this, added a check.
        */
        if (slug.includes('.')) return null;

        let url = API_URL + 'potions/' + slug;
        const data = await getDataFromUrl(url);
        if (data?.errors) {
            throw new Error(data.errors);
        }
        return serializePotionDetailsResponse(data.data);
    } catch (error) {
        console.error(
            'Error in getPotionDetails for slug:: ',
            slug,
            ' Error:: ',
            error,
        );
        return null;
    }
};

const getDataFromUrl = async (url: string) => {
    const res = await fetch(url);

    return await res.json();
};
