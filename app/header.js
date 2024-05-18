import React, { useState } from 'react'
import { Link } from 'react-scroll';
import Image from 'next/image'
import {motion} from 'framer-motion'

const Header = () => {
    const [modal, setModal] = useState(false)
  return (
    <div className="header_container">
    <div className="logo_container">
        <Link to={'header'} spy={true} smooth={true} offset={-50} duration={1500}><Image  src="assets/logo.svg" alt="Логотип сайта" className="logo" width={10} height={10} unoptimized sizes='100'/></Link>
        <div className="logo_header_container">
            <h2 className="logo_header">КУБОК "ЮНИСОН" СРЕДИ ДЕТСКИХ ХОККЕЙНЫХ КОМАНД 2014 Г.</h2>
            <div className="logo_header2_container">
                <div className="logo_header2"><span>18-19 МАЯ</span>/<span>СК «ХОККЕЙНЫЙ ГОРОД КРАСНОГОРСК»</span>
                </div>
            </div>
        </div>
    </div>
    <span className='burgerTrigger' onClick={()=>setModal(true)}>|||</span>

    <div className={modal? `${"nav_container"} ${'nav_active'}`:"nav_container"} id='header'>
    <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.4}} className='x' onClick={()=>setModal(false)}>x</motion.span>
        <Link to={'about'} spy={true} smooth={true} offset={-50} duration={1500} className='nav_link' onClick={()=>setModal(false)}>о турнире</Link>
        <Link to={'pleers'} spy={true} smooth={true} offset={0} duration={1500} className='nav_link' onClick={()=>setModal(false)}>участники</Link>
        <Link to={'arena'} spy={true} smooth={true} offset={0} duration={1500} className='nav_link' onClick={()=>setModal(false)}>арена</Link>
        <Link to={'header'} spy={true} smooth={true} offset={0} duration={1500} className='nav_link' onClick={()=>setModal(false)}>продвижение</Link>
        <Link to={'schedule'} spy={true} smooth={true} offset={0} duration={1500} className='nav_link' onClick={()=>setModal(false)}>расписание</Link>
        <Link to={'table'} spy={true} smooth={true} offset={0} duration={1500} className='nav_link' onClick={()=>setModal(false)}>турнирная таблица</Link>
        <Link to={'guests'} spy={true} smooth={true} offset={0} duration={1500} className='nav_link' onClick={()=>setModal(false)}>гости турнира</Link>
    </div>
</div>
  )
}

export default Header