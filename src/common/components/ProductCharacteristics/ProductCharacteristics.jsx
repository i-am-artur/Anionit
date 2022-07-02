import pdfIcon from '../../../assets/pdfIcon.png';
import { Document } from './product_characteristics.styled';

export default function ProductCharacteristics() {
	return (
		<Document href='./documents/KartaCharakterystyki.pdf' download>
			<img width='25' src={pdfIcon} alt='Karta Charakterystyki pdf document' />
			Karta Charakterystyki.pdf
		</Document>
	);
}
