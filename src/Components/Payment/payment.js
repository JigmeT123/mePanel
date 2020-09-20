import React, {useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import styles from './payment.module.css';
import {
    FormControl,
    Input,
    InputLabel,
    Select,
    MenuItem,
    Button,
    FormHelperText
} from '@material-ui/core';
import {Link} from 'react-router-dom';
const Payment = () => {
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [categories, setCategories] = useState("Instagram");
    const [phoneNumber, setPhoneNumber] = useState("");
    const email = "jigmetashi02@gmail.com"
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
    const handleClick = e => {
        e.preventDefault();
        window.open(
            `mailto:${email}?subject=MakingOrder&body=Name: ${secondName}|| Service: ${categories}|| Type: ${type}|| Count: ${type} ${count}|| Username: ${firstName}|| Phone Number: ${phoneNumber}`
        );
    }
    const [open, setOpen] = useState(false);
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
    const [listType, setListType] = useState([
        "Followers",
        "Likes",
        "Premium accounts",
        "subscriber",
        "Views",
        "SoundCloud plays",
        "Soundcloud Downloads"
    ])
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
            <form >

                <FormControl className={styles.formStyle}>
                    <InputLabel htmlFor="my-input">Name</InputLabel>
                    <Input
                        value={secondName}
                        onChange={changeHandleSecondName}
                        type="text"
                        id="my-input"
                        aria-describedby="my-helper-text"/>
                </FormControl>

                <FormControl className={styles.formStyle}>
                    <Select variant="outlined" value={categories} onChange={changeHandler}>
                        {list.map((category) => (<MenuItem value={category}>{category}</MenuItem>))}
                    </Select>
                </FormControl>

                <FormControl className={styles.formStyle}>
                    <Select variant="outlined" value={type} onChange={changeHandler1}>
                        {listType.map((category) => (<MenuItem value={category}>{category}</MenuItem>))}
                    </Select>
                </FormControl>

                <FormControl className={styles.formStyle}>
                    <InputLabel htmlFor="my-input">
                        How many {type}</InputLabel>
                    <Input
                        value={count}
                        onChange={changeCount}
                        type="text"
                        id="my-input"
                        aria-describedby="my-helper-text"/>
                </FormControl>
                <FormControl className={styles.formStyle}>
                    <InputLabel htmlFor="my-input">User Name</InputLabel>
                    <Input
                        value={firstName}
                        onChange={changeHandleFirstName}
                        type="text"
                        id="my-input"
                        aria-describedby="my-helper-text"/>
                    <FormHelperText id="my-helper-text">
                        Please make sure to give a correct username and make your account public.</FormHelperText>
                </FormControl>
                <FormControl className={styles.formStyle}>
                    <InputLabel htmlFor="my-input">Phone Number</InputLabel>
                    <Input
                        value={phoneNumber}
                        onChange={changePhoneNumber}
                        type="text"
                        id="my-input"
                        aria-describedby="my-helper-text"/>
                    <FormHelperText id="my-helper-text">
                        We will never share your personal details</FormHelperText>
                </FormControl>
                <p>By clicking on the button below you agree to our
                    <Link to='/terms'> terms and condition.</Link>
                </p>
                <Button className={styles.btn} onClick={handleClickOpen}>
                    Open
                </Button>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title">
                    <DialogTitle id="responsive-dialog-title">{"IMPORTANT!"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please make a payment through <strong>MBOB</strong> and then click the order now bottom to send us the
                            mail:
                            <br/><br/>
                            BOB Account Number:
                            <strong> 200901473</strong>
                            <br/><br/>
                            Or State Bank of India:
                            <strong> 38924158570</strong><br/><br/>
                            <strong>IFSC CODE</strong>
                            <br/><br/>
                            <strong>SBIN0001269</strong>
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