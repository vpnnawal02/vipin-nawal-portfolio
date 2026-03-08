import React from 'react'

const Title = ({ text_1, text_2 }) => {
    return (
        <div>
            <center>
                <h1 className="text-5xl font-extrabold my-10">
                    {text_1} <span className="text-purple-500">{text_2}</span>
                </h1>
            </center>
        </div>
    )
}

export default Title
