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
  const num=907;
  const styles={
    color:"green",
    fontSize:'1rem'
  }
  return <>
    <div style={styles}>
      <h1>Heading</h1>
      <p>{num}</p>
      {/* Below statement is going to throw an error because inside {} there should  */}
      {/* always be a value instead of a statement, Got it*/}
      {/* <p>{let a =90;}</p> */}
      <Greet/>
    </div>
  </>
}

const Greet = ()=><h2>Greet</h2>




// ---------------------Below are the three methods to render the root element

// const rootElement = document.getElementById('root');
// ReactDOM.createRoot(rootElement).render(<Greeting />);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Greeting />
  </React.StrictMode>
);

// ReactDOM.render(<Greeting/>,document.getElementById('root'))