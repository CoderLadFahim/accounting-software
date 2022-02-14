import './TableStyles.css';

function Table({ data }) {
	const getKeys = (obj) => Object.keys(obj);

	const objectWithMostProps = data.reduce(
		(a, v) => (getKeys(v).length > getKeys(a).length ? (a = v) : a),
		0
	);
	const columns = getKeys(objectWithMostProps);
	const values = data.map((v) => Object.values(v));

	const handleRowClick = (ind) => {
		console.log(data[ind]);
	};

	const tableColumns = columns.map((column, i) => (
		<th className="capitalize" key={i}>
			{column}
		</th>
	));

	const tableRows = values.map((row, i) => (
		<tr onClick={() => handleRowClick(i)} key={i}>
			{row.map((property) => (
				<td key={property}>{property}</td>
			))}
		</tr>
	));

	return (
		<table className="app-table">
			<thead>
				<tr>{tableColumns}</tr>
			</thead>

			<tbody>{tableRows}</tbody>
		</table>
	);
}

export default Table;
