import { Link } from "react-router-dom";

export default function NavBar({ title = "", setSideOpen }) {
	const onClick = e => {
		e.preventDefault();

		setSideOpen(value => !value);
	};

	return (
		<nav className="teal">
			<div className="nav-wrapper container">
				<Link to="/" className="brand-logo">{title}</Link>
				<ul className="right">
					<li onClick={onClick}>
						<a href="#" className="waves-effect waves-light"><i className="material-icons">menu</i></a>
					</li>
				</ul>
			</div>
		</nav>
	);
};