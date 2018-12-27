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
        return ( 
            <div className='container'>
                <h1>Post</h1>
            </div>
         );
    }
}
 
export default Post;