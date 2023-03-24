import React from 'react';
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import Container from './Container';

function Navbar () {
    return(
        <div className={styles.navbarContainer}>
            <Container>
                <div className={styles.navbar}>
                    <h1>Blog</h1>

                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link to="/">HOME</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/contact">CONTATO</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/partnerships">PARCERIAS</Link>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>  
    )
}

export default Navbar