import Image from 'next/image'

const Arena = () => {
    return (
        <div className="arena_container" id='arena'>
            <h2 className="arena_header">[Арена]</h2>
            <div className="arena_card_container">
                <div className="arena_photo_box">
                    <div className="arena_blur_container"></div>
                    <Image width={10} height={10} unoptimized src="assets/arena_photo.png" alt="Фото ледовой арены" className="arena_img" style="z-index: 0;" />

                </div>
                <div className="arena_red_box">
                    <Image width={10} height={10} unoptimized src="assets/arena_icon.svg" alt="Иконка шайбы" className="arena_icon" />
                    <h2 className="arena_red_box_name">СК «ХОККЕЙНЫЙ ГОРОД КРАСНОГОРСК»</h2>
                    <span className="arena_red_box_adress">мкрн. Опалиха, ул. Ахматовой д.26</span>
                </div>
            </div>
        </div>
    )
}

export default Arena