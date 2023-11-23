'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Page() {

    const router = useRouter();

    const handleClickBtn = () => {
        router.push("/")
    }

    return (
        <>
            <button onClick={() => handleClickBtn()}>Click to back</button>
        </>
    )
}