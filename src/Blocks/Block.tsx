import React, { Children } from 'react'

type Props = {
    children: React.ReactElement[],
    size?: "double" | "triple",
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
}

const Block = (props: Props) => {
    const  { size, position, children} = props
 
    return (
        <div className={`block ${position} ${size}`} >
            {children}
        </div>
    )
}

export default Block