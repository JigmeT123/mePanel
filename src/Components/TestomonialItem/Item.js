import React from 'react'
import {Paper} from '@material-ui/core';
import styles from './item.module.css';

const Item = (props) => {
    return (
        <Paper className={styles.item}>
           
            <p>{props.item.description}</p>
            <h2>{props.item.name}</h2>
        </Paper>
    )
}

export default Item
