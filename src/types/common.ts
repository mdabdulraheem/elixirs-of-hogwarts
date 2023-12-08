export type FilterData = {
    name: string;
    options: FilterOption[];
};

export type FilterOption = {
    label: string;
    key: string;
};

export type SelectedFilters = Record<string, string[]>;

export type SearchParams = {
    query?: string;
    page?: string;
    difficulty?: string;
    characteristics?: string;
    [key: string]: string | undefined;
};
