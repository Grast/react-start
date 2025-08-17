import { useEffect, useRef } from "react";

export default function CollapsibleExample() {
	const el = useRef(null);
	const style = {
		"borderLeft": "5px solid teal"
	};
	const list = [
		{ title: "title00", 	icon: "check", 			content: "collapsible content 00"	},
		{ title: "title01", 	icon: "list", 			content: "collapsible content 01"	},
		{ title: "title02", 	icon: "add", 			content: "collapsible content 02"	},
		{ title: "title03", 	icon: "image", 			content: "collapsible content 03"	},
		{ title: "title04", 	icon: "music_note", 	content: "collapsible content 04"	},
		{ title: "title05", 	icon: "videocam", 		content: "collapsible content 05"	},
		{ title: "title06", 	icon: "person", 		content: "collapsible content 06"	},
		{ title: "title07", 	icon: "location_on", 	content: "collapsible content 07"	},
		{ title: "title08", 	icon: "gamepad", 		content: "collapsible content 08"	},
		{ title: "title09", 	icon: "search",			content: "collapsible content 09"	}
	];

	useEffect(() => {
		const instance = M.Collapsible.init(el.current, {});

		return () => {
			instance?.destroy();
		};
	}, []);

	return (
		<div className="col s12">
			<div className="container">
				<blockquote className="col s12" style={style}>
					<h5>Collapsible Example</h5>
					<p>/collapsible</p>
				</blockquote>
				<div className="divider" />
				<ul className="collapsible" ref={el}>
					{list.map(item => (
						<li key={item.title}>
							<div className="collapsible-header"><i className="material-icons">{item?.["icon"]}</i>{item?.["title"]}</div>
							<div className="collapsible-body"><span>{item?.["content"]}</span></div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};