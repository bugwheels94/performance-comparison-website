import React from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap-plus/Navbar';
import Nav from 'react-bootstrap-plus/Nav';
import Dropdown from 'react-bootstrap-plus/Dropdown';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import logo from './logo2.png';

const Header = () => (
	<Navbar expand="lg" variant="dark" className="header fixed-top">
		<Link href="/dashboard/overview">
			<a>
				<Navbar.Brand className="header_brand">
					<img src={logo} alt="Logo" className="header_icon" />
					<span className="d-none d-md-inline">
						Redhive Behavior Analytics
					</span>
				</Navbar.Brand>
			</a>
		</Link>
		<Navbar id="basic-navbar-nav" className="ml-auto">
			<Nav>
				<Dropdown as={Nav.Item}>
					<Dropdown.Toggle variant="info" id="dropdown-basic" className="header_dd">
						<FontAwesomeIcon icon={faBriefcase} />
						<span className="d-none d-md-inline">Team Name(Pending)</span>
					</Dropdown.Toggle>
					<Dropdown.Menu className="dropdown-menu-right">
						<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown as={Nav.Item}>
					<Dropdown.Toggle variant="info" id="dropdown-basic" className="header_dd">
						<FontAwesomeIcon icon={faUser} />
						<span className="d-none d-md-inline">Account(Pending)</span>
					</Dropdown.Toggle>
					<Dropdown.Menu className="dropdown-menu-right">
						<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>

			</Nav>
		</Navbar>
	</Navbar>
);

export default Header;
