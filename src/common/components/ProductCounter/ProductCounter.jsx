import { useDispatch, useSelector } from 'react-redux';
import { Counter } from '../Counter/Counter';
import { setQuantity } from '../../../store/product-order/actionCreators';
import { Wrapper } from './product-counter.styled';
import { getShoppingCart } from '../../../store/selectors';

export function ProductCounter({ product, volume }) {
	const dispatch = useDispatch();
	const shoppingCart = useSelector(getShoppingCart);

	function getInitialValue() {
		return shoppingCart
			.find((cartItem) => cartItem.id === product.id)
			.volumes.find((itemVolume) => {
				return itemVolume.value === volume;
			}).quantity;
	}

	function updateOrderQuantity(quantity) {
		dispatch(setQuantity(product.id, volume, quantity));
	}

	return (
		<Wrapper>
			<Counter
				minValue={0}
				initValue={getInitialValue}
				onChange={updateOrderQuantity}
			/>
		</Wrapper>
	);
}
