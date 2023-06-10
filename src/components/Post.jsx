import classes from './Post.module.css';

function Post(props){   

    return (
    <div className={classes.post}>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.text}>{props.content}</p>
    </div>);
}

export default Post;