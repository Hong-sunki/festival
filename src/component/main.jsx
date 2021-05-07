import React, { useRef, useState } from 'react';
import Detail from './detail';
import FestivalList from './festivalList';
import styles from './main.module.css';

const Main = ({onClickDetail, bottomDe, clickItem, ftv}) => {
    const [year, setYear] = useState('2021');
    const [mon, setMon] = useState('01');
    const [area, setArea] = useState('전국');
    const yearRef = useRef();
    const monRef = useRef();
    const areaRef = useRef();
    const yearChange = () => setYear(yearRef.current.value)
    const monChange = () => setMon(monRef.current.value) 
    const areaChange = () => setArea(areaRef.current.value)

    // console.log(year) 
    // console.log(mon)
    // console.log(area)
    // const month = json.map((item)=> item.축제시작일자.split('-')) 
    
    

    return (
        <>
            <div className={styles.selectbox}>
                <select className={styles.left} ref={yearRef} onChange={yearChange}>
                    <option value="2021">2021년</option>
                    <option value="2022">2022년</option>
                </select>
                <select className={styles.middle} ref={monRef} onChange={monChange}>
                    <option value="01">1월</option>
                    <option value="02">2월</option>
                    <option value="03">3월</option>
                    <option value="04">4월</option>
                    <option value="05">5월</option>
                    <option value="06">6월</option>
                    <option value="07">7월</option>
                    <option value="08">8월</option>
                    <option value="09">9월</option>
                    <option value="10">10월</option>
                    <option value="11">11월</option>
                    <option value="12">12월</option>
                </select>
                <select className={styles.right} ref={areaRef} onChange={areaChange}>
                    <option value="전국">전국</option>
                    <option value="서울특별시">서울</option>
                    <option value="인천광역시">인천</option>
                    <option value="대전광역시">대전</option>
                    <option value="대구광역시">대구</option>
                    <option value="광주광역시">광주</option>
                    <option value="부산광역시">부산</option>
                    <option value="울산광역시">울산</option>
                    <option value="세종특별자치시">세종특별자치시</option>
                    <option value="경기도">경기도</option>
                    <option value="강원도">강원도</option>
                    <option value="충청북도">충청북도</option>
                    <option value="충청남도">충청남도</option>
                    <option value="경상북도">경상북도</option>
                    <option value="경상남도">경상남도</option>
                    <option value="전라북도">전라북도</option>
                    <option value="전라남도">전라남도</option>
                    <option value="제주특별자치도">제주도</option>
                </select>
            </div>
            
            {/* <ul className={styles.ulList}>
                {
                    area === '전국' &&
                    ftv.map((item, index)=>  
                            ( (item.fstvlStartDate.match(year) || item.fstvlEndDate.match(year) ) &&  (item.fstvlStartDate.slice(5,7) == String(mon) || item.fstvlEndDate.slice(5,7) == String(mon))) && 
                            <FestivalList key={index} item={item} onClickDetail={onClickDetail} />
                    )
                    
                }
                {
                    area !== '전국' &&
                    ftv.map((item, index)=>  
                            (item.rdnmadr.match(area) && (item.fstvlStartDate.match(year) || item.fstvlEndDate.match(year) ) &&  (item.fstvlStartDate.slice(5,7) == String(mon) || item.fstvlEndDate.slice(5,7) == String(mon))) && 
                            <FestivalList key={index} item={item} onClickDetail={onClickDetail} />
                    )
                }

            </ul>
            {   
                bottomDe === 1 && <Detail clickItem={clickItem} />
            }  */}
        </>
    );
};

export default Main;