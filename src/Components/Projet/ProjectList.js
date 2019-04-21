import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
    const projectList = (typeof projects !== "undefined" && projects.length) ? (
        projects.map(project => {
            return ( 
                <Link to={"/project/" + project.id } key={ project.id }>
                    <ProjectSummary project={project} />
                </Link>
            )
        })
    ) : (
        <div className="card z-depth-0 project-summary center">Projects Loading...</div>
    )

    return (
        <div className="project-list section">{ projectList }</div>
    )
}

export default ProjectList;
