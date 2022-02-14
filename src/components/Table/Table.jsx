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
					<th>0</th>
					<th>14-2-2002</th>
					<th>Fahim</th>
					<th>10000</th>
				</tr>
				<tr>
					<th>1</th>
					<th>13-2-2002</th>
					<th>Najmul</th>
					<th>14000</th>
				</tr>
			</tbody>
		</table>
	);
}

export default Table;
