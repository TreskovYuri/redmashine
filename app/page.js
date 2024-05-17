'use client'
import Image from 'next/image'



import './index.css'
import Header from './header';
import Main from './main';
import About from './about';
import PleersCards from './pleersCard';
import Arena from './arena';
import Schedule from './schedule';
import Footer from './footer';
import Pleers from './pleers';
import Modal from './modal';
import { useState } from 'react';

export default function Home() {
  const [modal,setModal] = useState(false)
  return (
    <div className="root">
        {modal&&<Modal setModal={setModal}/>}
        <Header/>
        <Main/>
        <About/>
        <Pleers/>
        <PleersCards/>
        <Arena/>
        <Schedule setModal={setModal}/>
        <Footer/>

    </div>
  );
}
