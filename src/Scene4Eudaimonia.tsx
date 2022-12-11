import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';
import aristotle from './img/aristotle.png';

const Title = styled.div`
	font-family: var(--sans);
	text-align: center;
	font-size: 120px;
	font-weight: 700;
`;

const BlockTitle = styled.div`
	font-family: var(--block);
	font-size: 250px;
	text-align: center;
	font-weight: bold;
`;

export const Scene4Eudaimonia: React.FC = () => {
	const frame = useCurrentFrame();
	const {width, height} = useVideoConfig();

	const textSlideUp = interpolate(frame, [60, 90], [0, -height / 4.5], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const firstFrameSlideUp = interpolate(frame, [120, 135], [0, -100], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const secondFrameSlideUp = interpolate(frame, [120, 135], [100, 0], {
		extrapolateRight: 'clamp',
	});

	const titleOpacity = interpolate(frame, [30, 40], [0, 1], {
		extrapolateRight: 'clamp',
	});

	const opacityProgress = interpolate(frame, [90, 105], [0, 1], {
		extrapolateRight: 'clamp',
	});

	const goodOpacity1 = interpolate(frame, [150, 151], [0, 1], {
		extrapolateLeft: 'clamp',
	});
	const goodOpacity2 = interpolate(frame, [160, 161], [0, 1], {
		extrapolateLeft: 'clamp',
	});
	const goodOpacity3 = interpolate(frame, [170, 171], [0, 1], {
		extrapolateLeft: 'clamp',
	});

	return (
		<>
			<AbsoluteFill
				style={{
					backgroundColor: '#D6EAF8',
					transform: `translateY(${firstFrameSlideUp}%)`,
				}}
			>
				<div
					style={{
						height: '100%',
						width: '100%',
						padding: '400px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						transform: `translateY(${textSlideUp}px)`,
					}}
				>
					<Title>
						εὐ
						<br />
						good
					</Title>
					<Title style={{opacity: titleOpacity}}>+</Title>
					<Title style={{opacity: titleOpacity}}>
						δαιμονία
						<br />
						spirit
					</Title>
				</div>
				<div
					style={{
						height: '50%',
						width: '100%',
						padding: '200px',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						position: 'absolute',
						bottom: height / 12,
						opacity: opacityProgress,
					}}
				>
					<Title style={{fontSize: '100px'}}>
						<span style={{fontSize: '200px'}}>😊</span>
						<br />
						"a combination of well-being, happiness and flourishing"
					</Title>
				</div>
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					backgroundColor: 'var(--yellow)',
					transform: `translateY(${secondFrameSlideUp}%)`,
				}}
			>
				<div
					style={{
						display: 'flex',
						height: '100%',
						width: '100%',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<img
						style={{
							alignSelf: 'flex-end',
							display: 'block',
							height: '95%',
							width: 'auto',
						}}
						src={aristotle}
					/>
					<BlockTitle style={{paddingRight: width / 9}}>
						<span style={{opacity: goodOpacity1}}>Highest</span>
						<br />
						<span style={{opacity: goodOpacity2}}>Human</span>
						<br />
						<span style={{opacity: goodOpacity3}}>Good</span>
					</BlockTitle>
				</div>
			</AbsoluteFill>
		</>
	);
};
