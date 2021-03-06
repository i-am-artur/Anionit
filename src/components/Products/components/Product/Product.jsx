import {
	DesignationContent,
	Image,
	Options,
	ProductContainer,
	ProductContent,
} from './product.styled';
import { ButtonLink } from '../../../../common/components/Link/ButtonLink';
import routeList from '../../../AppRouter/routeList';
import { ProductTitle } from '../../../../common/Styles/common';
import { Link } from 'react-router-dom';

export default function Product({ product }) {
	const productImage = require(`../../../../assets/${product.image}`);
	const price = product.price.value.toFixed(2);
	const priceUnit = product.price.unit;
	const currency = product.price.currency;
	const viewProduct = `${routeList.products}/${product.id}`;

	return (
		<ProductContainer>
			<Link to={viewProduct}>
				<Image src={productImage} alt={product.title} />
			</Link>
			<ProductContent>
				<Link to={viewProduct}>
					<ProductTitle color={product.color}>{product.title}</ProductTitle>
				</Link>
				<div>
					<span>{product.designation.text}: </span>
					<DesignationContent color={product.color}>
						{product.designation.content}
					</DesignationContent>
				</div>
				<div>{product.intro}</div>
				<div>
					Cena: <b>{`${price} ${currency}/${priceUnit}`}</b>
				</div>

				<Options>
					<ButtonLink to={viewProduct}>Więcej</ButtonLink>
					<ButtonLink to={routeList.checkout} bgcolor={product.color}>
						Zamówienie
					</ButtonLink>
				</Options>
			</ProductContent>
		</ProductContainer>
	);
}
