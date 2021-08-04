import { useState } from 'react'
import Head2 from "./Head";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./main";

export default function CookieStand(props){

    const [numOfLocation,setOfLocation] = useState(0)
    
    return(
        <div className="bg-green-50">
      <Head2/>

      <Header/>

      <Main setOfLocation={setOfLocation} numOfLocation={numOfLocation}/>

      
      <Footer numOfLocation={numOfLocation}/>
    </div>
    );
  }