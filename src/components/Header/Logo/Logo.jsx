import { Heading, HomeLink } from './logo.styled';
import routeList from '../../AppRouter/routeList';

export default function Logo() {
	return (
		<Heading>
			<HomeLink to={routeList.home}>ANIONIT</HomeLink>
		</Heading>
	);
}
