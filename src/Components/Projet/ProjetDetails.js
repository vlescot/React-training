import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import { Redirect } from 'react-router-dom';
import { Modal } from 'materialize-css';
import DeleteProjectModal from './DeleteProjectModal';

const ProjetDetails = ({ auth, project }) => {
    if (!auth.uid) return <Redirect to="/signin" /> 

    if (project === null) return <Redirect to="/404" />

    const handleDelete = () => {
        let elem = document.querySelector('#deleteModal');
        Modal.getInstance(elem).open();
    }

    const date = project.createdAt.toDate().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) 
    const time = project.createdAt.toDate().toLocaleTimeString('fr-FR', {hour: '2-digit', minute:'2-digit'})
    
    return (project) ? (
        <div className="container section project-details">
            <DeleteProjectModal project={project} />
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{ project.title }</span>
                    <p>{ project.content }</p>
                </div>
                <div className="card-action row gret lighten-4 grey-text">
                    <div className="col s9 m10 ">
                        <div>Posted by { project.authorFirstName } { project.authorLastName }</div>
                        <div>Le {date} à {time}</div>
                    </div>
                    <div className="col s3 m2">
                        <button onClick={handleDelete} className=" btn pink lighten-1 z-depth-0">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="container center">
            <p>Project loading...</p>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? {...projects[id], id} : null;

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