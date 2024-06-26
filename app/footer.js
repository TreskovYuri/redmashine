import Image from 'next/image'
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className="footer_container">
            <div className="column">
                <div className="footer_logo_container">
                <Link to={'header'} spy={true} smooth={true} offset={-50} duration={1500} className='nav_link' ><Image width={100} height={100} unoptimized src="assets/logo.svg" alt="Логотип сайта" className="footer_logo" sizes='100' /></Link>
                    <div className="logo_footer_container">
                        <h2 className="logo_footer">КУБОК "ЮНИСОН" СРЕДИ ДЕТСКИХ ХОККЕЙНЫХ КОМАНД 2014 Г.</h2>
                        <div className="logo_footer2_container">
                            <div className="logo_footer2"><span>18-19 МАЯ</span>/<span>СК «ХОККЕЙНЫЙ ГОРОД
                                КРАСНОГОРСК»</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_icon_container">
                    <a target='blank' href="https://vk.com/redmachine_junior"><Image width={10} height={10} unoptimized src="assets/vk.svg" alt="vk" /></a>
                    <a target='blank' href="https://t.me/redmachinejunior"><Image width={10} height={10} unoptimized src="assets/viber.svg" alt="viber" /></a>
                </div>
                <div className="footer_link_container">
                    <a >2023 © Официальный сайт «Красная Машина Юниор»</a>
                    <a target='blank' href="https://redmachinejunior.ru/privacy_policy/">Политика конфиденциальности</a>
                </div>
            </div>

            <div className="footer_nav_container">
                <Link to={'about'} spy={true} smooth={true} offset={-50} duration={1500} className='nav_link'>о турнире</Link>
                <Link to={'pleers'} spy={true} smooth={true} offset={0} duration={1500} className='nav_link' >участники</Link>
                <Link to={'arena'} spy={true} smooth={true} offset={0} duration={1500} className='nav_link' >арена</Link>
                <Link to={'header'} spy={true} smooth={true} offset={0} duration={1500} className='nav_link' >продвижение</Link>
                <Link to={'schedule'} spy={true} smooth={true} offset={0} duration={1500} className='nav_link' >расписание</Link>
                <Link to={'table'} spy={true} smooth={true} offset={0} duration={1500} className='nav_link' >турнирная таблица</Link>
                <Link to={'guests'} spy={true} smooth={true} offset={0} duration={1500} className='nav_link' >гости турнира</Link>
            </div>
        </div>
    )
}

export default Footer