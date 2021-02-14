import React, { useEffect, useState } from 'react';


const Message = () => {
  const [counter, setCounter] = useState(10);
  useEffect(() => {
    const item = counter > 0 && setTimeout(() => {
      setCounter(counter - 1)

    }, 1000)
    // document.querySelector('.message__').classList.remove('scale-right')
    return () => {
      clearTimeout(item)
      // document.querySelector('.message__').classList.add('clos')
    }
  }, [counter])
  return (
    <>
      <div className="message__ scale-right ">
        <span className="info-message">
          Beta
        </span>
        <span style={{ position: 'relative', top: '.7rem', left: '10rem', fontSize: '17px', }}>{counter}</span>
      </div>
    </>
  )
}

export default Message