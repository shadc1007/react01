import Image from '../assets/react.png'



export default function Nav() {
  return (
    <nav className="bg-navbg flex items-center justify-between py-8 px-6 md:px-14 lg:px-32">
      <div className='flex items-center gap-1'>
        <img src={Image} alt="" className='w-7'/>
        <h1 className='text-react font-bold text-2xl'>ReactFacts</h1>
      </div>
      <h4 className='text-white'>React Course - Project 1</h4>
    </nav>
  )
}
