import React from 'react';
import './users.css';
import '../App.css';

const Users = ({ users }) => {
	return (
		<section>
			<div className="container column">
				<h1>Usuários</h1>
				<div className="user-container">
				{users.map((user) => (
					<div className="user" >
						<div className="user-body column">
								<div className="user-name">{user.name}</div>
								<div className="user-username"><strong>Usuário:</strong> {user.username}</div>
								<div className="user-email"><strong>Email:</strong> {user.email}</div>
								<div className="user-address">
									<strong>Endereço: </strong>
									{user.address.street}
									{user.address.suite}
									{user.address.city}
									{user.address.zipcode}
									{user.address.geo.lat}
									{user.address.geo.lng}
								</div>
								<div className="user-phone"><strong>Telefone: </strong>{user.phone}</div>
								<div className="user-website"><strong>Website: </strong> {user.website}</div>
								<div className="user-company"><strong>Companhia: </strong>
									{user.company.name}
									{user.company.catchPhrase}
									{user.company.bs}
								</div>
						</div>
					</div>
				))}
				</div>

			</div>
		</section>
	)
};

export default Users