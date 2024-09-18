import type { Metadata } from 'next'
import './globals.css'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Strength Gains',
  description: 'Landing page to show what training with strength gains is and drives you to another web that has a initial valoration form'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='h-dvh w-dvw'>
        <header className='flex justify-center gap-3 h-20 bg-gray-700'>
          <div className='flex flex-col justify-center h-20'>
            <Image
              src="/icon.png"
              alt="Strength Gains logo"
              width={40}
              height={40}
              priority
            />
          </div>
          <h1 className='flex flex-col justify-center h-20 text-4xl font-bold text-blue-50'>
            STRENGTH GAINS
          </h1>
        </header>

        {children}
      </body>
    </html>
  )
}
