

import ArrowLine from "./ArrowLine.svg"
import zeptoLogo from "./zepto-logo1.png"
import ChatbotInflowmate from './chatbot';
import Logo from "./inflowmate.png"
import ZeptoLogo from "./zeptoLogo.png"
import connetti from "./confetti.svg"
import fileIcon from "./FileIcon.png"
import ClickHere from "./ClickHere.png"
import CurveArrow from "./CurveArrrow2.png"
import Accessbot from "./AccessTheBot.png"
import CurveArrowLast from "./CurveArrow.png"
import Chatbotreal from "./chatbot2";

function App() {
  return(
    <>
      
      <div className="header">
         <img src={connetti}/>
         <p>Inflowmate is now on Discord! Be a part of the conversational AI revolution – <a href='' style={{color:"white"}}>Join our community!</a></p>
         <img src={connetti}/>
      </div>
      
      
      <div className='heading2'>
      <div className='image'> 
        <img src={Logo} className='logo'/>
        <img src={ArrowLine} style={{width: "12vw"}}/>
        <img src={zeptoLogo} className='zeptoLogo'/>
      </div>
      </div>
  

      <div className='mainContainer'>
        <div>
          <img src=''/>
        </div>
        <div>
           <span className="info1">This <span className="chatbot">Chatbot</span> is being built for</span> <img src={ZeptoLogo} className='buildZepto'/>

        </div>
        <div className="maincontent">
          <div>
          The A.I is trained on the data that is being used in real time by<br/>
          Zepto Chat Support members to assist customers
          </div>
          <p>Here’s the link to Document if you wanna check: </p>
          
        </div>
        <div className="images1" >
          <a href="https://docs.google.com/spreadsheets/d/1baz-zCC-P3SLjLJ96xyrXEW9O7do_Otjowb_AS44Pv4/edit#gid=7487897" target="_blank"><img src={ClickHere}  style={{width:"12vh"}}/></a>
        </div>   
        <div className="arrow">
          <img src={CurveArrow} style={{width:"6vh", alignText:"center",paddingRight:"4vh"}}/>
          
        </div>
      
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
           <img src={fileIcon} style={{height:"22vh",paddingRight:"12vh",marginTop:"-4vh"}}/>
        </div>
        <img src={Accessbot} className="Accessbot"/>
        <img src={CurveArrowLast} className="curvearrowlast"/>
        
        <Chatbotreal/>
      </div>

    </>
  )
}

export default App;
