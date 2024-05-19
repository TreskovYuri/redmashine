import Image from 'next/image'
import css from './table.module.css'

const Table = () => {
    const group1 =[
        {
            "number":1,
            "name":"АК Барс",
            img:'assets/logo2.svg',
            'ochki':4,
            "i":2,
            "v":2,
            "p":0,
            "vb":0,
            "pb":0,
            "zsh":23,
            'psh':3,
            'zshzp':'23-3'
        },
        {
            "number":2,
            "name":"динамо",
            img:'assets/logo4.svg',
            'ochki':2,
            "i":2,
            "v":0,
            "p":1,
            "vb":1,
            "pb":0,
            "zsh":6,
            'psh':7,
            'zshzp':'6-7'
        },
        {
            "number":3,
            "name":"СКА-стрельна",
            img:'assets/logo1.svg',
            'ochki':2,
            "i":2,
            "v":1,
            "p":1,
            "vb":0,
            "pb":0,
            "zsh":7,
            'psh':9,
            'zshzp':'7-9'
        },
        {
            "number":4,
            "name":"Школа им. руслана салея",
            img:'assets/logo6.svg',
            'ochki':1,
            "i":2,
            "v":0,
            "p":1,
            "vb":0,
            "pb":1,
            "zsh":3,
            'psh':20,
            'zshzp':'3-20'
        },

    ]
    const group2 =[
        {
            "number":1,
            "name":"Красная машина юниор",
            img:'assets/logo3.svg',
            'ochki':4,
            "i":2,
            "v":2,
            "p":0,
            "vb":0,
            "pb":0,
            "zsh":14,
            'psh':4,
            'zshzp':'14-4'
        },
        {
            "number":2,
            "name":"Лада",
            img:'assets/logo7.svg',
            'ochki':4,
            "i":2,
            "v":1,
            "p":0,
            "vb":1,
            "pb":0,
            "zsh":5,
            'psh':3,
            'zshzp':'5-3'
        },
        {
            "number":3,
            "name":"Металлург",
            img:'assets/logo8.svg',
            'ochki':1,
            "i":2,
            "v":0,
            "p":1,
            "vb":0,
            "pb":1,
            "zsh":3,
            'psh':12,
            'zshzp':'3-12'
        },

        {
            "number":4,
            "name":"армия ска",
            img:'assets/logo5.svg',
            'ochki':0,
            "i":2,
            "v":0,
            "p":2,
            "vb":0,
            "pb":0,
            "zsh":4,
            'psh':7,
            'zshzp':'4-7'
        },
    ]
  return (
    <div className={css.container} id='table'>
        <h2 className={css.header}>[турнирная таблица]</h2>
        <h2 className={css.header1}>Группа 1</h2>
        <div className={css.table}>
            <div className={css.tableHeader}>
                <div className={css.headerNumber} style={{flex:1}}>№</div>
                <div className={css.headerNumber} style={{flex:8,justifyContent:'flex-start'}}>Команда</div>
                <div className={css.headerNumber} style={{flex:2}}>Очки</div>
                <div className={css.headerNumber} style={{flex:2}}>И</div>
                <div className={css.headerNumber} style={{flex:2}}>В</div>
                <div className={css.headerNumber} style={{flex:2}}>П</div>
                <div className={css.headerNumber} style={{flex:2}}>ВБ</div>
                <div className={css.headerNumber} style={{flex:2}}>ПБ</div>
                <div className={css.headerNumber} style={{flex:2}}>ЗШ</div>
                <div className={css.headerNumber} style={{flex:2}}>ПШ</div>
                <div className={css.headerNumber} style={{flex:2}}>ЗШ/ЗП</div>
            </div>
            {
                group1.map(e => (
                    <div key={e.number} className={css.tableRow}>
                <div className={css.rowNumber} style={{flex:1}}><span>{e.number}</span></div>
                <div className={css.rowName} style={{flex:8,justifyContent:'flex-start'}}><Image src={e.img} unoptimized width={10} height={10} sizes='100' className={css.icon} />{e.name}</div>
                <div className={css.rowOchki} style={{flex:2}}>{e.ochki}</div>
                <div className={css.rowOchki} style={{flex:2}}>{e.i}</div>
                <div className={css.rowOchki} style={{flex:2}}>{e.v}</div>
                <div className={css.rowOchki} style={{flex:2}}>{e.p}</div>
                <div className={css.rowOchki} style={{flex:2}}>{e.vb}</div>
                <div className={css.rowOchki} style={{flex:2}}>{e.pb}</div>
                <div className={css.rowOchki} style={{flex:2}}>{e.zsh}</div>
                <div className={css.rowOchki} style={{flex:2}}>{e.psh}</div>
                <div className={css.rowOchki} style={{flex:2}}>{e.zshzp}</div>

                    </div>
                ))
            }
        </div>
        <h2 className={css.header1}>Группа 2</h2>
        <div className={css.table}>
            <div className={css.tableHeader}>
                <div className={css.headerNumber} style={{flex:1}}>№</div>
                <div className={css.headerNumber} style={{flex:8,justifyContent:'flex-start'}}>Команда</div>
                <div className={css.headerNumber} style={{flex:2}}>Очки</div>
                <div className={css.headerNumber} style={{flex:2}}>И</div>
                <div className={css.headerNumber} style={{flex:2}}>В</div>
                <div className={css.headerNumber} style={{flex:2}}>П</div>
                <div className={css.headerNumber} style={{flex:2}}>ВБ</div>
                <div className={css.headerNumber} style={{flex:2}}>ПБ</div>
                <div className={css.headerNumber} style={{flex:2}}>ЗШ</div>
                <div className={css.headerNumber} style={{flex:2}}>ПШ</div>
                <div className={css.headerNumber} style={{flex:2}}>ЗШ/ЗП</div>
            </div>
            {
                group2.map(e => (
                    <div key={e.number} className={css.tableRow}>
                <div className={css.rowNumber} style={{flex:1}}><span>{e.number}</span></div>
                <div className={css.rowName} style={{flex:8,justifyContent:'flex-start'}}><Image src={e.img} unoptimized width={10} height={10} sizes='100' className={css.icon} />{e.name}</div>
                <div className={css.rowOchki} style={{flex:2}}>{e.ochki}</div>
                <div className={css.rowOchki} style={{flex:2}}>{e.i}</div>
                <div className={css.rowOchki} style={{flex:2}}>{e.v}</div>
                <div className={css.rowOchki} style={{flex:2}}>{e.p}</div>
                <div className={css.rowOchki} style={{flex:2}}>{e.vb}</div>
                <div className={css.rowOchki} style={{flex:2}}>{e.pb}</div>
                <div className={css.rowOchki} style={{flex:2}}>{e.zsh}</div>
                <div className={css.rowOchki} style={{flex:2}}>{e.psh}</div>
                <div className={css.rowOchki} style={{flex:2}}>{e.zshzp}</div>

                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Table