import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./component/NavBar";
import SideNav from "./component/SideNav";
import CollapsibleExample from "./pages/CollapsibleExample";
import FormSelectExample from "./pages/FormSelectExample";
import Index from "./pages/Index";

export default function App() {
	const [isSideOpen, setSideOpen] = useState(false);

	return (
		<BrowserRouter>
			<NavBar
				title={"React Start"}
				setSideOpen={setSideOpen}
			/>
			<SideNav
				isSideOpen={isSideOpen}
				setSideOpen={setSideOpen}
			/>
			<Routes>
				<Route path="/" index element={<Index />} />
				<Route path="/collapsible" element={<CollapsibleExample />} />
				<Route path="/form-select" element={<FormSelectExample />} />
			</Routes>
		</BrowserRouter>
	);
};