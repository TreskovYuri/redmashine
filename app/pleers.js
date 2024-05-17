import Image from 'next/image'

const Pleers = () => {
    return (
        <div className="pleers_container" id='pleers'>
            <Image width={10} height={10} unoptimized src="assets/pleers_bacground.png" alt="Карта участников" className="pleers_bacground_image" />
            <div className="pleers_header_container">
                <h2 className="pleers_header">[участники]</h2>
                <span className="pleers_description">БОЛЕЕ 200 УЧАСТНИКОВ ИЗ РАЗНЫХ РЕГИОНОВ РОССИИ и БЛИЖНЕГО
                    ЗАРУБЕЖЬЯ</span>
            </div>
            <div className="pleers_city_container">
                <div className="pleers_city">/<span>Казань</span></div>
                <div className="pleers_city">/<span>Санкт-петербург</span></div>
                <div className="pleers_city">/<span>Москва</span></div>
                <div className="pleers_city">/<span>Тольятти</span></div>
                <div className="pleers_city">/<span>Магнитогорск</span></div>
                <div className="pleers_city">/<span>Минск</span></div>
            </div>
        </div>
    )
}

export default Pleers