import React from  'react'
import  ReactDOM  from 'react-dom'
import './index.css'


const img='https://m.media-amazon.com/images/I/91upCY8QpWL._AC_UY327_FMwebp_QL65_.jpg';
const title='title 1';
const author = 'author 1'






function BookList(){
  return (
    <section className='booklist'>
      <Book price={234}>
        <h6>H3 children</h6>
        <h1>h1</h1>
        <h4>h3</h4>
        <h5>h5</h5>
       
        </Book>
      <Book price={23}/>
      <Book price={245}/>
      
    </section>
  )
}

const Book = (props)=>{
  console.log("This is the props",props.children)
  return (
    <article className='book'>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
     
        {props.children}
      <p> &#8377;{props.price}/-</p>
    </article>
  )
}





// ---------------------Below are the three methods to render the root element

// const rootElement = document.getElementById('root');
// ReactDOM.createRoot(rootElement).render(<Greeting />);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);

// ReactDOM.render(<Greeting/>,document.getElementById('root'))