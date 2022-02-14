import './TableStyles.css';

function Table({ data }) {
	const getKeys = (obj) => Object.keys(obj);

	const objectWithMostProps = data.reduce(
		(a, v) => (getKeys(v).length > getKeys(a).length ? (a = v) : a),
		0
	);
	const columns = getKeys(objectWithMostProps);
	const values = data.map((v) => Object.values(v));

	const handleRowClick = (serial) => {
		console.log(serial);
	};

	return (
		<table className="app-table">
			<thead>
				<tr>
					{columns.map((column, i) => (
						<th className="capitalize" key={i}>
							{column}
						</th>
					))}
				</tr>
			</thead>

			<tbody></tbody>
		</table>
	);
}

export default Table;
