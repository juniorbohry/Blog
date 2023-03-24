import React from 'react';
import styles from './Home.module.css'
import Posts from '../layouts/Posts';

function Home() {
    return(
        <div className={styles.homeContainer}>
            <h1>BLOGROLL</h1>
            <Posts />
        </div>
    )
}

export default Home
