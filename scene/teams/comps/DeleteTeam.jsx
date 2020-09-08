import React, { Component } from 'react';
import Button from 'react-bootstrap-plus/Button';
import Modal from 'react-bootstrap-plus/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

export default class DeleteTeam extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deleting: false,
			show: false,
		};
	}

	deleteTeam() {
		const { removeTeam } = this.props;
		this.setState({
			deleting: true,
			show: false,
		});
		removeTeam();
	}

	render() {
		return (
			<>
				<Modal show={this.state.show} onHide={() => this.handleClose()}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>Are you sure that you want to delete the team?</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={() => this.handleClose()}>
							No
						</Button>
						<Button variant="primary" onClick={() => this.deleteTeam()}>
							Yes
						</Button>
					</Modal.Footer>
				</Modal>
				<Button
					variant="danger"
					className="mt-3 mr-3"
					onClick={() => this.setState({ show: true })}
				>
					Delete Team
					{this.state.deleting
						&& <FontAwesomeIcon className="fa-spin ml-2" icon={faCog} />}
				</Button>
			</>
		);
	}
}
