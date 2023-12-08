import Potions from '@/components/Potions';
import { SearchParams } from '@/types/common';

export const revalidate = 24 * 60 * 60; // revalidate the data every 24 hour

type Props = {
    searchParams: SearchParams;
};

const Page = (props: Props) => {
    const { searchParams } = props;

    return (
        <>
            {/*
                Separate component for potions 
                so that later if we refactor and have a 
                /potions route, we can reuse it..
            */}
            <Potions searchParams={searchParams} />
        </>
    );
};

export default Page;
