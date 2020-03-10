import React from 'react'

export function Buttons({russion, english, toRussion, toEnglish}: {
    russion: string, 
    english: string, 
    toRussion: () => void,
    toEnglish: () => void
}) {
    return (
        <div className="group">
            <button onClick={toRussion} className="group__item">{russion}</button>
            <button onClick={toEnglish} className="group__item">{english}</button>
        </div>
    )
}