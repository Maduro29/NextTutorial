'use client'
import TestTable from '../components/app.table';
import useSWR from 'swr'

const Authors = () => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        'http://34.87.168.245:3000/getallauthors',
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    );

    return <>
        <TestTable authors={data?.authors} />
    </>
}

export default Authors