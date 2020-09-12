import React from 'react'
import styles from './social.module.css';
import {Button, Typography, CardContent, CardActions, Card} from '@material-ui/core'
const SocialItem = ({
    Icon,
    title,
    mixed,
    red,
    blue,
    item
}) => {
    return (
        <Card className={styles.socialItem}>
            <CardContent>
                <Typography className={styles.socialItem__typo} variant="h4" component="h2">{title}</Typography>
                <Icon
                    className={`${styles.socialItem__Logo} ${mixed && styles.mixedInsta} ${blue && styles.blueFacebook} ${red && styles.redInsta}`}/>
                <div className={styles.desc}>
                    {item !== undefined && item.map(itm => <li>{itm.price} {itm.desc}</li>)}
                </div>
            </CardContent>
            <CardActions className="">
                <Button>Order</Button>
            </CardActions>
        </Card>
    )
}

export default SocialItem
