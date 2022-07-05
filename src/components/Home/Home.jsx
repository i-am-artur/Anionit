import {
	Advantages,
	Animation,
	Description,
	Heading,
	Section,
} from './home.styled';
import { CSSTransition } from 'react-transition-group';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStates } from '../../store/selectors';
import { setHomeAnimationIsDone } from '../../store/animation/actionCreators';

export default function Home() {
	const states = useSelector(getStates);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setHomeAnimationIsDone(false));
	}, [dispatch]);

	return (
		<Section>
			<CSSTransition
				in={!states.isHomeAnimationDone}
				classNames='alert'
				timeout={2500}
				onEntered={() => dispatch(setHomeAnimationIsDone(true))}
			>
				<Animation>
					<Heading>ANIONIT</Heading>
					<Advantages>
						Jeden z najlepszych, bo najbardziej bezpieczny i skuteczny
					</Advantages>
					<Description>Preparat Biobójczy</Description>
				</Animation>
			</CSSTransition>
		</Section>
	);
}
