import {
	Advantages,
	Description,
	Heading,
	Section,
	TransitionFragment,
} from './home.styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useState } from 'react';
// let CSSTransitionGroup = require('react-transition-group/CSSTransition');

export default function Home() {
	const [s, setS] = useState(true);
	return (
		<Section>
			<button onClick={() => setS(!s)}>hkj</button>
			{/*<TransitionGroup>*/}
			<CSSTransition
				in={s}
				classNames='alert'
				timeout={2000}
				unmountOnExit
				onEnter={() => console.log('jh')}
			>
				<Heading>ANIONIT</Heading>
			</CSSTransition>
			{/*</TransitionGroup>*/}
		</Section>
	);
}
