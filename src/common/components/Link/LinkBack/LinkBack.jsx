import { Link, useNavigate } from 'react-router-dom';

export function LinkBack() {
	const navigate = useNavigate();

	return (
		<Link to='' onClick={() => navigate(-1)}>
			&#8678; nazad
		</Link>
	);
}
