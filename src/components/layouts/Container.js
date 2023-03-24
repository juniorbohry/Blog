import React from 'react'
import styles from './Container.module.css'

function Container({customStyle, children}) {
    return( 
        <div style={customStyle} className={styles.container} >
            {children} 
        </div>
    )
}

export default Container