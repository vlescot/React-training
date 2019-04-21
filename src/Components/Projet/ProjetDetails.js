import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import { Redirect } from 'react-router-dom';

const ProjetDetails = (props) => {
    if (!props.auth.uid) return <Redirect to="/signin" /> 

    const { project } = props;

    const date = project.createdAt.toDate().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) 
    const time = project.createdAt.toDate().toLocaleTimeString('fr-FR', {hour: '2-digit', minute:'2-digit'})
    
    return (project) ? (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{ project.title }</span>
                    <p>{ project.content }</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by { project.authorFirstName } { project.authorLastName }</div>
                    <div>Le {date} à {time}</div>
                </div>
            </div>
        </div>
    ) : (
        <div className="container center">
            <p>Loading project...</p>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjetDetails);