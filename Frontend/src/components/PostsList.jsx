import classes from './PostsList.module.css';
import Post from './Post';
import NewPost  from './NewPost';
import Modal from './Modal';
import  { useState, useEffect } from 'react';


function PostList({isPosting, onStopPosting}){
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const response = await fetch('http://localhost:8080/posts')
            const resData = await response.json();
            setPosts(resData.posts);
            setIsFetching(false);
            console.log(resData.posts);
        }

        fetchPosts();
    }, 
    [])     // List of dependency per eseguire la funzione in useEffect
            // Empty means execute once

    function addPostsHandler(postData){
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }
    
    return(
        <>
            {isPosting &&
                <Modal onClose={onStopPosting}>
                    <NewPost onCancel={onStopPosting} onAddPost={addPostsHandler} />
                </Modal>
            }
            {!isFetching && posts.length > 0 &&
                <ul className={classes.posts}>
                    {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
                </ul>
            }
            {!isFetching && posts.length === 0 &&
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2>There are no posts yet!</h2>
                    <p>Starting add someone...</p>
                </div>
            }
            {isFetching && 
                <div style={{textAlign: 'center', color: 'white'}}>
                    <p>Loading posts...</p>
                </div>
            }
        </>
    );
}

export default PostList;