import React from 'react'
import styles from './draw.module.css';
const DrawerToggle = ({click}) => {
    return (
       <button className={styles.toggleBtn} onClick={click}>
           <div className={styles.toogle_button_line}/>
           <div className={styles.toogle_button_line}/>
           <div className={styles.toogle_button_line}/>
       </button>
    )
}

export default DrawerToggle
