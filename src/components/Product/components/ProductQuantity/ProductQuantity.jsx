import * as PropTypes from 'prop-types';
import { ProductSelect, Quantity } from './product-quantity.styled';
import { ProductCounter } from '../../../../common/components/ProductCounter/ProductCounter';

export function ProductQuantity({ product, volume, children }) {
	return (
		<ProductSelect>
			<div>{children}</div>
			<Quantity>
				Ilość:
				<ProductCounter product={product} volume={volume} />
			</Quantity>
		</ProductSelect>
	);
}

ProductQuantity.propTypes = { onChange: PropTypes.func };
