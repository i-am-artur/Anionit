import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
	width: fit-content;
`;

export function LinkBack() {
	const navigate = useNavigate();

	return (
		<StyledLink to='' onClick={() => navigate(-1)}>
			&#8678; nazad
		</StyledLink>
	);
}
