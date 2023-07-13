import Head from 'next/head'
import { getProviders, useSession, getSession } from 'next-auth/react'

import Login from '@/components/Login'
import Sidebar from '@/components/Sidebar'

export default function Home () {
  const { data: session } = useSession()

  if (!session) return <Login />
  return (
    <>
      <Head>
        <title>ChatGPT</title>
      </Head>

      <div className='overflow-hidden w-full h-full relative flex z-1'>
        <Sidebar />
      </div>
    </>
  )
}

export async function getServerSideProps (context) {
  const providers = await getProviders()
  const session = await getSession(context)

  return {
    props: {
      providers,
      session
    }
  }
}
