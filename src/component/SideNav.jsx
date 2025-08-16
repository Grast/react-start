import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function SideNav({ isSideOpen, setSideOpen }) {
	let el = useRef(null);
	let instance = useRef(null);
	
	useEffect(() => {
		if(el.current) {
			instance.current = M.Sidenav.init(el.current, {
				edge: "right", 
				onCloseStart: () => setSideOpen(false)
			});
		}

		return () => {
			if(instance.current) {
				instance.current.destroy();
			}
		};
	}, []);

	useEffect(() => {
		if(isSideOpen) {
			instance.current?.open();
		} else {
			instance.current?.close();
		}
	}, [ isSideOpen ]);

	return (
		<ul className="sidenav" ref={el}>
			<li><a className="subheader">React Start</a></li>
			<li><Link to="/collapsible" className="waves-effect" onClick={() => instance.current.close()}>Collapsible Example</Link></li>
			<li><Link to="/form-select" className="waves-effect" onClick={() => instance.current.close()}>FormSelect Example</Link></li>
		</ul>
	);
};