import React, {useState, useEffect} from 'react'
import styles from './header.module.css';
import logo from '../../assets/MP.svg';
import {Link} from 'react-router-dom';

const Header = () => {
    const [handleShow, setHandleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=> {
            if(window.scrollY > 350){
                setHandleShow(true)
            }else{
                setHandleShow(false)
            }
        })
        return () => {
            window.removeEventListener('scroll');
        };
    }, [])
    return (
        <div className={`${styles.header} ${handleShow && styles.header__scrolled}`}>
            <Link to="/">
            <img className={styles.header__logo} src={logo} alt="Company Logo" />
            </Link>
            
            <nav className={styles.header__navigation}>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/services"><li>Services</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header
