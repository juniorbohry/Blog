import React from 'react';
import styles from './Posts.module.css'
import { useState, useEffect } from 'react';
import axios from 'axios'
import Comments from './Comments';

function Posts() {
    const [listPosts, setListPosts] = useState([])
    const [selectedPostId, setSelectedPostId] = useState(null);
    
    //Buscar lista de posts
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((resp) => {
            const data = resp.data
            setListPosts(data)
            console.log(data)
        })
        .catch((err) => console.log(err))
    }, [])

    //altera o estado do setSelectedPostId para fazer renderização condicional
    function handlePostClick(postId) {
        if (postId === selectedPostId) {
            setSelectedPostId(null);
        } else {
            setSelectedPostId(postId);
        }
    }

    return(
        <div className={styles.postContainer}>
            <ul className={styles.list}>
                {listPosts.map((post)=>(
                    <li className={styles.item} key={post.id} onClick={() => handlePostClick(post.id)}>
                        <h2>{post.title}</h2>
                        <p>{post.body}.</p>
                        <AuthorInfo userId={post.userId} />

                        {selectedPostId === post.id && (
                            <Comments postId={post.id}/>
                        )}
                    </li>
                ))}  
            </ul> 
        </div>
    )
}

//Busca nome do autor do post
function AuthorInfo({ userId }) {
    const [authorName, setAuthorName] = useState('');
  
    useEffect(() => {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((resp) => {
            const data = resp.data;
            const name = data.name;
            setAuthorName(name);
            console.log(name);
        })
        .catch((err) => console.log(err));
    }, [userId]);
  
    return <p><span className={styles.author}>Autor:</span> {authorName}.</p>;
}

export default Posts
