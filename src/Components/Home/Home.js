import React from 'react'
import styles from './home.module.css'
import {Button} from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import Item from '../TestomonialItem/Item';
import PartnerCompany from '../partnerCompany/PartnerCompany';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Home = () => {
    const email = "jpdorji007@gmail.com";
    const handleMailclick = e => {
        window.open(
            `mailto:${email}?subject=enquiries`
        );
    }
    let items = [
        {
            name: "Tshering Dorji",
            description: "In the begining of 2020 I started with BhutanMePanel in order to raise brand a" +
                    "wareness and increase sales via Social Media Advertising. Since then I have ex" +
                    "perienced a noticeable growth within my target audience. The communication is " +
                    "quick and professional and during the monthly analyses due consideration is al" +
                    "ways given to my personal wishes and ideas. I would certainly recommend Bhutan" +
                    "MePanel to any company that wants to get more out of their Social Media campai" +
                    "gns!"
        }, {
            name: "Jigme Tshering",
            description: "I am really glad to BhutanMePanel , because of which I was able to gain a lot " +
                    "of follower in my Instagram and my business is doing great, Thank you BhutanMe" +
                    "Panel"
        }, {
            name: "Anonymous",
            description: "BhutanMePanel is a great company to work with. I was struggling to get enough " +
                    "traffic in my facebook page, but because of the service they provide I am fina" +
                    "lly able to get attention. Thank you Bhutan Me paNel and I recommend other you" +
                    "ng startup or artist to take this service as it is definitly worth it."
        }
    ]
    return (
        <div className={styles.home}>
            <div className={styles.home__imgContainer}>
                <div className={styles.home__info}>
                    <h1>GET AUDIENCE, GROW BIG!</h1>
                    <h3>DIGITAL MARKETING & PROMOTION</h3>
                    <Link to="/services"><Button>Let's Talk Digital</Button></Link>
                </div>
                <div className={styles.home__diagonal}></div>
            </div>
            <div className={styles.home__content}>

                <h1>DIGITAL MARKETING & PROMOTION AGENCY</h1>
                <div className={styles.home__contentP}>
                    <p>
                        <span>(Social Media Marketing)</span>
                        is the use of social media platforms such as Instagram, Facebook, Twitter,
                        Youtube and many more to promote yourself or your company. If you are looking
                        for a way to
                        <span> boost </span>
                        your online presence, then your best choice is
                        <span> BhutanMePanel </span>
                        where we offer services to help you boost your online presence across all social
                        media platforms at the cheapest prices.</p>
                </div>

            </div>
            <div className={styles.testimonial}>
                <h1>TESTIMONIALS & FEATURED CLIENTS</h1>
                <Carousel animation="slide" navButtonsAlwaysVisible={true}>
                    {items.map((item, i) => <Item key={i} item={item}/>)}
                </Carousel>
            </div>
           

            <div className={styles.home_contact}>
                <h1>READY TO GROW YOUR DIGITAL PRESENCE?</h1>
                <Button onClick={handleMailclick}>Contact Us</Button>
            </div>
           
        </div>
    )
}

export default Home
