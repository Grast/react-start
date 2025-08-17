import { Link } from "react-router-dom";
import { menuList } from "../lib/menu";

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
					{menuList.map(menuItem => (
						<Link to={menuItem?.["uri"]} className="collection-item">{menuItem?.["text"]}</Link>
					))}
				</div>
			</div>
		</div>
	);
};