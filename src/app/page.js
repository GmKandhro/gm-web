import Image from 'next/image'
import { About, HeroSection, Projects } from './components'

export default function Home() {
  return (
    <>
      <div className='px-4 sm:px-20' >
        <HeroSection />
        <About />
        <Projects />
      </div>

    </>
  )
}
