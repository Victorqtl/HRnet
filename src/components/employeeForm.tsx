'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { DatePicker } from './ui/datePicker';

const formSchema = z.object({
	firstName: z.string().min(2).max(50),
	lastName: z.string().min(2).max(50),
	birthDate: z.string(),
	startDate: z.string(),
	address: z.object({
		street: z.string(),
		city: z.string(),
		state: z.string(),
		zipCode: z.string().min(5).max(5),
	}),
	department: z.string(),
});

export default function EmployeeForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			birthDate: '',
			startDate: '',
			address: {
				street: '',
				city: '',
				state: '',
				zipCode: '',
			},
			department: '',
		},
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = form;

	const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = data => {
		console.log(data);
	};
	return (
		<Form {...form}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col mx-auto gap-4 max-w-[300px]'>
				<FormField
					control={form.control}
					name='firstName'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder='First Name'
									{...field}
								/>
							</FormControl>
							{errors.firstName && <FormMessage>{errors.firstName.message}</FormMessage>}
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='birthDate'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder='Last Name'
									{...field}
								/>
							</FormControl>
							{errors.firstName && <FormMessage>{errors.firstName.message}</FormMessage>}
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='birthDate'
					render={({ field }) => (
						<FormItem className='flex flex-col'>
							<FormLabel>Birth Date</FormLabel>
							<FormControl>
								<DatePicker {...field} />
							</FormControl>
							{errors.firstName && <FormMessage>{errors.firstName.message}</FormMessage>}
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='startDate'
					render={({ field }) => (
						<FormItem className='flex flex-col'>
							<FormLabel>Start Date</FormLabel>
							<FormControl>
								<DatePicker {...field} />
							</FormControl>
							{errors.firstName && <FormMessage>{errors.firstName.message}</FormMessage>}
						</FormItem>
					)}
				/>
				<Button type='submit'>Submit</Button>
			</form>
		</Form>
	);
}
