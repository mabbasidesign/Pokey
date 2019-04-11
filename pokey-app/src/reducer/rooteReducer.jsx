const initState = {
    posts: [
        {id: '1', title:'number 1', body:'recusandae consequuntur expedita et cum reprehenderit molestiae'},
        {id: '2', title:'number 2', body:'recusandae consequuntur expedita et cum reprehenderit molestiae'},
        {id: '3', title:'number 3', body:'recusandae consequuntur expedita et cum reprehenderit molestiae'}
    ]
}

const rooteReducer = (state = initState, action) =>{
    if (action.type === 'DELETE_POST'){
        let newPost = state.posts.filter(p => action.id !== p.id);
        return{
            ...state,
            posts: newPost
        }
    }
    return state;
}

export default rooteReducer;