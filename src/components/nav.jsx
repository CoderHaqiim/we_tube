import React,{useState}from 'react'

export default function Nav() {
  const [show, setShow] = useState(false)

  const showIcon = (e) =>{
    console.log(e)
    e.type == 'click'? setShow(true) : setShow(false)
  }

  return (
    <nav className=' z-[5] bg-basecolor h-[56px] w-full flex flex items-center fixed top-[-1px] left-[0px] px-padding6 justify-between font-[5rem]'>
      <div className='w-[150px] h-full flex items-center justify-start gap-[10px] font-bold text-white'>
          <div className='w-[30px] h-[30px]'>
            <img src="/youtubelogo.svg" alt=""/>
          </div>
          <div>WeTube</div>
      </div>
      <div className='w-[57%] flex justify-between items-center gap-gap3 h-full'>
        <div className='h-[40px] justify-right rounded-rounded5 flex w-auto flex-1'>
          <div className={`${show? "ml-[0px] border-[#245cd6]" : "ml-[40px] border-glass1"} flex justify-end flex-1 relative items-center w-auto rounded-tl-rounded5 rounded-bl-rounded5 border-[solid] border-[1px] h-full`}>
            {
              show? <div className='w-[40px] h-full p-[7px] rounded-tl-rounded5 rounded-bl-rounded5'>
                <img src="/search.svg" alt="" />
              </div>:<></>
            }
            <input onClick={(e)=>{showIcon(e)}} onBlur={(e)=>{showIcon(e)}} className='w-auto flex-1 ml-[15px] font-norm h-[50%] pb-[1px] border-[0px] bg-[transparent] outline-[0px] caret-textcolor ' type="text" placeholder='Search'/>
          </div>
          <button className='h-full w-[65px] p-[7px] rounded-tr-rounded5 border-[solid] border-[1px] border-glass1 rounded-br-rounded5 bg-glass'>
            <img src="/search.svg"  alt="icon" />
          </button>
        </div>
        <div className='bg-glass w-[40px] p-[6px] h-[40px] rounded-_rounded '>
          <img src="/mic.svg"  alt="icon" />
        </div>
      </div>

      <div className=' w-auto items-center gap-gap4 flex  justify-between h-full'>
          <div className='w-[32px] h-[32px] p-[2px]'>
            <img src="/vid.svg"  alt="icon" />
          </div>
          <div className='p-[3px] w-[35px] h-[35px] rounded-_rounded hover:bg-glass'>
            <img src="/notes.svg"  alt="icon" />
          </div>
          <div className='bg-[brown] font-bold w-[32px] h-[32px] flex justify-center items-center text-textcolor rounded-_rounded '>A</div>
      </div>
    </nav>
  )
}
