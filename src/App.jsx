import './App.css'
import Aside from './components/aside'
import Card from './components/card'
import Nav from './components/nav'
import Main from './components/main'
import Filternav from './components/filternav'

function App() {

  return (
    <div className='app w-full h-auto bg-basecolor'>
      <div className='w-full h-auto'>
        <Nav/>
        <div className='w-full'>
          <Aside/>
          <div className='relative mt-[56px] w-full flex flex-col h-[auto] pt-[10px]
            md:ml-[72px] md:w-[calc(100%-72px)]'>
            <Filternav/>
            <Main/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
