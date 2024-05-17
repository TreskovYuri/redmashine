import Image from 'next/image'

const Footer = () => {
    return (
        <div className="footer_container">
            <div className="column">
                <div className="footer_logo_container">
                    <Image width={10} height={10} unoptimized src="assets/logo.svg" alt="Логотип сайта" className="ffooter_logo" />
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
                    <a href=""><Image width={10} height={10} unoptimized src="assets/vk.svg" alt="vk" /></a>
                    <a href=""><Image width={10} height={10} unoptimized src="assets/viber.svg" alt="viber" /></a>
                </div>
                <div className="footer_link_container">
                    <a href="">2023 © Официальный сайт «Красная Машина Юниор»</a>
                    <a href="">Политика конфиденциальности</a>
                </div>
            </div>

            <div className="footer_nav_container">
                <a href="#"><span>о турнире</span></a>
                <a href="#"><span>участники</span></a>
                <a href="#"><span>арена</span></a>
                <a href="#"><span>продвижение</span></a>
                <a href="#"><span>расписание</span></a>
                <a href="#"><span>турнирная таблица</span></a>
                <a href="#"><span>гости турнира</span></a>
            </div>
        </div>
    )
}

export default Footer