import './TableStyles.css';

function Table({ data }) {
	const columns = Array.from(new Set(Object.keys(data[0])));
	const values = data.map((v) => Object.values(v));

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
					<tr className="capitalize" >
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
