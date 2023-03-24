import React from 'react';
import styles from './Comments.module.css'
import axios from 'axios'
import { useState, useEffect } from 'react';


function Comments({postId}) {
    const [listComments, setListComments] = useState([])
    
    //Busca os comentários de um post específico
    useEffect(() => {
        if(postId) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                .then((resp) => {
                const data = resp.data
                setListComments(data)
                console.log(data)
            })
            .catch((err) => console.log(err))
        }
    }, [postId])

    //A "tabela" Comentários não possui chave estrangeira da tabela usuários, então usei parte do email como nickname
    function getNickEmail(email) {
        const match = email.match(/^[^@]+/);
        const nickEmail = match ? match[0] : '';
        return nickEmail;
    }

    return(
        <div className={styles.comentsContainer}>
            <ul className={styles.list}>
                {listComments.map((comment)=>(
                    <li className={styles.item} key={comment.id}>
                        <h5>{getNickEmail(comment.email)}</h5>
                        <p>{comment.body}.</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Comments
