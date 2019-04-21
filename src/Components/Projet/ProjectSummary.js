import React from 'react';

const ProjectSummary = ({ project }) => {
    const date = project.createdAt.toDate().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) 
    const time = project.createdAt.toDate().toLocaleTimeString('fr-FR', {hour: '2-digit', minute:'2-digit'})

    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{ project.title }</span>
                <p>{ project.content }</p>
                <p className="grey-text">Le {date} à {time}</p>
            </div>
        </div>
    )
}

export default ProjectSummary;
