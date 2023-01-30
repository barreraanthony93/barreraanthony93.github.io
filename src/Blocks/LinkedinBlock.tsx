import React from 'react'
import { ImLinkedin} from 'react-icons/im'
import ArrowButton from '../Components/Buttons/ArrowButton'

type Props = {}

const LinkedinBlock = (props: Props) => {
  return (
    <a href="https://www.linkedin.com/in/anthony-barrera-tech/" target="_blank" className="block linkedin">
        <ImLinkedin size={100} />
        <ArrowButton direction="right" />
    </a>
  )
}

export default LinkedinBlock