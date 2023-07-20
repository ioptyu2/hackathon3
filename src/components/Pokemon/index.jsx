import React from 'react'

export default function Pokemon({data}) {


  return (
    <>
        <div>{data.forms[0].name}</div>
        <img src={data.sprites.front_default}/>
    </>
  )
}
