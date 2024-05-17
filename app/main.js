import Image from 'next/image'

const Main = () => {
  return (
    <div className="main_container">
    <Image src="/assets/main_bacground.png" alt="Изображение играющих хоккеистов" className="main_bacground_image" width={10} height={10} unoptimized/>
    <div className="main_text_container">
        <div className="crumbs"><span>18-19 МАЯ </span> / <span> СК «ХОККЕЙНЫЙ ГОРОД КРАСНОГОРСК»</span></div>
        <h1 className="main_header">КУБОК "ЮНИСОН" СРЕДИ ДЕТСКИХ ХОККЕЙНЫХ КОМАНД 2014 Г.</h1>
        <div className="main_logo_container">
            <Image  src="assets/logo1.svg" alt="Логотип" width={10} height={10} unoptimized sizes='100'/>
            <Image  src="assets/logo2.svg" alt="Логотип" width={10} height={10} unoptimized sizes='100'/>
            <Image  src="assets/logo3.svg" alt="Логотип" style={{width:'4vw'}} width={10} height={10} unoptimized sizes='100'/>
            <Image  src="assets/logo4.svg" alt="Логотип" width={10} height={10} unoptimized sizes='100'/>
        </div>
        <div className="main_logo_container">
            <Image  src="assets/logo5.svg" alt="Логотип" width={10} height={10} unoptimized sizes='100'/>
            <Image  src="assets/logo6.svg" alt="Логотип" style={{width:'4vw'}} width={10} height={10} unoptimized sizes='100'/>
            <Image  src="assets/logo7.svg" alt="Логотип" style={{width:'4vw'}} width={10} height={10} unoptimized sizes='100'/>
            <Image  src="assets/logo8.svg" alt="Логотип" style={{width:'4vw'}} width={10} height={10} unoptimized sizes='100'/>
        </div>
    </div>
</div>
  )
}

export default Main