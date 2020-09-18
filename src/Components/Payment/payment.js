import React, {useState} from 'react';
import styles from './payment.module.css';
import {
    FormControl,
    Input,
    InputLabel,
    Select,
    MenuItem,
    Button
} from '@material-ui/core';

const Payment = () => {
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [categories, setCategories] = useState("Instagram");
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
            `mailto:${email}?subject=MakingOrder&body=Name: ${firstName} ${secondName}\n\n\n\n\n Service: ${categories}\n Type: ${type}\n Count: ${type} ${count}`
        );
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
                    <InputLabel htmlFor="my-input">First Name</InputLabel>
                    <Input
                        value={firstName}
                        onChange={changeHandleFirstName}
                        type="text"
                        id="my-input"
                        aria-describedby="my-helper-text"/>
                </FormControl>

                <FormControl className={styles.formStyle}>
                    <InputLabel htmlFor="my-input">Last Name</InputLabel>
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

                <Button onClick={handleClick} className={styles.btn}>
                    Order Now
                </Button>
            </form>
        </div>
    )
}

export default Payment
