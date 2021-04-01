import React from 'react'

export default function Cards(props) {
    return (
        <div>
          
          <div class="card">
              <img src={props.imagelink} alt="pic" width="100%"></img>
              <h4>{props.imagename}</h4>
              <button>Check now</button>
          </div>
        </div>
    )
}
