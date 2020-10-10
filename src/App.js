import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Posts from './components/posts';
import Users from './components/users';
import api from './api';
import './App.css';

class App extends Component {
	state = {
		posts: [],
		users: []
	}

	async componentDidMount() {
		const responsePosts = await api.get('posts');
		this.setState({ posts: responsePosts.data });

		const responseUsers = await api.get('users');
		this.setState({ users: responseUsers.data });
	}

	render() {
		return(
			<Router>
				<div>
					<nav>
						<ul>
							<li><Link to="/posts">Posts</Link></li>
							<li><Link to="/users">Usuários</Link></li>
						</ul>
					</nav>

					{/* um switch olha através de seus filhos <Router> e renderiza o primeiro que corresponde ao URL atual */}

					<Switch>
						<Route path="/posts">
							<Posts posts={this.state.posts} />
						</Route>

						<Route path="/users">
							<Users users={this.state.users} />
						</Route>
					</Switch>

				</div>
			</Router>
		);
	}
}

export default App;