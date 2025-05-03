import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-22 md:gap-28 lg:py-20 xl:flex-row duration-200'>

        <div className='hero-map'> </div>

        <div className='relative z-20 flex flex-1 flex-col xl:w-[600px]'>
        <Image src="/camp.svg" alt="camp" width={50} height={50} className='absolute left-[-5px] top-[-50px] w-10 lg:w-[50px]'/>
        <h1 className='bold-52 lg:text-[4.5rem]'>Kashmir travel guide app</h1>
        <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>Epitomizing heavenly beauty on earth, Kashmir takes you closer to Nature’s magic through its pleasant weather, snow-capped mountains, gorgeous meadows, lush green gardens, stunning water bodies, traditional houseboats, scrumptious food, quaint valleys, magnificent architecture, world-famous pashmina, and sheer natural beauty. The more you explore the Kashmir tourist destinations, the more you get mesmerized. It is also a gateway to several other beautiful valleys of Kashmir.</p>

        <div className='my-11 flex flex-wrap gap-5'>

          <div className='flex items-center gap-2'>
            {Array(5).fill(1).map((_, index)=>(
              <Image src="/star.svg" key={index} alt="star" width={24} height={24}/>            ))}
          </div>

          <p className='bold-16 lg:bold-20 text-blue-70'>198k
            <span className='regular-16 lg:regular-20 ml-1'>Excellent reviews</span>
          </p>

        </div>

        <div className='flex flex_col w-full gap-3 sm:flex-row'>
          <Button type="button" title='Download App' variant='btn_green'/>
          <Button type="button" title='How we work' icon='/play.svg' variant='btn_white_text'/>
        </div>

        </div>

        <div className='relative flex flex-1 items-start'>

          <div className='z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'>

          <div className='flex flex-col'>
            <div className='flexBetween'>
              <p className='regular-16 text-gray-20'>Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24}/>
              </div>
              <p className='bold-20 text-white'>34°30'N 76°30'E/ 34.5°N 76.5°E Kashmir </p>
          </div>

          <div className='flexBetween'>

            <div className='flex-col'>
              <p className='regular block text-gray-20'>Distance</p>
              <p className='bold-20 text-white'>128.5 km</p>
            </div>

            <div className='flex-col'>
              <p className='regular block text-gray-20'>Elevation</p>
              <p className='bold-20 text-white'>1.85 km</p>
            </div>

          </div>

        </div>

          </div>
          
    </section>
  )
}

export default Hero