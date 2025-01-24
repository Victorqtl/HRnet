'use client';

import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';

export interface FormData {
	firstName: string;
	lastName: string;
	birthDate: string;
	startDate: string;
	street: string;
	city: string;
	state: string;
	zipCode: string;
	department: string;
}

interface FormDataContextType {
	data: FormData[];
	addData: (newData: FormData) => void;
}

const FormDataContext = createContext<FormDataContextType | undefined>(undefined);

export const FormDataProvider = ({ children }: { children: ReactNode }) => {
	const [data, setData] = useState<FormData[]>([]);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
		const storedData = localStorage.getItem('formData');
		if (storedData) {
			try {
				setData(JSON.parse(storedData));
			} catch (error) {
				console.error('Erreur lors du parsing des données:', error);
				localStorage.removeItem('formData');
			}
		}
	}, []);

	const addData = (newData: FormData) => {
		const updatedData = [...data, newData];
		setData(updatedData);
		localStorage.setItem('formData', JSON.stringify(updatedData));
	};

	if (!isClient) {
		return null;
	}

	return <FormDataContext.Provider value={{ data, addData }}>{children}</FormDataContext.Provider>;
};

export const useFormDataContext = () => {
	const context = useContext(FormDataContext);
	return context;
};
