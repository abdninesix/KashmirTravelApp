import { PEOPLE_URL } from "@/constants";
import { url } from "inspector";
import Image from "next/image";

interface CampProps {
  bgImage:string;
  title:string;
  subtitle:string;
  peopleJoined:string;
}

const CampSite = ({bgImage, title, subtitle, peopleJoined}: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${bgImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl duration-200`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">

      <div className="rounded-full bg-green-700 p-4">
            <Image className="items-center" src="/folded-map.svg" alt="map" width={28} height={28}/>
          </div>

        <div className="flexCenter gap-4">
    
          <div className="flex flex-col backdrop-blur-md rounded-3xl p-3"> 
            <h4 className="text-[3rem] font-bold text-white">{title}</h4>
            <p className="text-[1rem] font-medium text-white">{subtitle}</p>
          </div>

        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">{PEOPLE_URL.map((url)=>(
            <Image className="inline-block w-10 h-10 rounded-full" src={url} alt="person" key={url} width={52} height={52}/>
          ))}</span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>

      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[640px] w-full items-start justify-start gap-8 overflow-auto lg:h-[400p] xl:h=[640px]'>
        <CampSite bgImage="bg-bg-img-1" title="Yusmarg" subtitle="Surrounded by lofty mountains and forests, Yusmarg is a beautiful lush green valley located at an altitude of 7861 feet in Budgam district of Kashmir." peopleJoined="60+ joined"/>
        <CampSite bgImage="bg-bg-img-2" title="Pahalgam" subtitle="Pahalgam Valley boasts enchanting landscapes and the majestic Himalayan peaks. With sparkling rivers, soaring pines, apple orchards, and verdant forests, Pahalgam is a popular attraction of Kashmir." peopleJoined="60+ joined"/>
        <CampSite bgImage="bg-bg-img-3" title="Gurez Valley" subtitle="Located at an altitude of 2,400 m and surrounded by snow-capped mountains, Gurez Valley is a destination with indescribable grandeur." peopleJoined="60+ joined"/>
        <CampSite bgImage="bg-bg-img-4" title="Sonamarg" subtitle="Famous as the 'Meadow of Golden Light', Sonamarg is a popular tourist destination in Kashmir. It is derived from two Hindi words, 'Sona' meaning gold and Marg' meaning meadow." peopleJoined="60+ joined"/>
        <CampSite bgImage="bg-bg-img-5" title="Gulmarg" subtitle="Gulmarg is a snow paradise, a cup-shaped valley ideally nestled in the Pir Panjal range of the western Himalayas. One of the best skiing destinations in Pakistan, Gulmarg offers adventure in plenty." peopleJoined="60+ joined"/>
        <CampSite bgImage="bg-bg-img-6" title="Srinagar" subtitle="If you have not visited Srinagar, you have not visited Kashmir! Synonymous with natural beauty, Srinagar is the capital city of Jammu & Kashmir ideally located along the banks of the Jhelum River." peopleJoined="60+ joined"/>
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-700 p-8 lg:max-w-[500px] xl:max-w-[800px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 text-white"><strong>Feeling lost?</strong>And not knowing the way?</h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an adventure</p>
          <Image src="/quote.svg" alt="camp-2" width={186} height={219} className="camp-quote"/>
        </div>
      </div>

    </section>
  )
}

export default Camp