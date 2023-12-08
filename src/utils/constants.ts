import { FilterData } from '@/types/common';

export const API_URL = 'https://api.potterdb.com/v1/';

export const PAGE_SIZE = 10;

export const LOGO_URL = '/images/magicPotion.png';

export const NOT_AVAILABLE = 'N/A';

export const POTION_FILTER_OPTIONS: FilterData[] = [
    {
        name: 'Difficulty',
        options: [
            {
                label: 'Beginner',
                key: 'beginner',
            },
            {
                label: 'Ordinary',
                key: 'ordinary',
            },
            {
                label: 'Moderate',
                key: 'moderate',
            },
            {
                label: 'Advanced',
                key: 'advanced',
            },
        ],
    },
    {
        name: 'Characteristics',
        options: [
            {
                label: 'Red',
                key: 'red',
            },
            {
                label: 'Green',
                key: 'green',
            },
            {
                label: 'Blue',
                key: 'blue',
            },
            {
                label: 'Yellow',
                key: 'yellow',
            },
        ],
    },
];
