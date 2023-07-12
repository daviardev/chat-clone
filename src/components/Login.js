import Head from 'next/head'

import { signIn } from 'next-auth/react'

import Logo from './Icons/Logo'

export default function Login () {
  return (
    <>
      <Head>
        <title>ChatGPT</title>
      </Head>
      <main className='bg-[var(--color-body)] h-screen flex flex-1 justify-center items-center flex-col'>
        <div className='h-screen flex flex-1 justify-center items-center flex-col'>
          <div className='flex flex-col justify-center items-center'>
            <Logo />
            <span className='mb-2 text-center text-[var(--text-color)]'>Welcome to ChatGPT</span>
            <span className='mb-4 text-center text-[var(--text-color)]'>Log in with your OpenAI account to continue</span>
          </div>
          <div className='flex flex-row gap-3'>
            <button className='btn flex justify-center gap-2 btn btn-primary' onClick={async () => await signIn('google')}>
              Log in
            </button>
          </div>
        </div>
        <div className='py-3 text-xs'>
          <a className='mx-3 text-[var(--text-disabled)]'>
            Terms of use
          </a>
          <span className='text-gray-600'>|</span>
          <a className='mx-3 text-[var(--text-disabled)]'>
            Privacy policy
          </a>
        </div>
      </main>
    </>
  )
}
