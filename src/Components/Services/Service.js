import React from 'react';
import styles from './service.module.css';
import SocialItem from '../socialItem/SocialItem';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';
import {Instagram, Facebook, YouTube} from '@material-ui/icons';
const Service = () => {
    let item = {
        data:[
            {
                price: 500,
                desc: "subscribers Nu1100/-"
            },
            {
                price: 1000,
                desc: "subscribers Nu 2200/-"
            },
            {
                price: 2000,
                desc: "subscribers Nu 3400/-"
            },
            {
                price: 3000,
                desc: 'subscribers Nu 4600/-'
            }
        ],
    }
    return (
        <div className={styles.service}>
            <div className={styles.home__imgContainer}>
                <div className={styles.home__info}>
                    <h1>SERVICES</h1>
                    <h3>DIGITAL MARKETING & PROMOTION</h3>
                    <Link to="/service">
                        <Button>Let's Talk Digital</Button>
                    </Link>
                </div>
                <div className={styles.home__diagonal}></div>
            </div>
            <div className={styles.service__content}>
                <SocialItem Icon={Instagram} title="Instagram" mixed item={item.data}/>
                <SocialItem Icon={Facebook} title="Facebook" blue/>
                <SocialItem Icon={YouTube} title="YouTube" red/>
            </div>
        </div>
    )
}
export default Service
