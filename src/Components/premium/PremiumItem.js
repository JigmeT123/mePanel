import React from 'react'
import styles from './premium.module.css';
import {Button, Typography, CardContent, CardActions, Card} from '@material-ui/core'
const PremiumItem = ({title, Icon, red, item1, orange, green}) => {
    return (
        <Card className={styles.socialItem}>
        <CardContent>
            <Typography className={styles.socialItem__typo} variant="h4" component="h2">{title}</Typography>
            <Icon
                className={`${styles.socialItem__Logo} ${red && styles.red} ${orange && styles.orange} ${green && styles.green}`}/>

            <div className={styles.desc}>
                <h6><strong>{title}</strong></h6>
                {
                    item1 !== undefined && item1.map(
                        itm => <li><strong>{itm.price}</strong> 
                             {itm.desc}</li>
                    )
                }
            </div>
        </CardContent>
        <CardActions  className={`${styles.card_btn} ${red && styles.card1} ${orange && styles.card2} ${green && styles.card3}`}>
            <Button>Order</Button>
        </CardActions>
    </Card>
    )
}

export default PremiumItem
