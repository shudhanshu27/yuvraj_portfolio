import {BrowserRouter } from 'react-router-dom';
import {About,Contact,Feedbacks,Hero,Navbar,Works,StarsCanvas, Tech} from './components' ;
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
   <BrowserRouter >
    <div  className="relative z-0 bg-primary">
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
<Navbar/>

<Hero/>
    </div>

<About/>

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
