import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import routeList from './routeList';

import LoadingIndicator from '../../common/components/LoadingIndicator/LoadingIndicator';

const Home = lazy(() => import('../Home/Home'));
const Technology = lazy(() => import('../Technology/Technology'));
const History = lazy(() => import('../History/History'));
const Contacts = lazy(() => import('../Contacts/Contacts'));
const Products = lazy(() => import('../Products/Products.jsx'));
const Checkout = lazy(() => import('../Checkout/Checkout'));
const Product = lazy(() => import('../Product/Product'));

export default function AppRouter() {
	return (
		<Suspense fallback={<LoadingIndicator />}>
			<Routes>
				<Route path={routeList.home} element={<Home />} />
				<Route path={routeList.technology} element={<Technology />} />
				<Route path={routeList.history} element={<History />} />
				<Route path={routeList.contacts} element={<Contacts />} />
				<Route path={routeList.checkout} element={<Checkout />} />
				<Route path={routeList.products}>
					<Route path='' element={<Products />} />
					<Route path=':productId' element={<Product />} />
				</Route>
			</Routes>
		</Suspense>
	);
}
