import { Link } from "react-router-dom";

export default function Index() {
	const style = {
		"borderLeft": "5px solid teal"
	};

	return (
		<div className="col s12">
			<div className="container">
				<blockquote className="col s12" style={style}>
					<h5>Index</h5>
					<p>/</p>
				</blockquote>
				<div className="divider" />
				<div className="collection">
					<Link to="/collapsible" className="collection-item">Collapsible</Link>
					<Link to="/form-select" className="collection-item">Form Select</Link>
				</div>
			</div>
		</div>
	);
};