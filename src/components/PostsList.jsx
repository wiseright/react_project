import classes from './PostsList.module.css';
import Post from './Post';
import NewPost  from './NewPost';
import Modal from './Modal';
import { useState } from 'react';


function PostList({isPosting, onStopPosting}){
    // The states:
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    
    // The function Handler:
    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value);
    }



    // The variables:
    let modalContent;

    if (isPosting){
        modalContent = (
            <Modal onClose={onStopPosting}>
                <NewPost 
                    onBodyChange={bodyChangeHandler} 
                    onAuthorChange={authorChangeHandler} 
                />
            </Modal>
        );
    }

    return(
        <>
            {modalContent}
            <ul className={classes.posts}>
                <Post author={enteredAuthor} content={enteredBody} />
                <Post author="the worst" content="this is another test"/>
            </ul>
        </>
    );
}

export default PostList;