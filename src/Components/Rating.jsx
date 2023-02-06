import React from 'react'

const Rating = () => {
  return (
    <div className='panel'>
        <img className='star' src="./icon-star.svg" alt="" />
        <h1 className='title'>How did we do?</h1>
    
    <p className='desc'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>


<div className='group'>
    <button className='rating'>1</button>
    <button className='rating'>2</button>
    <button className='rating'>3</button>
    <button className='rating'>4</button>
    <button className='rating'>5</button>
    </div>
    <button>SUBMIT</button>
    </div>
  )
}

export default Rating