import content from '../../components/Contacts/content';

const products = [
	{
		id: 1,
		shortTitle: 'Anionit CLEAN',
		title: `Anionit CLEAN - Dezynfekcja powierzchni i rąk`,
		designation: {
			text: 'Oznaczenie Handlowe',
			content: 'Anionit Cl 1.0 - 2500',
		},
		intro:
			'Preparat do dezynfekcji powierzchni zmywalnych, zarówno mających jak i niemających bezpośredniego kontaktu z żywnością oraz skóry rąk i ciała.',
		price: {
			value: 17.6,
			currency: 'zł',
			unit: 'l',
		},
		volumes: [5, 10],
		image: 'anionitClean.jpg',
		color: '#0070C0',
		description: `
		<p>Preparat dostarczany jest w opakowaniach: Kanister o pojemności 5 lub 10l. Butelka z dozownikiem lub bez dozownika o pojemności 1 l.</p>
		<p>Najpopularniejszy i najbardziej uniwersalny preparat. Przeznaczony do dezynfekcji powierzchni gładkich jak i porowatych. Używany również do dezynfekcji skory rąk, ciała ludzi i zwierząt. Wykazuje wysoką skuteczność w zwalczaniu bakterii, wirusów, grzybów i roztoczy. Nie zawiera żadnych alkoholi, praktycznie obojętny zapachowo.</p>
		<p>Spełnia warunki i wymagania norm: PN-EN 13697+A1:2019-08, PN-EN 1500: 2013-07, PN-EN 1276:2019-12, PN-EN 1650:2019-12.</p>
		<p>Preparat produkowany jest od 15 lat, miedzy innymi w Kanadzie, Niemczech, Wietnamie, Rosji oraz w Stanach Zjednoczonych Ameryki.</p>
		<p>Głównymi odbiorcami preparatu są: szpitale, domy opieki społecznej, szkoły przedszkola oraz zakłady przemysłu spożywczego.</p>
		<p>Stężenie jonów podtlenku chloru (ClO-) wynosi 2 500 mg/kg. przy odczynie pH w zawierającym się w granicach od 6,5 do 7,8. Preparat o zredukowanej ilości wolnych rodników wodoru.</p>
		<p>Przechowywanie: Preparat należy przechowywać w miejscach bez dostępu promieniowania UV (słońce, świetlówki, lub inne źródła promieniowania UV). Temperatura składowania zawiera się w granicach od 4°C do maksymalnie 25°C. Czas przydatności preparatu do użycia wynosi 5 miesięcy od daty produkcji przy spełnieniu wymagań warunków składowania.</p>
		<p>Stosowanie: preparat może być nanoszony metodą oprysku, przemywania, wcierania lub poprzez zanurzenie i oprysk. Po pokryciu powierzchni przeznaczonej do dezynfekcji lub skory pozostawić preparat do wyschnięcia – nie wycierać. Po wyschnięciu swobodnym preparatu powierzchnie lub skórę uznaje się za zdezynfekowaną. Preparat jest obojętny dla skóry człowieka i zwierząt. Nie powoduje oparzeń lub innych niepożądanych skutków ubocznych.</p>
		<p>Efekty prac zarówno w Polsce jak i za granicą wykazały wysoką skuteczność w zwalczaniu miedzy innymi: Salmonelli, dżumy, cholery, wąglik, tularemia; wirusy (w tym czynniki wywołujące zapalenie Heinego-Medina), jelitowe i pozajelitowe zapalenie wątroby, rotawirusy, enterowirusy, zakażenie HIV, grypa, w tym H5N1, H1N1, SARS, paragrypa, opryszczka, adenowirusy itp.; grzyby chorobotwórcze z rodzaju Candida i rodzaju Trichophyton; wykazuje działanie sporobójcze (badane na hodowli przetrwalnikowej testowanych szczepów B.cereus, B.subtilis, B.anthracis pc. ST-1).</p>
		<p>Szczegółowe warunki i opis skutków stosowania preparatów dostępne są na karcie charakterystyki produktu.</p>
		<p>Preparat nie stanowi zagrożenia przy bezpośrednim kontakcie z żywnością.</p>
		`,
	},
	{
		id: 2,
		shortTitle: 'Anionit SALM',
		title: 'Anionit SALM - Zastosowanie w hodowli ptactwa',
		designation: {
			text: 'Oznaczenie Handlowe',
			content: 'Anionit Cl 1.0 - 5000',
		},
		intro:
			'Preparat do zastosowań w hodowli drobiu i innego ptactwa oraz aplikacji prewencji weterynaryjnej',
		price: {
			value: 35.0,
			currency: 'zł',
			unit: 'l',
		},
		volumes: [5, 10],
		image: 'anionitSalm.jpg',
		color: '#F99707',
		description: `
<p>Zastosowanie – HODOWLA DROBIU</p>
<p>Produkt ma działanie wirusobójcze, bakteriobójcze i grzybobójcze.</p>
<p>Znajduje zastosowanie w profilaktyce zakażeń bakteryjnych: Salmonella sp, E.coli, Enterococcus, wirusowych: zakaźne zapalenie oskrzeli (IBV), zakaźne zapalenie bursy Fabrycjusza (IBD), adenowirusy, enterowirusy. Przeciwdziałanie określono na podstawie badań weterynaryjnych w realnie istniejących hodowlach ptactwa.</p>
<p>W celu indywidualnej rozmowy o sposobach konkretnego zastosowania, cenie przy większych zamówieniach, długoterminowej współpracy – prosimy o kontakt z dystrybutorem</p>
<div class="distributor">
	<img class="distributor__image" src="${require('../../assets/pervet.png')}" alt="distributor"/>
	<div>
		<h3>${content.partner.name}</h3>
		<address>
			<div>
			${content.partner.street} ${content.partner.building}
			</div>
			<div>
			${content.partner.postal} ${content.partner.city}, ${content.partner.country}
			</div>
		</address>
		<div>
			tel: <a href="tel:${content.partner.phone}">${content.partner.phone}</a>
		</div>
		<div>
			email: <a href="mailto:${content.partner.email}">
			${content.partner.email}
			</a>
		</div>
	</div>
</div>
<p>Pod względem stężenia substancji czynnej oraz w szczególności stężenia rodników H.preparat został przygotowany w specjalny sposób ze szczególnym uwzględnieniem produkcji drobiarskiej. Celem użycia w wielkotowarowej produkcji jest weterynaryjna profilaktyka zakażeń bakteryjnych (głównie Salmonella sp, E.coli, Enterococcus) i wirusowych (zakaźne zapalenie oskrzeli (IBV), zakaźne zapalenie bursy Fabrycjusza (IBD), adenowirusy i enterowirusy. Bazą opracowania były wielkoprodukcyjne wdrożenia wykonywane dla fabryk produkcji zwierzęcej koncernu EXCO w Wietnamie. Prace na terenie Polski związane z oceną skuteczności działania, kierunkami zastosowań, dawkowaniem itp. Prowadzone były przy udziale lekarzy weterynarii z firmy PER VET z Częstochowy. Obecnie nasi specjaliści z PER VERT świadczą usługi dla nabywców preparatu w zakresie doradztwa, wsparcia merytorycznego oraz dystrybucji Anionit SALM.</p>
<p>Stężenie jonów podtlenku chloru wynosi co najmniej 5 000 mg/kg przy odczynie pH zawierającym się w granicach od 6,9 do 8,00 i jest osiągane poprzez szczególną technologię wysycania roztworu wodnego podtlenkiem chloru przy udziale rodników wodoru.</p>
<p>UWAGA! Skład chemiczny został specjalnie opracowany dla hodowli drobiu, preparat ten nie może być stosowany w żadnych innych aplikacjach jak również preparat ten nie może być zamieniany przez żaden inny z preparatów grupy Anionit CL1.0.</p>
<p>Główny obszar zastosowania: Zastosowanie w Produkcji Drobiarskiej: profilaktyka zakażeń bakteryjnych, wirusowych i grzybiczych, dezynfekcja pomieszczeń, ubrań, butów, mat, dezynfekcja środków spożywczych.</p>
<p>Dawkowanie: zgodnie z ulotką lub według zaleceń lekarza weterynarii</p>
<p>Preparat dostarczany jest w opakowaniach: Kanister 5 lub 10 l.</p>
<p>Przechowywanie: Preparat należy przechowywać w miejscach bez dostępu promieniowania UV (słońce, świetlówki, lub inne źródła promieniowania UV. Temperatura składowania zawiera się w granicach od 4°C do maksymalnie 25°C. Czas przydatności preparatu do użycia wynosi 6 miesięcy od daty produkcji przy spełnieniu wymagań warunków składowania.</p>
`,
	},
	{
		id: 3,
		shortTitle: 'Anionit Air',
		title: 'Anionit Air - Dezynfekcja przestrzeni',
		designation: {
			text: 'Oznaczenie Handlowe',
			content: 'Anionit Cl 1.0 - 1500',
		},
		intro:
			'Preparat przeznaczony głównie do ograniczenia rozprzestrzeniania się bakterii i wirusów w powietrzu. Metoda użycia preparatu polega na wytwarzaniu mgły w pomieszczeniach (np. szpitalach, budynkach halach itp.)',
		price: {
			value: 16.2,
			currency: 'zł',
			unit: 'l',
		},
		volumes: [5, 10],
		image: 'anionitAir.jpg',
		color: '#20A864',
		description: `
<p>Preparat opracowany w celu ograniczenia możliwości zakażeń przenoszonych drogą kropelkową przez powietrze.</p>
<p>Preparat produkowany jest w stężeniu 1 500 mg/kg przy odczynie pH zawierającym się w granicach od 6,8 do 7,6.</p>
<p>Preparat stosowany jest w szczególny sposób poprzez zamgławianie pomieszczeń zamkniętych w którym przebywają ludzie lub zwierzęta. W tym przypadku jest to możliwe z powodu braku czynników szkodliwych dla ludzi i zwierząt poprzez wdychanie preparatu. W roku 2020 w Rosji – Moskwa preparat Anionit był i jest do dzisiaj jednym z dwóch dopuszczonych do stosowania w budynkach użyteczności publicznej oraz w szpitalach do stosowania poprzez zamgławianie bez ograniczeń przebywania w ludzi pomieszczeniach zamkniętych. Stosowanie preparatu praktycznie wyeliminowało możliwość zakażenia przez wdychanie między innymi: grypa, w tym H5N1, H1N1, SARS, paragrypa, koronawirusy.</p>
<p>Do zamgławiania wykorzystuje się standardowe nawilżacze powietrza lub bramki oraz generatory mgły ciśnieniowe lub piezostrykcyjne.</p>
<p>Celem zamgławiania pomieszczeń jest dezynfekcja powietrza oraz pomieszczeń mebli i wyposażenia znajdujących się wewnątrz pomieszczeń.</p>
<p>Preparat dostarczany jest w opakowaniach: Kanister 5 lub 10 l.</p>
<p>Przechowywanie: Preparat należy przechowywać w miejscach bez dostępu promieniowania UV (słońce, świetlówki, lub inne źródła promieniowania UV. Temperatura składowania zawiera się w granicach od 4°C do maksymalnie 25°C. Czas przydatności preparatu do użycia wynosi 6 miesięcy od daty produkcji przy spełnieniu wymagań warunków składowania.</p>
		`,
	},
];

export default products;
