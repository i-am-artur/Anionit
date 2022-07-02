import { useParams } from 'react-router-dom';
import products from '../../common/content/productsInfo';
import routeList from '../AppRouter/routeList';
import { ProductTitle, ProductWrapper } from '../../common/Styles/common';
import {
	Description,
	Order,
	Price,
	PriceWrapper,
	Total,
} from './product.styled';
import { ProductQuantity } from './components/ProductQuantity/ProductQuantity';
import { useEffect, useMemo } from 'react';
import { ButtonLink } from '../../common/components/Link/ButtonLink';
import { LinkBack } from '../../common/components/Link/LinkBack/LinkBack';
import { useSelector } from 'react-redux';
import { getShoppingCart } from '../../store/selectors';
import { Fragment } from 'react';

export default function Product() {
	const productId = Number(useParams().productId);
	const shoppingCart = useSelector(getShoppingCart);
	const product = getProduct(productId);

	const totalSum = useMemo(() => {
		return shoppingCart
			.find((product) => product.id === productId)
			.volumes.reduce((preVolumes, volume) => {
				return (
					preVolumes + volume.value * volume.quantity * product.price.value
				);
			}, 0)
			.toFixed(2);
	}, [shoppingCart, product, productId]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Fragment>
			<LinkBack />
			{product && (
				<ProductWrapper>
					<img
						src={require(`../../assets/${product.image}`)}
						alt={product.title}
					/>
					<ProductTitle color={product.color}>{product.title}</ProductTitle>

					<PriceWrapper>
						Cena: <Price color={product.color}>{getPrice(product)}</Price>
					</PriceWrapper>

					{product.volumes.map((volume) => (
						<ProductQuantity product={product} volume={volume} key={volume}>
							Kanister {volume}l
						</ProductQuantity>
					))}

					<Order>
						<div>
							Suma: <Total color={product.color}>{totalSum} zł</Total>
						</div>
						<ButtonLink bgcolor={product.color} to={routeList.checkout}>
							Zamówienie
						</ButtonLink>
					</Order>
					<Description
						dangerouslySetInnerHTML={{ __html: product.description }}
					/>
				</ProductWrapper>
			)}
		</Fragment>
	);
}

function getProduct(productId) {
	return products.find((product) => product.id === productId);
}

function getPrice(product) {
	const price = product.price.value.toFixed(2);
	const priceUnit = product.price.unit;
	const currency = product.price.currency;

	return `${price} ${currency}/${priceUnit}`;
}
