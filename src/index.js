import React from  'react'
import  ReactDOM  from 'react-dom'

// JSX Rules
// return single element
// div / section / article or Fragment(<></> or <React.Fragment></React.Fragment>)
// use camelCase for html attribute
// className instead of class
// close every element
// formatting


function Greeting(){
  return <>
    <div>
      <h1>Heading</h1>
    </div>
  </>
}





ReactDOM.render(<Greet/>,document.getElementById('root'))