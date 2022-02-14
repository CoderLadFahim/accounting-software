import './TableStyles.css';
import { useEffect } from 'react';

function Table(/*{ data }*/) {
	const data = [
		{
			serial: 0,
			date: '14-2-2002',
			name: 'fahim',
			balance: 10000,
		},
		{
			serial: 1,
			date: '13-2-2002',
			name: 'Nazmul',
			balance: 14000,
		},
		{
			serial: 2,
			date: '16-2-2002',
			name: 'Nishat',
			balance: 12000,
		},
	];

	const columns = Array.from(new Set(Object.keys(data[0])));
	const values = data.map(v => Object.values(v));

	useEffect(() => {
		console.log(values);
	}, []);

	return (
		<table className="app-table">
			<thead>
				<tr>
					{columns.map(el => <th className="capitalize">{el}</th>)}
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
					<td>Nazmul</td>
					<td>14000</td>
				</tr>
			</tbody>
		</table>
	);
}

export default Table;
