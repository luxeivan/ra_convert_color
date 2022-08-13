import React from 'react'
import { useState } from 'react'
import './ConvertColor.css'


function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
export default function ConvertColor() {
    const [color, setColor] = useState('#ffffff')
    const [rgb, setRgb] = useState({ r: 255, g: 255, b: 255 })
    const [isTrue, setIsTrue] = useState(true)

    const handleColor = (event) => {
        if(event.target.value.length < 7){
            setIsTrue(true)
            setColor('#ffffff')
            return
        }
        if (/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.test(event.target.value) ) {
            setColor(event.target.value)
            setRgb(hexToRgb(event.target.value))
            setIsTrue(true)
        }  else{
            setIsTrue(false)
            setColor('red')
        }
    }

    return (
        <div className='converter' style={
            {
                backgroundColor: color
            }
        }>
            <form>
                <input type="text" placeholder='Введите цвет #hex' className='converter__input' onChange={handleColor} />
            </form>
            <div className='converter__output'>
                <p>
                    {isTrue ? `RGB ( ${rgb.r}, ${rgb.g}, ${rgb.b} )` : 'Ошибка'}
                </p>
            </div>
        </div>
    )
}
