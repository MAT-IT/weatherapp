import React from 'react'
import  './App.css'

 const App = () => {
  return (
    <div className="app">
      <div className="header">
        <h1>Hava Durumu</h1>
        <input type="text" id="searchbar" placeholder="Sehir Giriniz..."></input>
      </div>
      <div className="content">
        <div className="city">London  </div>
        <div className="temp"> 15  </div>
        <div className="desc"> gunesli</div>
        <div className="mimmax">14 / 19 </div>
      </div>
    </div>
  )
}

export default App;