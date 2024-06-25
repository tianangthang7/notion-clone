import TitleSection from '@/components/landing-page/title-section'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import Banner from '../../../public/appBanner.png'
import Calendar from '../../../public/cal.png'

import { CLIENTS, USERS } from '@/lib/constants'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import CustomCard from '@/components/landing-page/custom-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
const HomePage = () => {
  return (
    <>
      <section className='mt-10 gap-4 overflow-hidden px-4 sm:flex sm:flex-col sm:px-6 md:items-center md:justify-center'>
        <TitleSection
          pill='✨ Your Workspace, Perfected'
          title='All-In-One Collaboration and Productivity Platform'
        />
        <div className='mt-6 rounded-xl bg-white bg-gradient-to-r from-primary to-brand-primaryBlue p-[2px] sm:w-[300px]'>
          <Button
            variant='secondary'
            className='w-full rounded-[10px] bg-background p-6 text-2xl'
          >
            Get Cypress Free
          </Button>
        </div>
        <div className='relative ml-[-50px] mt-[-40px] flex w-[750px] items-center justify-center sm:ml-0 sm:w-full md:mt-[-90px]'>
          <Image src={Banner} alt='Application Banner' />
          <div className='absolute bottom-0 left-0 right-0 top-[50%] z-10 bg-gradient-to-t dark:from-background'></div>
        </div>
      </section>
      <section className='relative'>
        <div className="after:content[''] before:content[''] flex overflow-hidden before:absolute before:bottom-0 before:left-0 before:top-0 before:z-10 before:w-20 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:bottom-0 after:right-0 after:top-0 after:z-10 after:w-20 after:bg-gradient-to-l after:from-background after:to-transparent before:dark:from-brand-dark after:dark:from-brand-dark">
          {[1, 2].map((arr) => (
            <div key={arr} className='animate-slide flex flex-nowrap'>
              {CLIENTS.map((client) => (
                <div
                  key={client.alt}
                  className='relative m-20 flex w-[200px] shrink-0 items-center'
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={200}
                    className='max-w-none object-contain'
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className='relative flex flex-col items-center justify-center px-4 sm:px-6'>
        <div className='top-22 absolute -z-10 h-32 w-[30%] rounded-full bg-brand-primaryPurple/50 blur-[120px]' />
        <TitleSection
          title='Kepp track of your meetings all in one place'
          subheading='Capture your ideas, thoughts, and meeting notes'
          pill='Fetures'
        />
        <div className='realtive mt-10 flex max-w-[450px] items-center justify-center rounded-2xl border-8 border-washed-purple-300 border-opacity-10 sm:ml-0'>
          <Image alt='calendar' src={Calendar} className='rounderd-2xl' />
        </div>
      </section>

      <section className='relative'>
        <div className='mt-20 flex flex-col overflow-visible overflow-x-hidden px-4 sm:px-6'></div>

        <TitleSection
          title='Trusted by all'
          subheading='Join thousand of satisfied users'
          pill='Testimonials'
        />
        {[...Array(2)].map((arr, index) => (
          <div
            className={twMerge(
              clsx('mt-10 flex flex-nowrap gap-6 self-start', {
                'flex-row-reverse': index === 1,
                'animate-[slide_250s_linear_infinite]': true,
                'animate-[slide_250s_linear_infinite_reverse]': index === 1,
                'ml-[100vw]': index === 1,
              }),
              'hover:paused'
            )}
          >
            {USERS.map((testimonial, index) => (
              <CustomCard
                key={testimonial.name}
                className='shrink-0s w-[500px] rounded-xl dark:bg-gradient-to-t dark:from-border dark:to-background'
                cardHeader={
                  <div className='items-canter flex gap-4'>
                    <Avatar>
                      <AvatarImage
                        src={`/avatars/${index + 1}.png`}
                      ></AvatarImage>
                      <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                  </div>
                }
              ></CustomCard>
            ))}
          </div>
        ))}
      </section>
    </>
  )
}

export default HomePage
