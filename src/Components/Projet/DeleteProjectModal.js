import React from 'react';
import { Modal } from 'materialize-css';
import { connect } from 'react-redux';
import { deleteProject } from '../../Store/Actions/projectActions';
import { withRouter } from 'react-router';

class DeleteProjectModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        Modal.init(
            document.querySelector('#deleteModal'),
            {preventScrolling: true}
        )
    }

    handleDelete(){
        this.props.dispatch(deleteProject(this.props.project));
        this.props.history.push('/');
    }

    render() {
        return (
            <div id="deleteModal" className="modal center">
                <div className="modal-content row">
                    <h4>Are you sure ??</h4>
                    <div className="col s6 center-align">
                        <a className="btn btn-floating btn-large pulse modal-close pink lighten-1 z-depth-0">No...</a>
                    </div>
                    <div className="col s6 center-align">
                        <a onClick={this.handleDelete} className="btn btn-floating btn-large pink lighten-1 z-depth-0 modal-close">Yes !</a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state, ownProps
    }
}

export default withRouter(connect(mapStateToProps)(DeleteProjectModal));