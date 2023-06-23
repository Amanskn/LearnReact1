import React from  'react'
import  ReactDOM  from 'react-dom'

function Greeting(){
  return <>
    <div>
      <h1>Heading</h1>
    </div>
  </>
}

// above and this code both are same
const Greet=()=>{
  return React.createElement('div',{},React.createElement('h1',{},"Heading"))
}

// const Greet=()=>{
//   return React.createElement('div',{},'div')
// }



ReactDOM.render(<Greet/>,document.getElementById('root'))