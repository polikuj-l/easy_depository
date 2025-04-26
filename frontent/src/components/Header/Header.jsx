import './Header.css'
import { useState } from 'react';

export default function Header(){

    //const now = new Date();
    const [now, setDate] = useState(new Date());

    setInterval(() => setDate(new Date()), 1000)

    return (
      <nav>
        <h3>Easy программирование</h3>
        <span>{ now.toLocaleTimeString() }</span>
      </nav>
    )
  }