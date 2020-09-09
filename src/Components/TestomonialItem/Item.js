import React from 'react'
import {Paper, Button} from '@material-ui/core';
import styles from './item.module.css';

const Item = (props) => {
    return (
        <Paper className={styles.item}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
        </Paper>
    )
}

export default Item
