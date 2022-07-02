import styled from 'styled-components';
import intro_bg from '../../assets/intro-bg.jpg';
import { colors, fontSize, gap } from '../../common/Styles/theme';
import TransitionGroup from 'react-transition-group/cjs/TransitionGroup';
import { Fragment } from 'react';
import CSSTransition from 'react-transition-group/cjs/CSSTransition';

export const Section = styled.section`
	display: flex;
	padding: ${gap.general};
	flex: 1;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: ${fontSize.large};
	font-weight: bold;
	background-image: url(${intro_bg});
	background-size: cover;

	.alert-enter {
		//position: absolute;
		//opacity: 0.01;
		//bottom: 100vh;
		//transform: scale(0.1);
		transform: translateY(100vh);
	}
	.alert-enter-active {
		//transform: scale(1);

		//opacity: 1;
		//transform: translateX(0);
		transform: translateY(0);

		transition: transform 2000ms;
	}
	.alert-exit {
		//opacity: 1;
	}
	.alert-exit-active {
		//opacity: 0;
		transform: scale(0.01);
		transition: opacity 300ms, transform 300ms;
	}
`;

export const Heading = styled.h1`
	font-size: ${fontSize.x_large};
	color: white;
`;
export const Advantages = styled.p`
	//text-align: center;
	max-width: 410px;
	color: white;
`;
export const Description = styled.p`
	color: ${colors.contrast};
`;
