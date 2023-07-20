import React from 'react'

export default function Pokemon({data}) {


  return (
    <>
    <div className="show-card">
        <div><img src={data.sprites.front_default}/></div>
        <h2>{data.forms[0].name}</h2>
        <div>
            <ul>
                <h5>Abilities</h5>
                {data.abilities ?
                    data.abilities.map((ability) => {
                        return (
                        <li> 
                            {ability.ability.name}
                        </li>
                        )
                    })
                : ""}
            </ul>
        </div>
    </div>
    </>
  )
}
