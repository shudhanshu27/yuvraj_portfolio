import {BrowserRouter } from 'react-router-dom';
import {About,Contact,Feedbacks,Hero,Navbar,Works,StarsCanvas, Tech} from './components' ;
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {linkedin,twitter} from "./assets";

function App() {

  return (
   <BrowserRouter >
    <div  className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
<Navbar/>

<Hero/>
    </div>

<About/>

<div   className='fixed top-[300px] ' >
<a href='https://www.linkedin.com/in/yuvraj-singh-613a04201/' >
  <img src={linkedin} className='w-[40px]' />

</a>
<a href='https://twitter.com/YuvrajS57962075' >
  <img src={twitter} className='w-[40px]' />
</a>
</div>


<Tech/>


<Works/>
<Feedbacks/>
{/* <StarsCanvas/> */}
<div className="relative z-0" >
<Contact/>

{/* <StarsCanvas/> */}




</div>



    </div>
    <ToastContainer className="bg-red" />
   </BrowserRouter>
  )
}

export default App
