import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Schedule = () => {
    const [page, setPage] = useState(false)

    return (
        <div className="schedule_container" id='schedule'>
            <h2 className="schedule_header">[Расписание]</h2>
            <Image width={10} height={10} unoptimized src="assets/schedule_bacground.png" alt="Фоновое изображение" className="schedule_bacground_image" />
            <Image width={10} height={10} unoptimized src="assets/schedule_partners.png" alt="Фоновое изображение" className="schedule_partners_image" />
            <div className="schedule_text_container">
                <div className="schedule_button_container">
                    <div className={!page ? `${"schedule_button"} ${"schedule_button_active"}` : "schedule_button"} onClick={() => setPage(false)}>18 мая</div>
                    <div className={page ? `${"schedule_button"} ${"schedule_button_active"}` : "schedule_button"} onClick={() => setPage(true)}>19 мая</div>
                </div>
                {
                    !page?<Page1/>:<Page2/>
                }
            </div>
        </div>
    )
}

export default Schedule




const Page1 = () => {
    return (
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}}  >
            <div className="schedule_card">
                <div className="schedule_comands">
                    <div className="schedule_time">07:30</div>
                    <Image width={10} height={10} unoptimized src="assets/logo7.svg" alt="Логотип команды" className="schedule_logo" style={{width:"2vw"}} />
                    <span className="schedule_comand_name">Лада</span>
                    <span className="schedule_slesh">/</span>
                    <span className="schedule_comand_name">Металлург</span>
                    <Image width={10} height={10} unoptimized src="assets/logo8.svg" alt="Логотип команды" className="schedule_logo" />
                </div>
                <Link  href={'https://www.youtube.com/watch?v=xkgoERWc9Kw'}><Image width={10} height={10} unoptimized src="assets/translation.png" alt="Иконка трансляции" className="schedule_translation" /></Link>
            </div>
            <div className="schedule_card">
                <div className="schedule_comands">
                    <div className="schedule_time">09:00</div>
                    <Image width={10} height={10} unoptimized src="assets/logo1.svg" alt="Логотип команды" className="schedule_logo" />
                    <span className="schedule_comand_name">СКА-СТРЕЛЬНА</span>
                    <span className="schedule_slesh">/</span>
                    <span className="schedule_comand_name">АК БАРС</span>
                    <Image width={10} height={10} unoptimized src="assets/logo2.svg" alt="Логотип команды" className="schedule_logo" />
                </div>
                <Link  href={'https://www.youtube.com/watch?v=xkgoERWc9Kw'}><Image width={10} height={10} unoptimized src="assets/translation.png" alt="Иконка трансляции" className="schedule_translation" /></Link>
            </div>
            <div className="schedule_card">
                <div className="schedule_comands">
                    <div className="schedule_time">10:30</div>
                    <Image width={10} height={10} unoptimized src="assets/logo7.svg" alt="Логотип команды" className="schedule_logo" style={{width:"2vw"}} />
                    <span className="schedule_comand_name">ЛАДА</span>
                    <span className="schedule_slesh">/</span>
                    <span className="schedule_comand_name">АРМИЯ СКА</span>
                    <Image width={10} height={10} unoptimized src="assets/logo5.svg" alt="Логотип команды" className="schedule_logo" />
                </div>
                <Link  href={'https://www.youtube.com/watch?v=xkgoERWc9Kw'}><Image width={10} height={10} unoptimized src="assets/translation.png" alt="Иконка трансляции" className="schedule_translation" /></Link>
            </div>
            <div className="schedule_card">
                <div className="schedule_comands">
                    <div className="schedule_time red">12:00</div>
                    <span className="schedule_comand_name red head">Церемония открытия</span>
                </div>
            </div>
            <div className="schedule_card">
                <div className="schedule_comands">
                    <div className="schedule_time">12:45</div>
                    <Image width={10} height={10} unoptimized src="assets/logo3.svg" alt="Логотип команды" className="schedule_logo" />
                    <span className="schedule_comand_name">Красная машина юниор</span>
                    <span className="schedule_slesh">/</span>
                    <span className="schedule_comand_name">Металлург</span>
                    <Image width={10} height={10} unoptimized src="assets/logo8.svg" alt="Логотип команды" className="schedule_logo" />
                </div>
                <Link  href={'https://www.youtube.com/watch?v=xkgoERWc9Kw'}><Image width={10} height={10} unoptimized src="assets/translation.png" alt="Иконка трансляции" className="schedule_translation" /></Link>
            </div>
            <div className="schedule_card">
                <div className="schedule_comands">
                    <div className="schedule_time">14:45</div>
                    <Image width={10} height={10} unoptimized src="assets/logo6.svg" alt="Логотип команды" className="schedule_logo" style={{width:"2vw"}}/>
                    <span className="schedule_comand_name">Школа им. руслана салея</span>
                    <span className="schedule_slesh">/</span>
                    <span className="schedule_comand_name">динамо</span>
                    <Image width={10} height={10} unoptimized src="assets/logo4.svg" alt="Логотип команды" className="schedule_logo" />
                </div>
                <Link  href={'https://www.youtube.com/watch?v=xkgoERWc9Kw'}><Image width={10} height={10} unoptimized src="assets/translation.png" alt="Иконка трансляции" className="schedule_translation" /></Link>
            </div>
            <div className="schedule_card">
                <div className="schedule_comands">
                    <div className="schedule_time">16:15</div>
                    <Image width={10} height={10} unoptimized src="assets/logo3.svg" alt="Логотип команды" className="schedule_logo" />
                    <span className="schedule_comand_name">Красная машина юниор</span>
                    <span className="schedule_slesh">/</span>
                    <span className="schedule_comand_name">армия ска</span>
                    <Image width={10} height={10} unoptimized src="assets/logo5.svg" alt="Логотип команды" className="schedule_logo" />
                </div>
                <Link  href={'https://www.youtube.com/watch?v=xkgoERWc9Kw'}><Image width={10} height={10} unoptimized src="assets/translation.png" alt="Иконка трансляции" className="schedule_translation" /></Link>
            </div>
            <div className="schedule_card">
                <div className="schedule_comands">
                    <div className="schedule_time">18:15</div>
                    <Image width={10} height={10} unoptimized src="assets/logo6.svg" alt="Логотип команды" className="schedule_logo" style={{width:"2vw"}}/>
                    <span className="schedule_comand_name">Школа им. руслана салея</span>
                    <span className="schedule_slesh">/</span>
                    <span className="schedule_comand_name">АК Барс</span>
                    <Image width={10} height={10} unoptimized src="assets/logo2.svg" alt="Логотип команды" className="schedule_logo" />
                </div>
                <Link  href={'https://www.youtube.com/watch?v=xkgoERWc9Kw'}><Image width={10} height={10} unoptimized src="assets/translation.png" alt="Иконка трансляции" className="schedule_translation" /></Link>
            </div>
            <div className="schedule_card">
                <div className="schedule_comands">
                    <div className="schedule_time">19:45</div>
                    <Image width={10} height={10} unoptimized src="assets/logo1.svg" alt="Логотип команды" className="schedule_logo" />
                    <span className="schedule_comand_name">СКА-стрельна</span>
                    <span className="schedule_slesh">/</span>
                    <span className="schedule_comand_name">Динамо</span>
                    <Image width={10} height={10} unoptimized src="assets/logo4.svg" alt="Логотип команды" className="schedule_logo" />
                </div>
                <Link  href={'https://www.youtube.com/watch?v=xkgoERWc9Kw'}><Image width={10} height={10} unoptimized src="assets/translation.png" alt="Иконка трансляции" className="schedule_translation" /></Link>
            </div>
        </motion.div>
    )
}
const Page2 = () => {
    return (
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}}  >
            <div className="schedule_card">
                <div className="schedule_comands">
                    <div className="schedule_time">08:00</div>
                    <Image width={10} height={10} unoptimized src="assets/logo6.svg" alt="Логотип команды" className="schedule_logo" style={{width:"1.7vw"}}/>
                    <span className="schedule_comand_name">Школа им. руслана салеяа</span>
                    <span className="schedule_slesh">/</span>
                    <span className="schedule_comand_name">Ска стрельна</span>
                    <Image width={10} height={10} unoptimized src="assets/logo1.svg" alt="Логотип команды" className="schedule_logo" />
                </div>
                <Link  href={'https://www.youtube.com/watch?v=xkgoERWc9Kw'}><Link  href={'https://www.youtube.com/watch?v=xkgoERWc9Kw'}><Image width={10} height={10} unoptimized src="assets/translation.png" alt="Иконка трансляции" className="schedule_translation" /></Link></Link>
            </div>
            <div className="schedule_card">
                <div className="schedule_comands">
                    <div className="schedule_time">09:30</div>
                    <Image width={10} height={10} unoptimized src="assets/logo2.svg" alt="Логотип команды" className="schedule_logo" />
                    <span className="schedule_comand_name">Ак барс</span>
                    <span className="schedule_slesh">/</span>
                    <span className="schedule_comand_name">Динамо</span>
                    <Image width={10} height={10} unoptimized src="assets/logo4.svg" alt="Логотип команды" className="schedule_logo" />
                </div>
                <Link  href={'https://www.youtube.com/watch?v=xkgoERWc9Kw'}><Image width={10} height={10} unoptimized src="assets/translation.png" alt="Иконка трансляции" className="schedule_translation" /></Link>
            </div>

            <div className="schedule_card">
                <div className="schedule_comands">
                    <div className="schedule_time">11:00</div>
                    <Image width={10} height={10} unoptimized src="assets/logo3.svg" alt="Логотип команды" className="schedule_logo" />
                    <span className="schedule_comand_name">Красная машина юниор</span>
                    <span className="schedule_slesh">/</span>
                    <span className="schedule_comand_name">Лада</span>
                    <Image width={10} height={10} unoptimized src="assets/logo7.svg" alt="Логотип команды" className="schedule_logo" style={{width:"2vw"}}/>
                </div>
                <Link  href={'https://www.youtube.com/watch?v=xkgoERWc9Kw'}><Image width={10} height={10} unoptimized src="assets/translation.png" alt="Иконка трансляции" className="schedule_translation" /></Link>
            </div>
            <div className="schedule_card">
                <div className="schedule_comands">
                    <div className="schedule_time">12:20</div>
                    <Image width={10} height={10} unoptimized src="assets/logo5.svg" alt="Логотип команды" className="schedule_logo" />
                    <span className="schedule_comand_name">Армия ска</span>
                    <span className="schedule_slesh">/</span>
                    <span className="schedule_comand_name">Металлург</span>
                    <Image width={10} height={10} unoptimized src="assets/logo8.svg" alt="Логотип команды" className="schedule_logo" />
                </div>
                <Link  href={'https://www.youtube.com/watch?v=xkgoERWc9Kw'}><Image width={10} height={10} unoptimized src="assets/translation.png" alt="Иконка трансляции" className="schedule_translation" /></Link>
            </div>
            <div className="schedule_card">
                <div className="schedule_comands">
                    <div className="schedule_time">14:00</div>
                    <span className="schedule_comand_name">Группа 1 (4 место)</span>
                    <span className="schedule_slesh">/</span>
                    <span className="schedule_comand_name">Группа 2 (4 место)</span>
                </div>
                <Link  href={'https://www.youtube.com/watch?v=xkgoERWc9Kw'}><Image width={10} height={10} unoptimized src="assets/translation.png" alt="Иконка трансляции" className="schedule_translation" /></Link>
            </div>
            <div className="schedule_card">
                <div className="schedule_comands">
                    <div className="schedule_time">15:30</div>
                    <span className="schedule_comand_name">Группа 1 (3 место)</span>
                    <span className="schedule_slesh">/</span>
                    <span className="schedule_comand_name">Группа 2 (3 место)</span>
                </div>
                <Link  href={'https://www.youtube.com/watch?v=xkgoERWc9Kw'}><Image width={10} height={10} unoptimized src="assets/translation.png" alt="Иконка трансляции" className="schedule_translation" /></Link>
            </div>
            <div className="schedule_card">
                <div className="schedule_comands">
                    <div className="schedule_time">15:30</div>
                    <span className="schedule_comand_name">Матч за 3 место</span>
                </div>
                <Link  href={'https://www.youtube.com/watch?v=xkgoERWc9Kw'}><Image width={10} height={10} unoptimized src="assets/translation.png" alt="Иконка трансляции" className="schedule_translation" /></Link>
            </div>
            <div className="schedule_card">
                <div className="schedule_comands">
                    <div className="schedule_time">17:00</div>
                    <span className="schedule_comand_name">Финал</span>
                </div>
                <Link  href={'https://www.youtube.com/watch?v=xkgoERWc9Kw'}><Image width={10} height={10} unoptimized src="assets/translation.png" alt="Иконка трансляции" className="schedule_translation" /></Link>
            </div>
            
            <div className="schedule_card">
                <div className="schedule_comands">
                    <div className="schedule_time red">20:00</div>
                    <span className="schedule_comand_name red head">Церемония закрытия</span>
                </div>
            </div>
        </motion.div>
    )
}