import { createGlobalStyle } from 'styled-components';

import { base_fontSize, colors, fontSize, gap } from './common/Styles/theme';

export default createGlobalStyle`
:root {
	height: 100%;
	font-size: ${base_fontSize};
}
body {
	margin: 0 auto;
	height: 100%;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: ${colors.text};
}
code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
		monospace;
}
#root {
	height: 100%;
	display: flex;
	flex-direction: column;
}
label {
	padding-top: 3px;
	padding-bottom: 3px;
}

a {
	color: blue;
	text-decoration: none;
}

input, select {
	font-size: ${fontSize.general};
}

p {
	margin-top: ${gap.original};
	margin-bottom: ${gap.original};
}
`;
