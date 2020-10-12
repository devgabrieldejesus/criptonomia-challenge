import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Posts from './components/posts';
import Users from './components/users';
import api from './api/api';
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
					<header>
						<div className="container">
							<div className="logo">
								<Link to="/"><img src={"http://localhost:3000/images/logo.svg"} alt="Logomarca"/></Link>
							</div>
							<div className="menu">
								<nav>
									<ul>
										<li><a href="https://devgabrieldejesus.github.io/criptonomia-challenge/" target="_blank">O Desafio</a></li>
										<li><a href="https://jsonplaceholder.typicode.com/" target="_blank">API</a></li>
										<li><a href="https://github.com/devgabrieldejesus/" target="_blank">Meu GitHub</a></li>
										<li><a href="https://www.linkedin.com/in/gabrieldejesuss/" target="_blank">Meu Linkedin</a></li>
									</ul>
								</nav>
							</div>
						</div>
					</header>

					<main>
						<div className="container">
							<div className="banner-left">
								<h1>Desenvolver um Frontend para uma API RESTful</h1>
								<p>
									A equipe recebeu uma demanda para desenvolver um front-end para uma API RESTful. No cenário proposto, a interface 
									deve exibir posts de um blog e, ao clicar em um post, os comentários associados.
								</p>
								<div className="banner-options">
									<Link to="/posts"><div className="banner-options--blog">O Blog</div></Link>
									<Link to="/users"><div className="banner-options--users">Usuários</div></Link>
								</div>
							</div>
						</div>
					</main>

					{/* um switch olha através de seus filhos <Router> e renderiza o primeiro que corresponde ao URL atual */}

					<Switch>
						<Route path="/posts">
							<Posts posts={this.state.posts} />
						</Route>

						<Route path="/users">
							<Users users={this.state.users} />
						</Route>
					</Switch>
			</Router>
		);
	}
}

export default App;