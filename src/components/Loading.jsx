import React from 'react'
import { RevolvingDot } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className='loading-wrapper'>
<RevolvingDot 
radius= '45'
strokeWidth= '5'
color='lightblue'
secondaryColor='skyblue'
ariaLabel='revolving-dot-loading'
wrapperStyle={{}}
wrapperClass=''
visible= {true}

/>
    </div>
  )
}

export default Loading