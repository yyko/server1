import React from 'react'
import './ShowFrame.css'

export function ShowFrame(props) {
    return (
        <>
        <div className="showframe">
            {props.children}
            <div className="showframeNext">Next</div>
        </div>
        </>
    )
}
