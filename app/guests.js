import Image from 'next/image'
import css from './guests.module.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const Guests = () => {
    const lst = [
    {
        "img":<Image src='assets/guest1.png' unoptimized sizes='100' width={200} height={200} className={css.guest} />,
        "name":"Виктор Объедков",
        "team":"«Хоккейная империя»"
    },
    {
        "img":<Image src='assets/guest2.png' unoptimized sizes='100' width={200} height={200} className={css.guest}/>,
        "name":"Иван Трегубов",
        "team":"«Всё хОКкей»"
    },
    {
        "img":<Image src='assets/guest3.png' unoptimized sizes='100' width={200} height={200} className={css.guest} />,
        "name":"Юлия Ковалёва",
        "team":""
    },
    {
        "img":<Image src='assets/guest4.png' unoptimized sizes='100' width={200} height={200} className={css.guest} />,
        "name":"Хоккей Стигг",
        "team":""
    },
    {
        "img":<Image src='assets/guest5.png' unoptimized sizes='100' width={200} height={200} className={css.guest} />,
        "name":"Илья Винокуров",
        "team":"IVhockey"
    },
    {
        "img":<Image src='assets/guest6.png' unoptimized sizes='100' width={200} height={200} className={css.guest} />,
        "name":"Лысенков Павел",
        "team":""
    },
    {
        "img":<Image src='assets/guest7.png' unoptimized sizes='100' width={200} height={200} className={css.guest} />,
        "name":"Серебрков Никита",
        "team":"Хоккеист ХК «СКА»"
    }]
    return (
        <div className={css.container} id='guests'>

            <div className={css.slider}>
                <AliceCarousel  autoWidth infinite  autoPlayStrategy='default' animationEasingFunction='linear' >
                    {
                        lst.map(e => (
                            <div key={e} className={css.sliderCard}>
                                {e.img}
                                <h2 className={css.cardHeader}>{e.name}</h2>
                                {e.team &&
                                    <span className={css.cardHeader1}>{e.team}</span>
                                }
                                
                                </div>
                        ))
                    }

                </AliceCarousel>
            </div>
            <Image src='assets/guests_header.svg' unoptimized sizes='100' width={200} height={200} className={css.header} />
        </div>
    )
}

export default Guests