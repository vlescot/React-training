import authReducer from './AuthReducer';
import projectsReducer from './ProjectsReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectsReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;
