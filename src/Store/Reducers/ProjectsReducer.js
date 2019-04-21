const initState = {
    projects: [
        {id: '1', title: "Help me find Peach", content: 'blah blah blah'},
        {id: '2', title: "Collect all the Stars", content: 'blah blah blah'},
        {id: '3', title: "Egg hunt with Yoshi", content: 'blah blah blah'}
    ]
}

const projectsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            return state;
        case 'CREATE_PROJECT_ERROR':
            return state;
        default: 
            return state;
    }
}

export default projectsReducer;