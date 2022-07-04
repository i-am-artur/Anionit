import { LinkBack } from '../../common/components/Link/LinkBack/LinkBack';
import CartItem from './components/CartItem/CartItem';
import { useSelector } from 'react-redux';
import { getShoppingCart } from '../../store/selectors';
import {
	CheckoutButton,
	CheckoutInput,
	ClientInfo,
	Heading,
	ProductSelect,
	ShoppingCart,
	Total,
	Wrapper,
} from './checkout.styled';
import { useMemo } from 'react';
import products from '../../common/content/productsInfo';

export default function Checkout() {
	const shoppingCart = useSelector(getShoppingCart);

	const total = useMemo(() => {
		return getTotal(shoppingCart);
	}, [shoppingCart]);

	return (
		<Wrapper>
			<ProductSelect>
				<LinkBack />
				<Heading>Wózek sklepowy</Heading>
				<ShoppingCart>
					{shoppingCart.map((cartItem, index) => (
						<CartItem cartItem={cartItem} index={index} key={cartItem.id} />
					))}
				</ShoppingCart>
				<Total>Suma częściowa: {total} zł</Total>
			</ProductSelect>

			<ClientInfo>
				<Heading>Informacje o dostawie:</Heading>
				<CheckoutInput placeholder='Nazwa' />
				<CheckoutInput placeholder='Numer NIP' />
				<CheckoutInput placeholder='Adres' />
				<CheckoutInput placeholder='Email' />
				<CheckoutInput placeholder='Telefon' />
				<CheckoutInput placeholder='Komentarz' />
				<CheckoutButton to='#' bgcolor='#0070C0'>
					Zamówienie
				</CheckoutButton>
			</ClientInfo>
		</Wrapper>
	);
}

function getTotal(shoppingCart) {
	return shoppingCart
		.reduce((preCartItem, cartItem) => {
			const productPrice = products.find(
				(product) => product.id === cartItem.id
			).price.value;

			const cartItemSum = cartItem.volumes.reduce(
				(preVolume, volume) =>
					preVolume + volume.value * volume.quantity * productPrice,
				0
			);
			return preCartItem + cartItemSum;
		}, 0)
		.toFixed(2);
}
