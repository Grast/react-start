import { useEffect, useRef, useState } from "react";

export default function FormSelectExample() {
	const el = useRef(null);
	const style = {
		"borderLeft": "5px solid teal"
	};
	const [, setValue] = useState(null);
	const optionList = [
		{ value: 0, text: "0" },
		{ value: 1, text: "1" },
		{ value: 2, text: "2" },
		{ value: 3, text: "3" },
		{ value: 4, text: "4" },
		{ value: 5, text: "5" },
		{ value: 6, text: "6" },
		{ value: 7, text: "7" },
		{ value: 8, text: "8" },
		{ value: 9, text: "9" }
	];

	const onSelectChange = e => {
		const selectedValue = e.target.value;

		setValue(selectedValue);
	};

	useEffect(() => {
		const instance = M.FormSelect.init(el.current);

		return () => {
			instance.destroy();
		};
	}, []);

	return (
		<div className="col s12">
			<div className="container">
				<blockquote className="col s12" style={style}>
					<h5>FormSelect Example</h5>
					<p>/form-select</p>
				</blockquote>
				<div className="divider" />
				<form>
					<select ref={el} onChange={onSelectChange}>
						{optionList.map(optionItem => (
							<option value={optionItem.value} key={optionItem.value}>{optionItem.value}</option>
						))}
					</select>
					<label>FormSelect Example</label>
				</form>
			</div>
		</div>
	);
};