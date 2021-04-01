import React from 'react'
import Data from './Data'
import Cards from './Cards'


export default function Home() {
    return (
        <div>
            <div className="main">

{
  Data.map((value,index)=>{
    return <Cards
    imagelink={value.Imagelink}
    imagename={value.Imagename}
    >

    </Cards>
  })
}
</div>
            
        </div>
    )
}
