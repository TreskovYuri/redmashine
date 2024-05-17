import Image from 'next/image'

const PleersCards = () => {
    return (
        <div className="pleers_cards_container" id='guest'>
            <div className="pleers_card">
                <Image width={10} height={10} unoptimized src="assets/pleers_card_red.svg" alt="" className="pleers_card_red" sizes='100'/>
                <Image width={10} height={10} unoptimized src="assets/logo1.svg" alt="Логотип команды" className="pleers_card_logo" sizes='100'/>
                <div className="pleers_card_text_container">
                    <h2 className="pleers_card_header">СКА-стрельна</h2>
                    <span className="pleers_card_city">Санкт-петербург</span>
                </div>
            </div>
            <div className="pleers_card">
                <Image width={10} height={10} unoptimized src="assets/pleers_card_red.svg" alt="" className="pleers_card_red" sizes='100'/>
                <Image width={10} height={10} unoptimized src="assets/logo2.svg" alt="Логотип команды" className="pleers_card_logo" sizes='100'/>
                <div className="pleers_card_text_container">
                    <h2 className="pleers_card_header">АК Барс</h2>
                    <span className="pleers_card_city">казань</span>
                </div>
            </div>
            <div className="pleers_card">
                <Image width={10} height={10} unoptimized src="assets/pleers_card_red.svg" alt="" className="pleers_card_red" sizes='100'/>
                <Image width={10} height={10} unoptimized src="assets/logo3.svg" alt="Логотип команды" className="pleers_card_logo"  sizes='100'/>
                <div className="pleers_card_text_container">
                    <h2 className="pleers_card_header">Лада</h2>
                    <span className="pleers_card_city">тольятти</span>
                </div>
            </div>
            <div className="pleers_card">
                <Image width={10} height={10} unoptimized src="assets/pleers_card_red.svg" alt="" className="pleers_card_red" sizes='100'/>
                <Image width={10} height={10} unoptimized src="assets/logo4.svg" alt="Логотип команды" className="pleers_card_logo" sizes='100'/>
                <div className="pleers_card_text_container">
                    <h2 className="pleers_card_header">Армия ска</h2>
                    <span className="pleers_card_city">Санкт-петербург</span>
                </div>
            </div>
            <div className="pleers_card">
                <Image width={10} height={10} unoptimized src="assets/pleers_card_red.svg" alt="" className="pleers_card_red" sizes='100'/>
                <Image width={10} height={10} unoptimized src="assets/logo5.svg" alt="Логотип команды" className="pleers_card_logo" sizes='100'/>
                <div className="pleers_card_text_container">
                    <h2 className="pleers_card_header">Красная машина юниор</h2>
                    <span className="pleers_card_city">Москва</span>
                </div>
            </div>
            <div className="pleers_card">
                <Image width={10} height={10} unoptimized src="assets/pleers_card_red.svg" alt="" className="pleers_card_red" sizes='100'/>
                <Image width={10} height={10} unoptimized src="assets/logo6.svg" alt="Логотип команды" className="pleers_card_logo"  sizes='100'/>
                <div className="pleers_card_text_container">
                    <h2 className="pleers_card_header">динамо</h2>
                    <span className="pleers_card_city">Москва</span>
                </div>
            </div>
            <div className="pleers_card">
                <Image width={10} height={10} unoptimized src="assets/pleers_card_red.svg" alt="" className="pleers_card_red" sizes='100'/>
                <Image width={10} height={10} unoptimized src="assets/logo7.svg" alt="Логотип команды" className="pleers_card_logo"  sizes='100'/>
                <div className="pleers_card_text_container">
                    <h2 className="pleers_card_header">Школа им. руслана салея</h2>
                    <span className="pleers_card_city">минск</span>
                </div>
            </div>
            <div className="pleers_card">
                <Image width={10} height={10} unoptimized src="assets/pleers_card_red.svg" alt="" className="pleers_card_red" sizes='100'/>
                <Image width={10} height={10} unoptimized src="assets/logo8.svg" alt="Логотип команды" className="pleers_card_logo"  sizes='100'/>
                <div className="pleers_card_text_container">
                    <h2 className="pleers_card_header">Металлург</h2>
                    <span className="pleers_card_city">магнитогорск</span>
                </div>
            </div>
        </div>
    )
}

export default PleersCards