import React, { useState } from 'react'

function SplitString({ children, classes, stagger }) {
    return (
        <span className={classes}>
            {children.split("").map((letter, index) => {
                return <span
                    style={{ "animationDelay": stagger ? (index * stagger) + 's' : "" }}
                    key={letter + index}
                    aria-hidden="true"
                >
                    {letter}
                </span>
            })}
        </span>
    )
}

export default SplitString