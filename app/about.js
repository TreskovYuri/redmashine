import Image from 'next/image'

const About = () => {
    return (
        <div className="about_container" id='about'>
            <Image width={10} height={10} unoptimized src="/assets/about_bacground1.png" alt="Изображение хоккеиста" className="about_bacground_image" />
            <div className="about_text_container">
                <h2 className="about_text_header">[о турнире]</h2>
                <span className="about_text_text">18 и 19 мая в «Хоккейном городе Красногорск» по адресу: Красногорск, ул.
                    Ахматовой, 26,
                    микрорайон Опалиха, пройдет традиционный международный турнир, ставший лауреатом премии ФХР
                    «Герои хоккея»</span>
                <span className="about_text_text">За главный трофей «Кубок Юнисон» поборются восемь сильнейших детских
                    команд 2014 года рождения из
                    России и ближнего зарубежья, в том числе и команды академии СКА, которая продолжает развиваться
                    при поддержке ПАО «Газпром».</span>
            </div>
        </div>
    )
}

export default About