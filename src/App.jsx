// import Counter from './features/counter/Counter'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import PostsList from './features/posts/PostsList'
import AddPostForm from './features/posts/AddPostForm'
// import './App.css'

function App() {

  return (
    <main className='App'>
      <AddPostForm/>
     <PostsList/>
    </main>
  )
}

export default App
