import {BrowserRouter } from 'react-router-dom';
import {About,Contact,Feedbacks,Hero,Navbar,Works,StarsCanvas, Tech} from './components' ;
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {linkedin,twitter} from "./assets";

function App() {

  return (
   <BrowserRouter >
    <div  className="relative z-0 bg-gradient-to-r from-cyan-100 to-blue-100 ">
    <div className="bg-white fixed  ">
<Navbar/>

<div className='w-[100vw] ' >
  <Hero/>
</div>
/////

    </div>
    
//
<div className='top-[100vh]  bg-gradient-to-r from-cyan-100 to-blue-100 relative' >
<About/>

<div   className='z-20  fixed top-[300px] ' >
<a href='https://www.linkedin.com/in/yuvraj-singh-613a04201/' >
  <img src={linkedin} className='w-[40px] hover:scale-[1.5] hover:translate-x-[10px] hover:translate-y-[-10px] rounded-[3px] ' />

</a>
<a href='https://twitter.com/YuvrajS57962075' >
  <img src={twitter} className='w-[40px] hover:scale-[1.5] hover:translate-x-[10px] hover:translate-y-[10px] rounded-[3px]' />
</a>
</div>


<Tech/>


<Works/>
<Feedbacks/>
{/* <StarsCanvas/> */}
<div className="relative z-0" >
<Contact/>






</div>

</div>
//

    </div>
    <ToastContainer className="bg-red" />
   </BrowserRouter>
  )
}

export default App
