import React from 'react'

function Inputs(props) {
    return (
        <div className='Inputs'>
            <input type="text" placeholder='Sunday weight'  id={0} onChange={props.handleChange}/>
            <input type="text" placeholder='Monday weight'  id={1} onChange={props.handleChange}/>
            <input type="text" placeholder='Tuesday weight'  id={2} onChange={props.handleChange}/>
            <input type="text" placeholder='Wednesday weight'  id={3} onChange={props.handleChange}/>
            <input type="text" placeholder='Thursday weight'  id={4} onChange={props.handleChange}/>
            <input type="text" placeholder='Friday weight'  id={5} onChange={props.handleChange}/>
            <input type="text" placeholder='Saturday weight' id={6}  onChange={props.handleChange}/>
        </div>
    )
}

export default Inputs
