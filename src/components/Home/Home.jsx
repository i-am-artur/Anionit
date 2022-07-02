import { Advantages, Description, Heading, Section } from './home.styled';
import ReactCSSTransitionGroup from 'react-transition-group';

export default function Home() {
	return (
		<Section>
			<Heading>ANIONIT</Heading>
			<Advantages>
				Jeden z najlepszych, bo najbardziej bezpieczny i skuteczny
			</Advantages>
			<Description>Preparat Biobójczy</Description>
		</Section>
	);
}
