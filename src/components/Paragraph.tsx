import React from 'react';

export function Paragraph({text, title}: {text: string, title: string}) {
    return (
    <div>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>)
}