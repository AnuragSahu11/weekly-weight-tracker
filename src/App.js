import React ,{ useState, useEffect } from "react"
import LineChart from "./components/LineChart"
import  "./App.css"
import Inputs from "./components/Inputs"

function App(){
    const [data,setData] = useState([1,1,1,1,1,1,1])

    function handleChange(event){

        const newData = data.map((elm,i) => {
           
            if (i===parseInt(event.target.id)){
                return(event.target.value)
            }
            else{
                return(elm)
            } 
        })
        setData(newData)
        }
       
    return(
        <div className='App' >
            <h1>Weekly Weight Tracker</h1>
            <LineChart weekData={data} />
            <Inputs handleChange={handleChange} />
        </div>
    )
}

export default App