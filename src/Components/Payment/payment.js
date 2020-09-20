import React, {useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import styles from './payment.module.css';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
const Payment = () => {
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [categories, setCategories] = useState("Instagram");
    const [phoneNumber, setPhoneNumber] = useState("");
    const email = "jpdorji007@gmail.com"
    const [list, setList] = useState([
        "Instagram",
        "Facebook",
        "Youtube",
        "Tiktok",
        "Twitter",
        "SoundCloud",
        "Netflix",
        "Amazon Prime Video",
        "Spotify"
    ])
     const [instaList, setInstaList] = useState([
        "Premium Followers",
        "Likes",
        "Video view/IGTV Views",
    ])
    const [facebookList, setFacebookList] = useState([
        "Page Likes",
        "Post Likes",
        "Video view",
    ])
    const [youtubeList, setYoutubeList] = useState([
        "Subscriber",
        "RAV* Video Views",
        "Video likes",
    ])
    const [tiktokList, setTiktokList] = useState([
        "premium fans",
        "Hearts",
        "Real view",
    ])
    const [twitterList, setTwitterList] = useState([
        "Followers",
        "Likes",
        "Video view",
    ])
    const [soundList, setSoundList] = useState([
        "Sond Plays",
        "Song Likes",
        "Songs Downloads",
    ])
    const [netflixPremiumList, setNetflixPremiumList] = useState([
        "4 screen one month subscription",
       
    ]);
    const [amazonPrimeVideo, setAmazonPrimeVideo] = useState([
        "one month subscription",
       
    ])
    const handleClick = e => {
        e.preventDefault();
        window.open(
            `mailto:${email}?subject=MakingOrder&body=Name: ${secondName}|| Service: ${categories}|| Type: ${type}|| Count:${count} ${type}|| Username: ${firstName}|| Phone Number: ${phoneNumber}`
        );
    }
    const [open, setOpen] = useState(false);
    const [check, setCheck] = useState(false)
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const changePhoneNumber = e => {
        setPhoneNumber(e.target.value)
    }

    const [type, setType] = useState("Followers");
   
    const handleCheck = e => {
        if(check){
            setCheck(false)
        }else{
            setCheck(true);
        }
       
        
    }
    const [count, setCount] = useState("");

    const changeHandler = (e) => {
        const category = e.target.value;
        setCategories(category);
    };

    const changeCount = e => {
        setCount(e.target.value);
    }

    const changeHandler1 = (e) => {
        const categorys = e.target.value;
        setType(categorys)
    }

    const changeHandleFirstName = (e) => {
        setFirstName(e.target.value);
    };
    const changeHandleSecondName = (e) => {
        setSecondName(e.target.value);
    };
    return (
        <div className={styles.payment}>
            <form>
                <div className={styles.formStyle}>
                    <label for="exampleInputEmail1">Name</label>
                    <input
                        value={secondName}
                        onChange={changeHandleSecondName}
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Your Name"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className={styles.formStyle} >
                    <label for="exampleInputEmail1">Type:</label>

                    <select class="form-control form-control-lg" onChange={changeHandler}>
                        <option>Categories</option>
                        {list.map((category) => (<option value={category}>{category}</option>))}
                    </select>
                </div>

                <div className={styles.formStyle}>
                    <label for="exampleInputEmail1">Services:</label>
                    <select class="form-control form-control-lg" onChange={changeHandler1}>
                    <option>Services</option>
                        
                        {
                           (categories === "Instagram" && instaList.map((category) => (<option value={category}>{category}</option>))) || (categories==="Facebook" && facebookList.map((category) => (<option value={category}>{category}</option>))) || (categories === "Youtube" && youtubeList.map((category) => (<option value={category}>{category}</option>))) || (categories === "Tiktok" && tiktokList.map((category) => (<option value={category}>{category}</option>))) || (categories==="Twitter" && twitterList.map((category) => (<option value={category}>{category}</option>))) || (categories === "SoundCloud" && soundList.map((category) => (<option value={category}>{category}</option>))) || (categories === "Netflix" && netflixPremiumList.map((category) => (<option value={category}>{category}</option>))) || (categories === "Amazon Prime Video" && amazonPrimeVideo.map((category) => (<option value={category}>{category}</option>))) || (categories === "Spotify" && amazonPrimeVideo.map((category) => (<option value={category}>{category}</option>)))
                        }
                    </select>
                </div>

                <div className={styles.formStyle}>
                    <label for="exampleInputPassword1">How Many {type}</label>
                    <input
                        value={count}
                        onChange={changeCount}
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="count"/>
                </div>
                <div className={styles.formStyle}>
                    <label for="exampleInputPassword1">User Name</label>
                    <input
                        value={firstName}
                        onChange={changeHandleFirstName}
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="User name"/>
                    <small id="emailHelp" class="form-text text-muted">Please make sure to give a correct username and make your account public.</small>
                </div>
                <div className={styles.formStyle}>
                    <label for="exampleInputPassword1">Phone Number</label>
                    <input
                        value={phoneNumber}
                        onChange={changePhoneNumber}
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="+975"/>
                    <small id="emailHelp" class="form-text text-muted">
                        We will never share your personal details.</small>
                </div>
                <div class={styles.formStyle2}>
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" onChange={handleCheck}/>
                    <label class="form-check-label" for="exampleCheck1">I agree to the
                        <Link to='/terms'> terms and condition.</Link>
                    </label>
                </div>

                <Button className={styles.btn2} onClick={check && handleClickOpen}>Open</Button>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title">
                    <DialogTitle id="responsive-dialog-title">{"IMPORTANT!"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please make a payment through
                            <strong> MBOB </strong>
                            and then click the order now button to send us the mail:
                            <br/><br/>
                            BOB Account Number:
                            <strong>
                                200901473</strong>
                                <p>Steps to add funds through Bank of Bhutan</p>
                                <p>1.<strong>200901473</strong> 👈 copy this account number </p>
                                <p>2.Paste it on your MBoB/Mpay/eTeeru and transfer amount.</p>
                                
                                <p>3. After the payment Click on the <strong>Order Now Button</strong></p>
                                <p>4.You will be redirected to your gmail , send the mail without altering the infromation.</p>
                                <p>5.If you don't have gmail/email app in your phone , just confirm with us through instagram after paying the money</p>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus="autoFocus" onClick={handleClose} className={styles.btn1}>
                            Disagree
                        </Button>
                        <Button onClick={handleClick} className={styles.btn}>
                            Order Now
                        </Button>
                    </DialogActions>
                </Dialog>

            </form>
        </div>
    )
}

export default Payment 