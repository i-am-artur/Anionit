import * as PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { InputElement } from './input.styled';

export default function Input({
	value = '',
	onChange,
	enterPressed,
	...props
}) {
	const [currentValue, setCurrentValue] = useState(value);

	useEffect(() => {
		setCurrentValue(value);
	}, [value]);

	const valueChanged = (e) => {
		const typedValue = e.target.value;
		if (onChange) {
			onChange(typedValue);
		}
		setCurrentValue(typedValue);
	};

	return (
		<InputElement
			value={currentValue}
			onChange={valueChanged}
			onKeyDown={(e) => e.key === 'Enter' && enterPressed && enterPressed()}
			{...props}
		/>
	);
}

Input.propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.string,
	enterPressed: PropTypes.func,
};
