import PostList from './components/PostsList.jsx';
import MainHeader from './components/MainHeader';
import { useState } from 'react';

function App() {
  const [ modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHandler(event){
      setModalIsVisible(false);
  }

  function showModalHandler(event){
      setModalIsVisible(true);
  }

  return( 
    <>
        <MainHeader onCreatePost={showModalHandler}/>
        <main>
          <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
        </main>
    </>
  );
    
}

export default App;
