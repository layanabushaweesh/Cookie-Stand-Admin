
import { useState } from 'react';


export default function Home() {

  const [shopData,setshopData] = useState([]);// here we define the hook
  // as event listner
  console.log(shopData)
  function eventHandler(event){
    // prevent defuld dont forget
    event.preventDefault();
    // console.log(event.target.minmun.value)
    const storeData={
      // get data from user input
      
      location:event.target.location.value,

      min:event.target.minmun.value,
      max:event.target.maximum.value,
      avg:event.target.avgarag.value,
    
    }
   
    // console.log(storeData)
    // to push the data
    // setshopData.push(storeData)
    setshopData(storeData)
  }
  return (
    <div className="bg-green-40">
      <head>
        <title>cookie stand admin</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <header className="bg-green-50">
        <h1 className='text-2xl'>
          Cookie Stand Admin
        </h1>

      </header>

      <main className="">

        <form className="bg-green-100  flex-col w-3/4 p-5 mx-auto my-8 rounded-md"  onSubmit={eventHandler}>
          <h1 className='text-center my-4 text-xl'>create cookie stand</h1>
          <div className="flex" >
            <label className="mx-1" >location</label>
            <input name="location" className="flex-auto bg-gray"/>
          </div>

          <div className="mx-auto my-4">
            <div className="flex-col">
              <h2>minimum customers per hour</h2>
              <input  name="minmun" className=""/>
            </div>

            <div className="flex-col w-1/4">
              <h2>maximum customers per hour</h2>
              <input  name="maximum" className=""/>
            </div>

            <div className="">
              <h2>average cookies per sale</h2>
              <input  name="avgarag" className=""/>
            </div>

            <button type ="submit" className="">create</button>      
          </div>   
        </form>

        
        
        {/* data shold display after create */}
        <h3>
            {JSON.stringify(shopData)}
        </h3>

        

      </main>

      <footer className="flex text-2xl bg-green my-4 text-center text-gray">

        &copy;2021

      </footer>
    </div>
  )
}