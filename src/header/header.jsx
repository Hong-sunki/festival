import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return (
        <div className={styles.wrap}>
            <h1 className={styles.logo}>logo</h1>
            <ul className={styles.depth1}>
                <li className={styles.depth1Li}>menu1</li>
                <li className={styles.depth1Li}>menu2</li>
                <li className={styles.depth1Li}>menu3</li>
            </ul>
            <div className={styles.login}>login</div>
        </div>
    );
};

export default Header;