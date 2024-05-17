import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Modal = ({setModal}) => {
    const [width, setWidth] = useState('1120')

    useEffect(()=>{
        const w = window.screen.width
        setWidth(w*0.9)
    },[])
    return (
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className='modal_container' onClick={()=>setModal(false)}>
            <iframe onClick={e => e.stopPropagation()} width={width} height={width/2} src="https://www.youtube.com/embed/xkgoERWc9Kw?si=lukP_kbk0juQ9Zms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </motion.div>
    )
}

export default Modal