
import { Link } from 'react-router-dom'
import claims from '../assets/claims.jpg'
import { Button } from './ui/button'

export default function Features() {
  return (
    <div className="bg-[#c9aae4] border-b-2 border-b-[#c3c0df] py-6">
    <div className="container mx-auto flex justify-center items-center">
      {" "}
      <Link to="/features" className="text-3xl font-bold tracking-tight justify-center ">
       Features
      </Link>
    </div>
    <div className='container mx-auto flex justify-around '> 
    <div className='grid grid-cols-2 gap-8 p-10 '>
    <div>
        <span className='text-3xl '> Robotic Automation Process </span>
        <p> Struggling to reduce time and effort spent on mundane, repetitive tasks? Significantly increase efficiency and profitability by automatic revenue cycle management</p> 

        <Button className='my-5'> Learn More </Button>
    </div>
    <div className='flex justify-center'>
        <img src={claims} className=' max-h-[300px]'/>
    </div>

    </div>
    </div>

    
  </div>
  )
}
