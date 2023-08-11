import React from 'react';


function Project(props) {
    return (
        <div className="card">
            <img src={props.imageSrc} className="card-img-top img-fluid" alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <a href={props.deployedLink} className="btn btn-primary m-3" target="_blank" rel="noopener noreferrer">View Project</a>
                <a href={props.githubLink} className="btn btn-secondary m-3" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
        </div>
    );
}



export default Project;
