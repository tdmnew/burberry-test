import React from "react";

export default function Episode({ name, summary, image, season, number }) {
    const [ clicked, setClicked ] = React.useState<boolean>(false);

    return (
        <li onClick={() => setClicked(!clicked)}>
            <span className="episode-list__season">
                Season {season} Episode {number}
            </span>
            <span className="episode-list__title">: {name}</span>
            <span className="episode-list__toggle">{clicked ? 'Close' : 'Show Information'}</span>
            {/* Episode Information */}
            <div className={"episode"} style={clicked ? {display: 'inherit'} : {display: 'none'}} >
                <h2>{name}</h2>
                {image !== null ? <img src={image} /> : null}
                <div dangerouslySetInnerHTML={{ __html: summary }} />
            </div>
        </li>
    );
}
