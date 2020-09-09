import React from 'react'
import styles from './home.module.css'
import {Button} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import Item from '../TestomonialItem/Item';
import PartnerCompany from '../partnerCompany/PartnerCompany';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        }, {
            name: "Random Name #2",
            description: "Hello World!"
        }, {
            name: "Random Name #3",
            description: "Helllloo world, I am hello world y'alll"
        }
    ]
    return (
        <div className={styles.home}>
            <div className={styles.home__imgContainer}>
                <div className={styles.home__info}>
                    <h1>GET AUDIENCE, GROW BIG!</h1>
                    <h3>DIGITAL MARKETING & PROMOTION</h3>
                    <Button>Let's Talk Digital</Button>
                </div>
                <div className={styles.home__diagonal}></div>
            </div>
            <div className={styles.home__content}>

                <h1>DIGITAL MARKETING & PROMOTION AGENCY</h1>
                <div className={styles.home__contentP}>
                    <p>Worldwide we help businesses gain more leads and brand awareness by
                        reassessing and improving their online presence. We provide unique web design
                        combined with an extensive search engine optimization, online advertising and
                        content strategy to ensure business growth.</p>
                </div>

            </div>
            <div className={styles.testimonial}>
                <Carousel animation="slide" navButtonsAlwaysVisible={true}>
                    {items.map((item, i) => <Item key={i} item={item}/>)}
                </Carousel>
            </div>
            <div className={styles.home__partner}>
                <PartnerCompany />
                <PartnerCompany />
                <PartnerCompany />
            </div>

            <div className={styles.home_contact}>
                <h1>READY TO GROW YOUR DIGITAL PRESENCE?</h1>
                <Button>Contact Us</Button>
            </div>
            <div className={styles.home__footer}>
                <div className={styles.footer1}>
                    <h5>Contact</h5>
                    <p>Bhutan, Thimphu</p>
                    <p>Phone Number: 173498432</p>
                    <p>Gmail: dummy123@gmail.com2</p>
                    <p>facebook: jigme2</p>
                </div>
                <div className={styles.footer1}>
                    <p>About us</p>
                    <p>Contact us</p>
                    <p>Service</p>
                </div>
                <div className={styles.footer1}></div>
            </div>

        </div>
    )
}

export default Home
