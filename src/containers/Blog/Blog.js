import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    // state = {
    //     posts: [],
    //     selectedPostId: null,
    //     error: false
    // }

    render () {
        return (
            <div>
							<header className='Blog'>
								<nav>
									<ul>
										<li><NavLink exact to='/'>Home</NavLink></li>
										<li><NavLink to={{
											pathname: '/new-post',
											hash: '#submit',
											search: '?quick-submit=true',
										}}>New Post</NavLink></li>
									</ul>
								</nav>
							</header>
							{/* <Posts /> */}
							<Route path='/' exact component={Posts} />
							<Route path='/new-post' component={NewPost} />
                {/* <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;