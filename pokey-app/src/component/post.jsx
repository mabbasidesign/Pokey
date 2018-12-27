import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    state = { 
        post: null
    }

    // componentDidMount(){
    //     let id = this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts' + id)
    //     .then( res => {
    //         console.log(res)
    //         this.state({ post: res.data })
    //     });
    // }

    componentDidMount () {
            // console.log(this.props);
            let id = this.props.match.params.post_id;
            axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                this.setState({
                    post: res.data
                })
                console.log(res);
            });
        }

    render() {

        const post = (this.state.post)?
        (
            <div className='post'>
                <div className='card-content'>
                    <h5 className='title'>{this.state.post.title}</h5>
                    <p>{this.state.post.body}</p>
                </div>
            </div>
        ):
        ( <div> No post ... </div> );

        return ( 
            <div className='container'>
                <h1>Post</h1>
                <div>{post}</div>
            </div>
         );
    }
}
 
export default Post;