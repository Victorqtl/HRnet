'use client';

import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

export default function Employees() {
	const employeeData = useSelector((state: RootState) => state.employeeForm);
	console.log(employeeData);
	return <div>{employeeData.firstName}</div>;
}
