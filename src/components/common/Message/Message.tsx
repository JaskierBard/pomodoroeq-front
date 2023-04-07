import React, { useEffect, useState } from "react"

import './Message.css'

interface Props {
    text: string
    show: boolean
} 


export const Message = (props: Props) => {
  const [showMessage, setShowMessage] = useState(props.show);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
      console.log(props.show + 'show')
      console.log(showMessage)
    }, 3000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="message">
      {showMessage && <h1>{props.text}</h1>}
    </div>
  );
}

