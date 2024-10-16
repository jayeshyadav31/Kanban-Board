import React from 'react'

import './Card.css'

export default function Card(props) {
  return ( 
    <>
        <div className="card-container">
            <div className="card-id-wrapper">
                <div className="card-id">{props.cardDetails.id}</div>
                <div className="card-profile">
                    <div className="card-profile-initial">{props.cardDetails.userObj.name[0]}{props.cardDetails.userObj.name[1]}</div>
                    <div className={props.cardDetails.userObj.available ?"card-profile-initial-available card-profile-initial-available-true" : "card-profile-initial-available"}></div>
                </div>
            </div>
            <div className="card-title">
                {props.cardDetails.title}
            </div>
            <div className="card-tag">
                {
                    {
                        0: <div className="card-tag-icon"><img src='/assets/No-priority.svg'/></div>,
                        1: <div className="card-tag-icon"><img src='/assets/Img - Low Priority.svg'/></div>,
                        2: <div className="card-tag-icon"><img src='/assets/Img - Medium Priority.svg'/></div>,
                        3: <div className="card-tag-icon"><img src='/assets/Img - High Priority.svg'/></div>,
                        4: <div className="card-tag-icon"><img src='/assets/SVG - Urgent Priority colour.svg'/></div>
                    }[props.cardDetails.priority]
                }

                {
                    props.cardDetails.tag.map((tag) => {
                        return(
                            <div className="card-tag-box">
                                <div className="card-tag-title">{tag}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}
