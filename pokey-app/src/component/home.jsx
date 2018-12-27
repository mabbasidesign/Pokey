import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
    state = { 
        posts: []
     }

    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            // console.log(res);
            this.setState({
                posts: res.data.slice(0, 10)
            });
        })
    }

    render() {

        const { posts } = this.state;
        const postList = (posts.length)?
        (
            posts.map( post => {
                return(
                <div className='card'>
                    <div className='card-content'>
                        {/* <Link to={'/' + post.id}><span className='card-title'>{post.title}</span></Link> */}
                        <Link to={'/' + post.id} >
                            <span className="card-title">{post.title}</span>
                        </Link>
                        <p>{post.body}</p>
                    </div>

                </div>
                )
            })
        ):
        (
            <div className='center'> No post yet </div>
        )

        return ( 
            <div className='container home'>
                <h1 className='center'>Home</h1>
                <div>{postList}</div>
            </div>
         );
    }
}

export default Home;