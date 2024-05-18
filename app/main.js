import Image from 'next/image'
import Link from 'next/link'

const Main = () => {
  return (
    <div className="main_container">

    <div className="main_text_container">
        <div className="crumbs"><span>18-19 МАЯ </span> / <span> СК «ХОККЕЙНЫЙ ГОРОД КРАСНОГОРСК»</span></div>
        <h1 className="main_header">КУБОК <span>ЮНИСОН</span></h1>
        <div className="main_logo_container">
            <Link href={'https://strelna.ska.ru/'}><Image  src="assets/logo1.svg" alt="Логотип" width={10} height={10} unoptimized sizes='100' style={{zIndex:'99'}}/></Link>
            <Link href={'https://akbars.academy/'}><Image  src="assets/logo2.svg" alt="Логотип" width={10} height={10} unoptimized sizes='100' style={{zIndex:'99'}}/></Link>
            <Link href={'https://redmachinejunior.ru/'}><Image  src="assets/logo3.svg" alt="Логотип"  width={10} height={10} unoptimized sizes='100' style={{zIndex:'99'}}/></Link>
            <Link href={'https://school.dynamo.ru/'}><Image  src="assets/logo4.svg" alt="Логотип" width={10} height={10} unoptimized sizes='100' style={{zIndex:'99'}}/></Link>
        </div>
        <div className="main_logo_container">
        <Link href={'https://army.ska.ru/'}><Image  src="assets/logo5.svg" alt="Логотип" width={10} height={10} unoptimized sizes='100' style={{zIndex:'99'}}/></Link>
        <Link href={'https://saleischool.by/'}><Image  src="assets/logo6.svg" alt="Логотип"  width={10} height={10} unoptimized sizes='100' style={{zIndex:'99'}}/></Link>
        <Link href={'https://hclada.ru/youth_sports_school/history/'}><Image  src="assets/logo7.svg" alt="Логотип"  width={10} height={10} unoptimized sizes='100' style={{zIndex:'99'}}/></Link>
        <Link href={'http://school.metallurg.ru/'}><Image  src="assets/logo8.svg" alt="Логотип"  width={10} height={10} unoptimized sizes='100' style={{zIndex:'99'}}/></Link>
        </div>
        <Image src="/assets/main_bacground.png" alt="Изображение играющих хоккеистов" className="main_bacground_image" width={10} height={10} unoptimized/>
    </div>
</div>
  )
}

export default Main