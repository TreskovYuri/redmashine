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

export default function Home() {
  return (
    <div className="root">
        <Header/>
        <Main/>
        <About/>
        <PleersCards/>
        <Arena/>
        <Schedule/>
        <Footer/>

    </div>
  );
}