import './TableStyles.css';

function Table({ data }) {
	const columns = Array.from(new Set(Object.keys(data[0])));
	const values = data.map((v) => Object.values(v));

	const handleRowClick = (serial) => {
		console.log(serial);
	};

	return (
		<table className="app-table">
			<thead>
				<tr>
					{columns.map((column) => (
						<th className="capitalize">{column}</th>
					))}
				</tr>
			</thead>

			<tbody>
				{values.map((row) => (
					<tr
						className="capitalize"
						onClick={() => handleRowClick(row[0])}
					>
						{row.map((property) => (
							<td>{property}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default Table;
