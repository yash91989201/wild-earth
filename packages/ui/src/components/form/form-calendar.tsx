import { IconCalendar } from "@tabler/icons-react";
import type { ComponentProps } from "react";
import { cn } from "../../lib/utils";
import { Button } from "../button";
import { Calendar } from "../calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { FormBase, type FormControlProps } from "./form-base";
import { useFieldContext } from "./hooks";

type FormCalendarProps = FormControlProps & {
	placeholder?: string;
	className?: string;
	calendarProps?: Omit<
		ComponentProps<typeof Calendar>,
		"mode" | "selected" | "onSelect"
	>;
};

export function FormCalendar({
	placeholder = "Pick a date",
	className,
	calendarProps,
	...props
}: FormCalendarProps) {
	const field = useFieldContext<string>();
	const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
	const selectedDate = field.state.value
		? new Date(field.state.value)
		: undefined;

	return (
		<FormBase {...props}>
			<Popover>
				<PopoverTrigger
					render={
						<Button
							aria-invalid={isInvalid}
							className={cn(
								"w-full justify-start border-transparent bg-input/50 text-left font-normal",
								!selectedDate && "text-muted-foreground",
								className
							)}
							id={field.name}
							variant="outline"
						>
							<IconCalendar className="mr-2 h-4 w-4" />
							{selectedDate
								? new Intl.DateTimeFormat("en-US", {
										month: "long",
										day: "numeric",
										year: "numeric",
									}).format(selectedDate)
								: placeholder}
						</Button>
					}
				/>
				<PopoverContent align="start" className="w-auto p-0">
					<Calendar
						{...calendarProps}
						mode="single"
						onSelect={(date) => {
							field.handleChange(date ? date.toISOString() : "");
							field.handleBlur();
						}}
						selected={selectedDate}
					/>
				</PopoverContent>
			</Popover>
		</FormBase>
	);
}
