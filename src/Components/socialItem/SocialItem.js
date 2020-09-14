import React from 'react'
import styles from './social.module.css';
import {Button, Typography, CardContent, CardActions, Card} from '@material-ui/core'
const SocialItem = ({
    Icon,
    title,
    mixed,
    red,
    blue,
    twitterBlue,
    Soundcloud,
    item1,
    item2,
    item3,
    title1,
    title2,
    title3,
    black
}) => {
    return (
        <Card className={styles.socialItem}>
            <CardContent>
                <Typography className={styles.socialItem__typo} variant="h4" component="h2">{title}</Typography>
                <Icon
                    className={`${styles.socialItem__Logo} ${mixed && styles.mixedInsta} ${blue && styles.blueFacebook} ${twitterBlue && styles.twitterBlue} ${red && styles.redInsta} ${black && styles.black} ${Soundcloud && styles.Soundcloud}`}/>

                <div className={styles.desc}>
                    <h6>{title1}</h6>
                    {
                        item1 !== undefined && item1.map(
                            itm => <li><strong>{itm.price}</strong> 
                                {itm.desc}</li>
                        )
                    }
                    <h6>{title2}</h6>
                    {
                        item2 !== undefined && item2.map(
                            itm => <li><strong>{itm.price}</strong> 
                                {itm.desc}</li>
                        )
                    }
                     <h6>{title3}</h6>
                    {
                        item3 !== undefined && item3.map(
                            itm => <li><strong>{itm.price}</strong> {itm.desc}</li>
                        )
                    }
                </div>
            </CardContent>
            <CardActions  className={`${styles.card_btn} ${mixed && styles.card1} ${blue && styles.card2} ${red && styles.card3} ${black && styles.card4}  ${twitterBlue && styles.card5} ${Soundcloud && styles.card6}`}>
                <Button>Order</Button>
            </CardActions>
        </Card>
    )
}

export default SocialItem
