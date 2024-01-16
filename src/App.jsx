




import Footer from './components/Footer'

import Hero from './components/Hero'
import Nav from './components/Nav'
import StudentTable from './components/studentTable/StudentTable'
function App() {


  return (
    <>
<div className='bg-[#172227] font-[Inter] text-white'>
  
  
  {/* Navbar Start */}
  <Nav/>
  {/* Navbar Ends */}

  {/* Begin hero */}
    <Hero/>
  {/* End Hero */}

  {/*Begin Students table */}
 <StudentTable/>
  {/* Footer */}
   <Footer/>
</div>
</>

 
  
  )
}

export default App
