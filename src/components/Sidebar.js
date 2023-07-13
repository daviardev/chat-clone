// import Image from 'next/image'

import Edit from './Icons/Edit'
import Open from './Icons/Open'
import Plus from './Icons/Plus'
import Share from './Icons/Share'
import Delete from './Icons/Delete'
import Message from './Icons/Message'

import { useSession } from 'next-auth/react'

export default function Sidebar () {
  const { data: session } = useSession()
  return (
    <>
      <div className='overflow-x-hidden flex-shrink-0 bg-[rgb(32,33,35)]'>
        <div className='h-screen w-[260px]'>
          <div className='flex h-full min-h-0 flex-col'>
            <div className='relative h-full w-full flex-1 items-start border-white/20'>
              <nav className='flex h-full w-full flex-col p-2'>
                <div className='mb-1 flex flex-row gap-2'>
                  <button className='flex p-3 items-center gap-3 transition-colors duration-200 cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 flex-shrink-0 flex-grow'>
                    <Plus />
                    New chat
                  </button>
                  <span>
                    <button className='flex p-3 gap-3 transition-colors duration-200 cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 w-11 flex-shrink-0 items-center justify-center'>
                      <Open />
                    </button>
                  </span>
                </div>
                <div className='flex-col flex-1 transition-opacity duration-500 overflow-y-auto'>
                  <div className='flex flex-col gap-2 pb-2 text-gray-100 overflow-y-auto'>
                    <div className='flex flex-col gap-2 pb-2 text-gray-100 text-sm'>
                      <div>
                        <span>
                          <div className='relative h-auto opacity-[1]'>
                            <div className='sticky top-0 z-[16]'>
                              <h3 className='h-9 pb-2 pt-3 px-3 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all'>History</h3>
                            </div>
                            <ol>
                              <li className='relative z-[15] opacity-[1] h-auto'>
                                <a className='flex py-3 px-3 items-center gap-3 relative rounded-md cursor-pointer break-all pr-[4.5rem] bg-[rgb(52,53,65)] hover:bg-[rgb(52,53,65)]'>
                                  <Message />
                                  <div className='flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative'>
                                    Test Summarized
                                  </div>
                                  <div className='absolute flex right-1 z-10 text-gray-300 visible'>
                                    <button className='p-1 hover:text-white'>
                                      <Edit />
                                    </button>

                                    <button type='button' className='p-1 hover:text-white'>
                                      <Share />
                                    </button>

                                    <button className='p-1 hover:text-white'>
                                      <Delete />
                                    </button>
                                  </div>
                                </a>
                              </li>
                            </ol>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='border-t border-white/20 pt-2 empty:hidden'>
                  <a className='flex p-3 items-center gap-3 transition-colors duration-200 cursor-pointer text-sm hover:bg-[rgb(52,53,65)] rounded-md'>
                    <span className='flex w-full flex-row justify-between'>
                      <span className='flex items-center gap-3'>
                        <svg stroke='currentColor' fill='none' stroke-width='2' viewBox='0 0 24 24' stroke-linecap='round' stroke-linejoin='round' className='h-4 w-4' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                          <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' />
                          <circle cx='12' cy='7' r='4' />
                        </svg>
                        Upgrade to Plus
                      </span>
                      <span className='rounded-md bg-yellow-200 px-1.5 py-0.5 text-xs font-medium uppercase text-gray-800'>
                        NEW
                      </span>
                    </span>
                  </a>
                  <div className='relative'>
                    <button className='flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-[rgb(52,53,65)]'>
                      <div className='flex-shrink-0'>
                        <div className='relative flex'>
                          {session && (
                            <img
                              alt='User'
                              src={session.user?.image}
                              className='rounded-sm w-7 h-7'
                            />
                          )}
                        </div>
                      </div>
                      <p className='grow overflow-hidden text-ellipsis whitespace-nowrap text-left text-white'>
                        daviardev
                      </p>
                      <svg stroke='currentColor' fill='none' stroke-width='2' viewBox='0 0 24 24' stroke-linecap='round' stroke-linejoin='round' className='h-4 w-4 flex-shrink-0 text-gray-500' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><circle cx='12' cy='12' r='1' /><circle cx='19' cy='12' r='1' /><circle cx='5' cy='12' r='1' /></svg>
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
