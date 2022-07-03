import { Component, Options, ShoppingCart, Wrapper } from './header.styled';
import Logo from './Logo/Logo';

import BurgerMenu from './BurgerMenu/BurgerMenu';
import shoppingCart1 from '../../assets/shopping-cart.svg';
import Navigation from './Navigation/Navigation';

import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getShoppingCart, getStates } from '../../store/selectors';
import CSSTransition from 'react-transition-group/cjs/CSSTransition';

export default function Header() {
	const [isNavDisplayed, setNavDisplayed] = useState(false);
	const location = useLocation();
	const shoppingCart = useSelector(getShoppingCart);
	const states = useSelector(getStates);

	const cartItems_quantity = useMemo(() => {
		return shoppingCart.reduce((preQuantity, cartItem) => {
			return (
				preQuantity +
				cartItem.volumes.reduce((preVolumeQuantity, volume) => {
					if (volume.quantity > 0) return preVolumeQuantity + 1;
					return preVolumeQuantity + 0;
				}, 0)
			);
		}, 0);
	}, [shoppingCart]);

	return (
		<Wrapper>
			<Component pathname={location.pathname}>
				<Logo />
				<Navigation isDisplayed={isNavDisplayed} />
				<Options>
					<ShoppingCart items_quantity={cartItems_quantity}>
						<img width='100%' src={shoppingCart1} alt='shopping cart' />
					</ShoppingCart>

					<CSSTransition
						in={states.isHomeAnimationDone}
						timeout={4000}
						classNames='alert'
					>
						<BurgerMenu
							clickedOutside={() => setNavDisplayed(false)}
							onClick={() => setNavDisplayed(!isNavDisplayed)}
						/>
					</CSSTransition>
				</Options>
			</Component>
		</Wrapper>
	);
}
