import { Employee } from "@/types/employee";

const API_URL = 'http://localhost:3000/employees'

export const fetchEmployees = async (): Promise<Employee[]> => {
    const response = await fetch(API_URL)
    if (!response.ok) {
        throw new Error('Failed to fetch employees')
    }
    return response.json()
}


export const addEmployee = async(employee: Employee[]): Promise<Employee[]> => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(employee)
    })

    if (!response.ok) {
        throw new Error ('Failed to add employee')
    }

    return response.json()
}