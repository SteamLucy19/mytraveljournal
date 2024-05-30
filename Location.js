import React from "react"

export default function Location(props) {
    return (
        <div className="location">
            <img 
                src={`./images/${props.img}`}
                className="photo--image"
            />
            <div className="content">
                <div className="photo--info">
                    <img className="location--icon" src="./location.png" />
                    <span className="country">{props.location}</span>
                    <a 
                    href={`${props.mapurl}`} 
                    target="_blank"
                    className="gray">{props.map}
                    </a>
                </div>
                <h1 className="location--name">{props.name}</h1>
                <p className="location--date">{props.date}</p>
                <p className="location--info">{props.info}</p>
            </div>
        </div>
    )
}
