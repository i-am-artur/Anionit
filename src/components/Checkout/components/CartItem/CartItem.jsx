import products from '../../../../common/content/productsInfo';
import { Header, Heading, Total, TotalHighlighted } from './cart-item.styled';
import { ProductCounter } from '../../../../common/components/ProductCounter/ProductCounter';
import { Fragment } from 'react';

export default function CartItem({ cartItem, index }) {
	const product = products.find((product) => product.id === cartItem.id);

	function getTotal(volume) {
		return (product.price.value * volume.value * volume.quantity).toFixed(2);
	}
	return (
		<Fragment>
			<Header color={product.color}>
				<Heading>{product.shortTitle}</Heading>
				<span>{`${product.price.value.toFixed(2)} ${product.price.currency}/${
					product.price.unit
				}`}</span>
			</Header>
			{index === 0 ? (
				<TotalHighlighted>Suma</TotalHighlighted>
			) : (
				<Fragment>&nbsp;</Fragment>
			)}

			{cartItem.volumes.map((volume) => (
				<Fragment key={volume.value}>
					<div>Kanister {volume.value}l</div>
					<div>
						<ProductCounter product={product} volume={volume.value} />
					</div>
					<Total>{getTotal(volume)}</Total>
				</Fragment>
			))}
		</Fragment>
	);
}
