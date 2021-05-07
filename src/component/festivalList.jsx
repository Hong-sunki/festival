import React from 'react';
import styles from './festivalList.module.css';

const FestivalList = ({item, onClickDetail}) => {
    const {fstvlNm, auspcInstt, fstvlStartDate, fstvlEndDate, phoneNumber} = item;
    

    return (
            
            <li className={styles.list} onClick={() => onClickDetail(item)} >
                <p className={styles.fstvname}>{fstvlNm}</p>
                <img className={styles.img} src="images/port1.png" alt=""/>
                <p className={styles.date}>{fstvlStartDate} ~ {fstvlEndDate}</p>
                <p className={styles.area}>{auspcInstt}</p>
                <p className={styles.tel}>{phoneNumber}</p>
            </li>
            
    );
};

export default FestivalList;