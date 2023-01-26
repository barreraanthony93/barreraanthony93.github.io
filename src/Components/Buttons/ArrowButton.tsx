import React from 'react'
import {BsArrowRightCircle} from 'react-icons/bs'

type Props = {
    direction: string
}

const ArrowButton = (props: Props) => {
    const {direction} = props

    const getArrowType = () => {
        
    }

return (
    <button> 
        <BsArrowRightCircle size={32}  color="white"/>
    </button>
  )
}

export default ArrowButton