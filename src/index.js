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
  },
  {
    img:'https://m.media-amazon.com/images/I/41RwQlo446L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
    title:'title 3',
    author : 'author 3'
  },
  {
    img:'https://m.media-amazon.com/images/I/51SY74icfIL.jpg',
    title:'title 4',
    author : 'author 4'
  },
  {
    img:'https://m.media-amazon.com/images/I/41fa6wgWvhL.jpg',
    title:'title 5',
    author : 'author 5'
  },
  {
    img:'https://m.media-amazon.com/images/I/91bm8DI1FgL._AC_UF1000,1000_QL80_.jpg',
    title:'title 3',
    author : 'author 6'
  }
]





function BookList(){
  return (
    <section className='booklist'>
      {books.map((book,i)=>{
        return <Book {...book} key={book.img}/>
      })}
    </section>
  )
}

const Book = ({img,author,title})=>{
  return (

    <article className='book'>
      <img src={img} alt="" />
      
      <div className='details'>
        <h1>{title}</h1>
      <h5><i>{author}</i></h5>
      </div>
    
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