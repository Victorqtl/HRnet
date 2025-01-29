'use client';

import React, { createContext, useState, useEffect, ReactNode, useContext, useCallback } from 'react';
import { Employee } from '@/types/employee';

type EmployeeContextType = {
	employees: Employee[];
	fetchEmployees: () => Promise<void>;
	addEmployee: (employee: Employee) => Promise<void>;
	deleteEmployee: (id: string) => Promise<void>;
	isLoading: boolean;
};

const EmployeeContext = createContext<EmployeeContextType | undefined>(undefined);

export const EmployeeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [employees, setEmployees] = useState<Employee[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchEmployees = useCallback(async () => {
		try {
			setIsLoading(true);
			const response = await fetch('http://localhost:3000/employees');
			if (!response.ok) {
				throw new Error('Failed to load Employees');
			}
			const data = await response.json();
			setEmployees(data);
		} catch (error) {
			console.error('Error:', error);
		} finally {
			setIsLoading(false);
		}
	}, []);

	const addEmployee = async (employee: Employee) => {
		try {
			const response = await fetch('http://localhost:3000/employees', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(employee),
			});

			if (!response.ok) {
				throw new Error('Failed to add employee');
			}

			await fetchEmployees();
		} catch (error) {
			console.error('Error:', error);
		}
	};

	const deleteEmployee = async (id: string) => {
		try {
			const response = await fetch(`http://localhost:3000/employees/${id}`, {
				method: 'DELETE',
			});

			if (!response.ok) {
				throw new Error('Failed to delete employee');
			}

			await fetchEmployees();
		} catch (error) {
			console.error('Error:', error);
		}
	};

	useEffect(() => {
		fetchEmployees();
	}, [fetchEmployees]);

	return (
		<EmployeeContext.Provider value={{ employees, addEmployee, fetchEmployees, deleteEmployee, isLoading }}>
			{children}
		</EmployeeContext.Provider>
	);
};

export const useEmployeeContext = () => {
	const context = useContext(EmployeeContext);
	if (!context) {
		throw new Error('useEmployeeContext must be used within an EmployeeProvider');
	}
	return context;
};
