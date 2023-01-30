import React from 'react'
import {BsArrowRightCircle} from 'react-icons/bs'

type Props = {
    direction: string,
    styles?: object
}

const ArrowButton = (props: Props) => {
    const {direction, styles} = props

    const getArrowType = () => {
        
    }

return (
    <button style={styles}> 
        <BsArrowRightCircle size={32}  color="white"/>
    </button>
  )
}

export default ArrowButton