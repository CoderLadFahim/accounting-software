import './TableStyles.css';

function Table({ data }) {
	return (
		<table className="app-table">
			<thead>
				<tr>
					<th>Serial</th>
					<th>Date</th>
					<th>Name</th>
					<th>Balance</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>0</td>
					<td>14-2-2002</td>
					<td>Fahim</td>
					<td>10000</td>
				</tr>
				<tr>
					<td>1</td>
					<td>13-2-2002</td>
					<td>Najmul</td>
					<td>14000</td>
				</tr>
			</tbody>
		</table>
	);
}

export default Table;
