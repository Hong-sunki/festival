import './App.css';
import Header from './header/header';
import Footer from './footer/footer';
import Main from './component/main';
// import Json from './fstvdata.json';
import { useEffect, useState } from 'react';





function App({festival}) {
  // const [info, setInfo] = useState([]);
  const [ftv, setFtv] = useState([]);
  const [bottomDe, setBottomDe] = useState(0);
  const [clickItem, setClickItem] = useState();


  const detail = (item) => {
        bottomDe === 0 ? setBottomDe(bottomDe +1) : setBottomDe(0)
        
        setClickItem(item) 
        
    } 

    useEffect( () => {
      festival
      .festivalData()
      .then(ftv => setFtv(ftv));
      
    }
      ,[])

     
 
  return (
    <>
      <Header />
      <Main ftv={ftv} onClickDetail={detail} bottomDe={bottomDe} clickItem={clickItem} />
      <Footer />
    </>
  );
}

export default App;
