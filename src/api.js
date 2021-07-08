import React from 'react'

export default function api() {

    const url = 'https://api.openweathermap.org/data/2.5/';
    const key = 'df1ace6c09f4425606a6c778cd436efd';


    const setQuery=(e)=>{
        if(e.keyCode == '13')
        getResult(searchbar.value)
    }

    const getResult = (cityName) => {
        console.log(cityName)
    }

    const searchbar = document.getElementById('searchbar');
    searchbar.addEventListener('keypress', setQuery)

    return (
        <div>
            
        </div>
    )
}
