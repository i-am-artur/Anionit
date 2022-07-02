import AppRouter from './components/AppRouter/AppRouter';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { Main } from './app.styles';
import { useLocation } from 'react-router-dom';
import products from './common/content/productsInfo';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Fragment } from 'react';
import { initializeStore } from './store/product-order/actionCreators';
import { getShoppingCart } from './store/selectors';

export default function App() {
	const location = useLocation();
	const dispatch = useDispatch();
	const lStorage_key = 'anionit';
	const shoppingCart = useSelector(getShoppingCart);

	useEffect(() => {
		let initialShoppingCart = JSON.parse(localStorage.getItem(lStorage_key));
		if (!initialShoppingCart) {
			initialShoppingCart = getEmptyShoppingCart();
		}

		dispatch(initializeStore(initialShoppingCart));
	}, [dispatch]);

	useEffect(() => {
		window.addEventListener('beforeunload', () => {
			localStorage.setItem(lStorage_key, JSON.stringify(shoppingCart));
		});
	});

	return (
		<Fragment>
			<Header />
			<Main pathname={location.pathname}>
				<AppRouter />
			</Main>
			<Footer />
		</Fragment>
	);
}

function getEmptyShoppingCart() {
	return products.map((product) => {
		return {
			id: product.id,
			volumes: product.volumes.map((volume) => ({
				value: volume,
				quantity: 0,
			})),
		};
	});
}
