import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
export const BestDeal = ({
	color = '#000000',
	width = 25,
	height = 25,
}: SvgProps) => (
	<Svg viewBox="0 0 40 40" fill="none" width={width} height={height}>
		<Path
			d="M29.8 10.2003L6.53333 33.467C5.81667 34.1837 4.61667 34.117 4.03333 33.3003C3.2 32.1503 3.03333 30.5503 3.9 29.167L8.5 21.7837C9.11667 20.8003 9.11667 19.2003 8.5 18.217L3.9 10.8337C2.35 8.36699 4.13333 5.16699 7.03333 5.16699H26.1167C27.25 5.16699 28.65 5.95033 29.25 6.90033L30.0333 8.13366C30.4333 8.80033 30.35 9.65033 29.8 10.2003Z"
			stroke={color}
		/>
		<Path
			d="M36.05 21.85L27.4167 33.35C26.8167 34.1667 25.4833 34.8333 24.45 34.8333H12.5167C11.0333 34.8333 10.2833 33.0333 11.3333 31.9833L30.5333 12.8C31.2833 12.05 32.5667 12.1833 33.1333 13.1L36.2167 18.05C36.8833 19.1167 36.8167 20.8333 36.05 21.85Z"
			stroke={color}
		/>
	</Svg>
);
