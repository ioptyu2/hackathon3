import React, {useEffect, useState} from "react"
import {Pokemon} from "../"


export default function Pokedex() {
    const [pokedex, setPokedex] = useState([])

    useEffect(() => {
        async function displayPokedex() {
            const arr = []
            for(let i = 1; i < 100; i++) {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
                const data = await response.json();
                arr.push(data)
            }
            
            setPokedex(arr) 
        }
        displayPokedex()
    }, [])
    return (
        <div className="shows">
        {pokedex.map((pokemon, i) => {
           return (
            <Pokemon data={pokemon} key={i}/>
           ) 
        })}
        </div>
    )

}
