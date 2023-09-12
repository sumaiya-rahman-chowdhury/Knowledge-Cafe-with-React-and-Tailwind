
import './App.css'
import Blogs from './component/Blogs/Blogs'
import BookMark from './component/Bookmarks/BookMark'
import Header from './component/Header/Header'

function App() {
 
  return (
    <>
    <Header></Header>
    <div className='md:flex'>
    <Blogs></Blogs>
    <BookMark></BookMark>
    </div>
    </>
  )
}

export default App
