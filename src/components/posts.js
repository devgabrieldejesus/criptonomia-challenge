import React from 'react';
import './posts.css';
import '../App.css';

const Posts = ({ posts }) => {
	return (
	<section>
		<div className="container column">
		<h1>Posts</h1>
		{posts.map((post) => (
			<div className="post column">
				<div className="post-body">
					<div className="post-title">{post.title}</div>
					<p>{post.body}</p>
				</div>
			</div>
		))}
		</div>
	</section>
	)
};

export default Posts