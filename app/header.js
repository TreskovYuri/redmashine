import React from 'react'
import { Link } from 'react-scroll';
import Image from 'next/image'

const Header = () => {
  return (
    <div className="header_container">
    <div className="logo_container">
        <Image  src="assets/logo.svg" alt="Логотип сайта" className="logo" width={10} height={10} unoptimized/>
        <div className="logo_header_container">
            <h2 className="logo_header">КУБОК "ЮНИСОН" СРЕДИ ДЕТСКИХ ХОККЕЙНЫХ КОМАНД 2014 Г.</h2>
            <div className="logo_header2_container">
                <div className="logo_header2"><span>18-19 МАЯ</span>/<span>СК «ХОККЕЙНЫЙ ГОРОД КРАСНОГОРСК»</span>
                </div>
            </div>
        </div>
    </div>
    <div className="nav_container">
        <Link to={'about'} spy={true} smooth={true} offset={-50} duration={1500} className='nav_link'>о турнире</Link>
        <Link to={'pleers'} spy={true} smooth={true} offset={0} duration={1500} className='nav_link'>участники</Link>
        <Link to={'arena'} spy={true} smooth={true} offset={0} duration={1500} className='nav_link'>арена</Link>
        <Link to={'schedule'} spy={true} smooth={true} offset={0} duration={1500} className='nav_link'>продвижение</Link>
        <Link to={'schedule'} spy={true} smooth={true} offset={0} duration={1500} className='nav_link'>расписание</Link>
        <Link to={'schedule'} spy={true} smooth={true} offset={0} duration={1500} className='nav_link'>турнирная таблица</Link>
        <Link to={'guest'} spy={true} smooth={true} offset={0} duration={1500} className='nav_link'>гости турнира</Link>
    </div>
</div>
  )
}

export default Header