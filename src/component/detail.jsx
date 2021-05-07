import React, { useEffect, useRef, useState } from 'react';
import styles from './detail.module.css';


const Detail = ({clickItem}) => {
    const detailRef = useRef();
    
    
    
    useEffect( () => {
       //detailRef.current.focus()
       const scrollY = detailRef.current.getBoundingClientRect().top.toFixed(0)
        
       console.log(scrollY)
       const scrollDown = () =>  window.scrollTo(0, scrollY)
       setTimeout(scrollDown, 500)
       
    }
    ,[]); 
    
    
    return ( 
        <div ref={detailRef} className={styles.bottomDetail}> 
            <img className={styles.img} src="images/port1.png" alt=""/>
            <div className={styles.txtbox}>
                <h2>{clickItem.fstvlNm}</h2>
                <p>장소 : {clickItem.opar}</p>
                <p>축제기간 : {clickItem.fstvlStartDate} ~ {clickItem.fstvlEndDate}</p>
                <p>{clickItem.fstvlCo}</p>
                <p>도로명주소 : {clickItem.rdnmadr}</p>
                <p>지번주소 : {clickItem.lnmadr}</p>
                <p> 전화번호 : {clickItem.phoneNumber}</p>
            </div>
        </div>
    );
};

export default Detail;