import styled from 'styled-components';
import { colors } from '../../../common/Styles/theme';

import { Link } from 'react-router-dom';

export const Heading = styled.h2`
	margin: 0;
`;

export const HomeLink = styled(Link)`
	color: ${colors.contrast};
`;
