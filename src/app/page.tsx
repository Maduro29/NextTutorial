'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { useEffect } from 'react'
import TestTable from './components/app.table'
import useSWR from 'swr'

export default function Home() {




  // useEffect(() => {
  //   fetch('http://34.87.168.245:3000/randomauthors')
  //     .then(response => response.json())
  //     .then(data => {
  //       // Now you can use your data
  //       console.log(data);
  //     });
  // }, [])

  return (
    <>
      <ul>
        <li>
          <Link href="/facebook" className='nav-link'>facebook</Link>
        </li>
        <li>
          <Link href="/tiktok" className='nav-link'>tiktok</Link>
        </li>
        <li>
          <Link href="/youtube" className='nav-link'>youtube</Link>
        </li>
      </ul>

    </>
  )
}
