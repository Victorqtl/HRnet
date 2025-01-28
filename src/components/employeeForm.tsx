'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useEmployeeContext } from '@/context/EmployeeContext';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { DatePicker } from './ui/datePicker';
import ValidationModal from './validationModal';

const formSchema = z.object({
	firstName: z.string().min(2, { message: '2 Characters Minimum' }).max(50, { message: 'Invalid First Name' }),
	lastName: z.string().min(2, { message: '2 Characters Minimum' }).max(50, { message: 'Invalid Last Name' }),
	birthDate: z.string().min(1, { message: 'Invalid Date' }),
	startDate: z.string().min(1, { message: 'Invalid Date' }),
	street: z.string().min(5, { message: 'Invalid Street' }),
	city: z.string().min(5, { message: 'Invalid City' }),
	state: z.string().min(1, { message: 'Invalid State' }),
	zipCode: z
		.string()
		.regex(/^\d+$/, { message: 'Invalid Zip Code' })
		.min(5, { message: 'Invalid Zip Code' })
		.max(5, { message: 'Invalid Zip Code' }),
	department: z.string().min(1, { message: 'Invalid Department' }),
});

export default function EmployeeForm() {
	const [showModal, setShowModal] = useState(false);
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			birthDate: '',
			startDate: '',
			street: '',
			city: '',
			state: '',
			zipCode: '',
			department: '',
		},
	});

	const { addEmployee } = useEmployeeContext();

	const {
		handleSubmit,
		formState: { errors },
	} = form;

	const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = employee => {
		addEmployee(employee);
		setShowModal(true);
	};
	return (
		<div>
			<Form {...form}>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col mx-auto gap-4 w-[300px] sm:w-[350px]'>
					<p className='-mb-2'>Employee :</p>
					<div className='flex gap-2'>
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
							name='lastName'
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											placeholder='Last Name'
											{...field}
										/>
									</FormControl>
									{errors.lastName && <FormMessage>{errors.lastName.message}</FormMessage>}
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name='birthDate'
						render={({ field }) => (
							<FormItem className='flex flex-col'>
								<FormControl>
									<DatePicker
										variant='birthDate'
										value={field.value}
										onChange={dateString => {
											const date = new Date(dateString);
											const formattedDate = date.toLocaleDateString('en-US', {
												year: 'numeric',
												month: '2-digit',
												day: '2-digit',
											});
											field.onChange(formattedDate);
										}}
									/>
								</FormControl>
								{errors.birthDate && <FormMessage>{errors.birthDate.message}</FormMessage>}
							</FormItem>
						)}
					/>
					<p className='-mb-2'>Adress :</p>
					<FormField
						control={form.control}
						name='street'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder='Street'
										{...field}
									/>
								</FormControl>
								{errors.street && <FormMessage>{errors.street.message}</FormMessage>}
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='city'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder='City'
										{...field}
									/>
								</FormControl>
								{errors.city && <FormMessage>{errors.city.message}</FormMessage>}
							</FormItem>
						)}
					/>
					<div className='flex gap-2'>
						<FormField
							control={form.control}
							name='state'
							render={({ field }) => (
								<FormItem className='w-1/2'>
									<FormControl>
										<Select
											value={field.value}
											onValueChange={field.onChange}>
											<SelectTrigger>
												<SelectValue placeholder='State' />
											</SelectTrigger>
											<SelectContent>
												{states.map(state => (
													<SelectItem
														key={state.abbreviation}
														value={state.name}>
														{state.name}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</FormControl>
									{errors.state && <FormMessage>{errors.state.message}</FormMessage>}
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='zipCode'
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											placeholder='Zip Code'
											{...field}
										/>
									</FormControl>
									{errors.zipCode && <FormMessage>{errors.zipCode.message}</FormMessage>}
								</FormItem>
							)}
						/>
					</div>
					<p className='-mb-2'>Job : </p>
					<FormField
						control={form.control}
						name='startDate'
						render={({ field }) => (
							<FormItem className='flex flex-col'>
								<FormControl>
									<DatePicker
										variant='startDate'
										value={field.value}
										onChange={dateString => {
											const date = new Date(dateString);
											const formattedDate = date.toLocaleDateString('en-US', {
												year: 'numeric',
												month: '2-digit',
												day: '2-digit',
											});
											field.onChange(formattedDate);
										}}
									/>
								</FormControl>
								{errors.startDate && <FormMessage>{errors.startDate.message}</FormMessage>}
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='department'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Select
										value={field.value}
										onValueChange={field.onChange}>
										<SelectTrigger>
											<SelectValue placeholder='Department' />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value='Sales'>Sales</SelectItem>
											<SelectItem value='Marketing'>Marketing</SelectItem>
											<SelectItem value='Engineering'>Engineering</SelectItem>
											<SelectItem value='Human Resources'>Human Resources</SelectItem>
											<SelectItem value='Legal'>Legal</SelectItem>
										</SelectContent>
									</Select>
								</FormControl>
								{errors.department && <FormMessage>{errors.department.message}</FormMessage>}
							</FormItem>
						)}
					/>
					<Button type='submit'>Submit</Button>
				</form>
			</Form>
			{showModal ? <ValidationModal /> : null}
		</div>
	);
}

const states = [
	{
		name: 'Alabama',
		abbreviation: 'AL',
	},
	{
		name: 'Alaska',
		abbreviation: 'AK',
	},
	{
		name: 'American Samoa',
		abbreviation: 'AS',
	},
	{
		name: 'Arizona',
		abbreviation: 'AZ',
	},
	{
		name: 'Arkansas',
		abbreviation: 'AR',
	},
	{
		name: 'California',
		abbreviation: 'CA',
	},
	{
		name: 'Colorado',
		abbreviation: 'CO',
	},
	{
		name: 'Connecticut',
		abbreviation: 'CT',
	},
	{
		name: 'Delaware',
		abbreviation: 'DE',
	},
	{
		name: 'District Of Columbia',
		abbreviation: 'DC',
	},
	{
		name: 'Federated States Of Micronesia',
		abbreviation: 'FM',
	},
	{
		name: 'Florida',
		abbreviation: 'FL',
	},
	{
		name: 'Georgia',
		abbreviation: 'GA',
	},
	{
		name: 'Guam',
		abbreviation: 'GU',
	},
	{
		name: 'Hawaii',
		abbreviation: 'HI',
	},
	{
		name: 'Idaho',
		abbreviation: 'ID',
	},
	{
		name: 'Illinois',
		abbreviation: 'IL',
	},
	{
		name: 'Indiana',
		abbreviation: 'IN',
	},
	{
		name: 'Iowa',
		abbreviation: 'IA',
	},
	{
		name: 'Kansas',
		abbreviation: 'KS',
	},
	{
		name: 'Kentucky',
		abbreviation: 'KY',
	},
	{
		name: 'Louisiana',
		abbreviation: 'LA',
	},
	{
		name: 'Maine',
		abbreviation: 'ME',
	},
	{
		name: 'Marshall Islands',
		abbreviation: 'MH',
	},
	{
		name: 'Maryland',
		abbreviation: 'MD',
	},
	{
		name: 'Massachusetts',
		abbreviation: 'MA',
	},
	{
		name: 'Michigan',
		abbreviation: 'MI',
	},
	{
		name: 'Minnesota',
		abbreviation: 'MN',
	},
	{
		name: 'Mississippi',
		abbreviation: 'MS',
	},
	{
		name: 'Missouri',
		abbreviation: 'MO',
	},
	{
		name: 'Montana',
		abbreviation: 'MT',
	},
	{
		name: 'Nebraska',
		abbreviation: 'NE',
	},
	{
		name: 'Nevada',
		abbreviation: 'NV',
	},
	{
		name: 'New Hampshire',
		abbreviation: 'NH',
	},
	{
		name: 'New Jersey',
		abbreviation: 'NJ',
	},
	{
		name: 'New Mexico',
		abbreviation: 'NM',
	},
	{
		name: 'New York',
		abbreviation: 'NY',
	},
	{
		name: 'North Carolina',
		abbreviation: 'NC',
	},
	{
		name: 'North Dakota',
		abbreviation: 'ND',
	},
	{
		name: 'Northern Mariana Islands',
		abbreviation: 'MP',
	},
	{
		name: 'Ohio',
		abbreviation: 'OH',
	},
	{
		name: 'Oklahoma',
		abbreviation: 'OK',
	},
	{
		name: 'Oregon',
		abbreviation: 'OR',
	},
	{
		name: 'Palau',
		abbreviation: 'PW',
	},
	{
		name: 'Pennsylvania',
		abbreviation: 'PA',
	},
	{
		name: 'Puerto Rico',
		abbreviation: 'PR',
	},
	{
		name: 'Rhode Island',
		abbreviation: 'RI',
	},
	{
		name: 'South Carolina',
		abbreviation: 'SC',
	},
	{
		name: 'South Dakota',
		abbreviation: 'SD',
	},
	{
		name: 'Tennessee',
		abbreviation: 'TN',
	},
	{
		name: 'Texas',
		abbreviation: 'TX',
	},
	{
		name: 'Utah',
		abbreviation: 'UT',
	},
	{
		name: 'Vermont',
		abbreviation: 'VT',
	},
	{
		name: 'Virgin Islands',
		abbreviation: 'VI',
	},
	{
		name: 'Virginia',
		abbreviation: 'VA',
	},
	{
		name: 'Washington',
		abbreviation: 'WA',
	},
	{
		name: 'West Virginia',
		abbreviation: 'WV',
	},
	{
		name: 'Wisconsin',
		abbreviation: 'WI',
	},
	{
		name: 'Wyoming',
		abbreviation: 'WY',
	},
];
