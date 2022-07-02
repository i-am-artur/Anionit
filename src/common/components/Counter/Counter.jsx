import { useState } from 'react';
import Input from '../Input/Input';
import { InputTextStyle, CounterWrapper, Button } from './counter.styled';

export function Counter({ initValue = 0, onChange, minValue }) {
	const [value, setValue] = useState(initValue);

	const increment = () => {
		processValue(parseInt(value) + 1);
	};
	const decrement = () => {
		processValue(parseInt(value) - 1);
	};
	const processValue = (newValue) => {
		const newValueNumber = parseInt(newValue);
		if (newValueNumber < minValue) {
			setValue(minValue);
			onChange(minValue);
		} else {
			setValue(newValueNumber);
			onChange(newValueNumber);
		}
	};

	return (
		<CounterWrapper>
			<Button onClick={decrement}>-</Button>
			<Input
				min={0}
				value={`${value}`}
				onChange={processValue}
				type='number'
				style={InputTextStyle}
			/>
			<Button onClick={increment}>+</Button>
		</CounterWrapper>
	);
}
