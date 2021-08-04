// this solution inspired from my teammate because I'm sick
import { useState } from 'react';
import { time } from '../data.js'

export default function Main(props) {
  //define the hook
    const [shopData,setshopData] = useState([]);
    
    const [totalinHour, setTotal] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);///initial all value
    const [totaloftotal, setTotalOfTotals] = useState(0);

    
   
    function eventHandler(event) {

        event.preventDefault()

        // props are used to pass data from a parent component to a child component in React and they are the main mechanism for component communication
        // to push the data
        props.setOfLocation(props.numOfLocation+1)


        const storeData = {
            location: event.target.location.value,

            min: event.target.minmun.value,

            max: event.target.maximum.value,

            avg: event.target.avgarag.value,
        }

        function hour_saeal(min, max, avg) {
            let aray = []
            time.forEach((a ,b) => {
                 //
                const random = Math.floor((Math.random() * (parseInt(max) - parseInt(min)) + parseInt(min)) * parseInt(avg))
                aray.push(random)

            });
            let totalValue = aray.map((a ,b) => {
                return a + totalinHour[b]
            })


            setTotal(totalValue)
            return aray

        }

        const data = {
            location: storeData.location,
            hourly_sales: hour_saeal(storeData.min, storeData.max, storeData.avg),

        }

        let Totals=totaloftotal+data.totalOfDay

        function total_day(aray) {
            let total = 0

            aray.forEach(item => {
                total =item+total
            })

            return total
        }

        data.totalOfDay = total_day(data.hourly_sales)

       

        
        setshopData([...shopData, data]);
        setTotalOfTotals(Totals)

        
    }



    return (
        <main className="min-h-750">

            <CreateForm eventHandler={eventHandler} />
            <ReportTable shopData={shopData} time={time} totalinHour={totalinHour} totaloftotal={totaloftotal} />


        </main>
    );
}



function ReportTable(props) {

    return (


        <div className="container flex mx-auto mb-25 text-center">
            
                    <table className="border border-gray rounded-md">
                        <thead className="bg-green">

                                <th>Location
                                </th>
                                {props.time.map(data => {
                                return (<th >{data}
                                </th>)
                             })
                             }
                            <th >Totals</th>


                        </thead>
                        <tbody className="border border-gray">
                            {props.shopData.map(data => {
                                return (
                                    <tr className="border border-gray">

                                        <td className="border border-gray" >{data.location}
                                        </td>
                                                    {data.hourly_sales.map(data => {
                                            return (
                                                <td className="border border-gray" >{data}
                                                </td>
                                            )

                                        })
                                        }

                                        <td className="border border-gray" >{data.totalOfDay}
                                        </td>
                                    </tr>


                                )

                            })}

                        </tbody>
                        <tfoot className="bg-green border  border-gray">

                            <tr className="border  border-gray" >
                                <th className="border  border-gray">Totals
                                </th>
                                       {props.totalinHour.map(data => {
                                    return (
                                        <td className="border border-gray">{data}
                                        </td>
                                    )
                                         })}
                                <td className="border border-gray">{props.totaloftotal}
                                </td>
                            </tr>
                        </tfoot>
                    </table>

            

        </div>


    );
}



function CreateForm(props) {

    return (
        
        <form className="bg-green-100  flex-col w-3/4 p-5 mx-auto my-8 rounded-md"  onSubmit={props.eventHandler}>
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


    );

}