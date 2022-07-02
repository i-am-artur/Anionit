import content from './content';
import products from '../../common/content/productsInfo';
import { Fragment } from 'react';

import { PageHeader } from '../../common/components/PageHeader/PageHeader';
import Product from './components/Product/Product';
import { PropertyHeading, PropertyList, Wrapper } from './products.styled';
import ProductCharacteristics from '../../common/components/ProductCharacteristics/ProductCharacteristics';

export default function Products() {
	return (
		<Fragment>
			<PropertyHeading>{content.properties.heading}</PropertyHeading>
			<PropertyList>
				{content.properties.list.map((property, index) => (
					<li key={index}>{property}</li>
				))}
			</PropertyList>
			<ProductCharacteristics />

			<Wrapper>
				<PageHeader heading={content.heading} />
				{products.map((product) => (
					<Product product={product} key={product.id} />
				))}
			</Wrapper>
		</Fragment>
	);
}
