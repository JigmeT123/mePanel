import React from 'react'
import styles from './footer.module.css';
import {Phone, Mail, Instagram} from '@material-ui/icons';
import {Link} from 'react-router-dom';
const Footer = () => {
    return (
        <div className={styles.home__footer}>
                <div className={styles.footer1}>
                    <h5>Contact</h5>
                    <p>Bhutan, Thimphu</p>
                    <a href="tel:+91 9156284399" rel="noopener noreferrer" target="_blank"><Phone/></a>
                    <a href="mailto:jpdorji007@gmail.com" rel="noopener noreferrer" target="_blank"><Mail/></a>
                    <a
                        href="https://www.instagram.com/me_panel/"
                        rel="noopener noreferrer"
                        target="_blank"><Instagram/></a>
                </div>
                <div className={styles.footer2}>
                    <Link to="/about">
                        <p>About us</p>
                    </Link>
                    <Link to="/contact">
                        <p>Contact us</p>
                    </Link>
                    <Link to="/service">
                        <p>Service</p>
                    </Link>
                </div>
            </div>

    )
}

export default Footer
