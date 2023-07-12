import { getProviders, useSession, getSession } from 'next-auth/react'

import Login from '@/components/Login'
import Head from 'next/head'

export default function Home () {
  const { data: session } = useSession()

  if (!session) return <Login />
  return (
    <>
      <Head>
        <title>ChatGPT</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      Aquí se muestra el contenido una vez logueado
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
