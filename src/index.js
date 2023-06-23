import React from  'react'
import  ReactDOM  from 'react-dom'
import './index.css'



const books=[
  {
    img:'https://m.media-amazon.com/images/I/91upCY8QpWL._AC_UY327_FMwebp_QL65_.jpg',
    title:'title 1',
    author : 'author 1'
  },
  {
    img:'https://m.media-amazon.com/images/I/41Q+hoHuxvL._SX258_BO1,204,203,200_.jpg',
    title:'title 2',
    author : 'author 2'
  }
]





function BookList(){
  return (
    <section className='booklist'>

      
      
      {books.map((book,i)=>{

        // --------one way
        // return <Book img={book.img} title={book.title} author={book.author}/>

        // -----second way
        return <Book book={book}/>
        // return <Book img={book.img} title={book.title} author={book.author}/>
      })}
      
      {/* <Book img={books[1].img} title={books[1].title} author={books[1].author}/>
      <Book img={books[0].img} title={books[0].title} author={books[0].author}/>
      <Book img={books[1].img} title={books[1].title} author={books[1].author}/>
      <Book img={books[0].img} title={books[0].title} author={books[0].author}/> */}
      
      
    </section>
  )
}

const Book = (props)=>{
  console.log("This is the props",props.book)
   const {img,title,author}=props.book;
  return (

    <article className='book'>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    
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