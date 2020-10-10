import React from 'react';
import '../App.css';
import './posts.css';

const Posts = ({ posts }) => {
	return (
	<div>
		{posts.map((post) => (

			<div key={post.id} className="post">

				<div className="post-body">
					<h1>{post.title}</h1>
					<p>{post.body}</p>
				</div>

			</div>

		))}
	</div>
	)
};

export default Posts