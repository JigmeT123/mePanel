import React from 'react'
import styles from './about.module.css';
import {Button, Card, CardContent} from '@material-ui/core';
import {Link} from 'react-router-dom';
import me from '../../assets/3.jpg'
import Buddha from '../../assets/buddha.jpg';
const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.home__imgContainer}>
                <div className={styles.home__info}>
                    <h1>GET AUDIENCE, GROW BIG!</h1>
                    <h3>DIGITAL MARKETING & PROMOTION</h3>
                    <Link to="/service">
                        <Button>Let's Talk Digital</Button>
                    </Link>
                </div>
                <div className={styles.home__diagonal}></div>
            </div>
            <div className={styles.about__content}>

                <div className={styles.about__content1}>
                    <h1>About Me</h1>
                    <p>We have one mission: help your business grow through effective, and
                        affordable digital marketing. We believe sustainable growth starts with a strong
                        marketing foundation. That is why we help you with your marketing strategy, and
                        building a solid online presence. Once your business has a good marketing
                        foundation, we will help you maintain it with month-to-month services. This way
                        you can spent more time doing what you love, and less worrying about how you are
                        going to get clients.</p>

                </div>
                <div className={styles.about__content2}>
                    <img src={me} alt="My pic"/>
                </div>

            </div>
            <div className={styles.about__quote}>
                <img src={Buddha} alt="quote image" />
                <Card className={styles.quote}>
                    <CardContent>
                    “We have technology, finally, that for the first time in human history allows people to really maintain rich connections with much larger numbers of people.” – Pierre Omidyar
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default About
