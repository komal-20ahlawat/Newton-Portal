import { ChevronDown } from 'lucide-react';
import { Users } from 'lucide-react';
import { Bell } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';

function Navbar(){
    return (
        <>
        <div className='flex justify-between items-center px-6'>
            <div className="flex">
                <button className="border flex gap-3 rounded-xl p-1.5 m-2 cursor-pointer h-11 border-gray-200 pl-2 pr-2 items-center ml-0 shadow"><img className="w-5" src="https://d3dyfaf3iutrxo.cloudfront.net/general/upload/bbe791d38e9a4bc188b07d81691a6372.svg"></img>NST'25 CS+AI RU<ChevronDown/></button>
                <div className="bg-amber-100 p-1 rounded-3xl m-2 text-sm pl-3 cursor-pointer  h-11 flex items-center gap-x-6 border-gray-200 border">
                    <p className="font-medium">
                        Download the latest version of Athena.
                    </p>
                    
                    <button className="bg-amber-600 rounded-3xl p-1 cursor-pointer pl-2 pr-2 h-8 text-white font-bold hover:bg-amber-500">
                        Download
                    </button>
                    
                </div>
            </div>

<div className="flex items-center gap-6 cursor-pointer">
  <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center shadow-md">
    <span className='text-2xl'>🎁</span>
  </div>

  <div className="flex items-center border border-gray-300 rounded-full pl-5 pr-2 py-1 h-11 hover:bg-gray-100">

    <span className="font-medium text-md mr-4">
      Total XP
    </span>
    <div className="flex items-center bg-amber-100 rounded-full w-25 h-8 gap-2">

      <img
        src="https://d3dyfaf3iutrxo.cloudfront.net/general/upload/77ba313553d342eaa91e3e9a7ed5649c.svg"
        alt="xp" className='h-8'
      />

      <span className="font-medium text-gray-900 text-md">
        8,524
      </span>

    </div>

  </div>
  <div className='flex items-center gap-6 ml-6'>
      <Users />
       <Bell />
       <button className='flex hover:bg-gray-200 rounded-2xl h-10 w-15 items-center justify-center cursor-pointer'><CircleUserRound /> <ChevronDown size={20}/></button>

  </div>

</div>


        </div>

        </>

    )
}

export default Navbar