'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const datePickerVariants = {
	variant: {
		startDate: 'Start Date',
		birthDate: 'Birth Date',
	},
};

interface DatePickerProps {
	variant: keyof typeof datePickerVariants.variant;
	value?: string;
	onChange?: (date: string) => void;
}

export function DatePicker({ variant, value, onChange }: DatePickerProps) {
	const [date, setDate] = React.useState<Date | undefined>(value ? new Date(value) : undefined);

	const handleSelect = (newDate: Date | undefined) => {
		setDate(newDate);
		if (onChange && newDate) {
			onChange(newDate.toISOString());
		}
	};

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={'outline'}
					className={cn('justify-start text-left font-normal', !date && 'text-muted-foreground')}>
					<CalendarIcon className='h-4 w-4' />
					{date ? (
						format(date, 'PPP')
					) : (
						<span className='text-[#011f46]'>{datePickerVariants.variant[variant]}</span>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-auto p-0'>
				<Calendar
					mode='single'
					selected={date}
					onSelect={handleSelect}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	);
}
