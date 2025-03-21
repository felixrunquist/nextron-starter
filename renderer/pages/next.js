import Head from 'next/head'
import Link from 'next/link'

export default function NextPage() {
  return (
    <>
      <Head>
        <title>Next - Nextron (basic-store-data)</title>
      </Head>
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ - <Link href="/home">Go to home page</Link>
        </p>
      </div>
    </>
  )
}
