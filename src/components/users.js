import React from 'react';
import '../App.css';
import './posts.css';

const Users = ({ users }) => {
	return (
		<div>
			{users.map((user) => (
				<div key={user.id} className="user" >
					<div className="user-body">
							<div className="user-name">{user.name}</div>

							<div className="user-username">{user.username}</div>

							<div className="user-email">{user.email}</div>

							<div className="user-address">
								<span>{user.address.street}</span>
								<span>{user.address.suite}</span>
								<span>{user.address.zipcode}</span>

								<div className="user-address--geo">
									<span>{user.address.geo.lat}</span>
									<span>{user.address.geo.lng}</span>
								</div>
							</div>

							<div className="user-phone">{user.phone}</div>

							<div className="user-website">{user.website}</div>

							<div className="user-company">
								<span>{user.company.name}</span>
								<span>{user.company.catchPhrase}</span>
								<span>{user.company.bs}</span>
							</div>

					</div>
				</div>
			))}
		</div>
	)
};

export default Users