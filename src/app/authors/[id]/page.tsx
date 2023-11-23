'use client'
import SongTable from '@/app/components/app.songtable';
import useSWR from 'swr';

const Detail = (props: any) => {

    const { params } = props;
    const idAuthor = params.id;
    console.log('check id:', idAuthor);

    const fetcher = (url: string) => {
        return fetch(`${url}?idAuthor=${idAuthor}`).then((res) => res.json());
    };

    const { data, error, isLoading } = useSWR(
        ['http://34.87.168.245:3000/getauthorallsongs'],
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    );

    console.log(data)

    return (
        <>
            <SongTable songs={data?.songs} />
        </>
    )
}

export default Detail;
