import ContentLoader from "react-content-loader";

export const PopularSkeleton = (props) => (
	<ContentLoader speed={2} width={380} height={350} viewBox='0 0 380 350' backgroundColor='#e3e3e3' foregroundColor='#ecebeb' {...props}>
		<circle cx='52' cy='52' r='52' />
		<rect x='117' y='20' rx='0' ry='0' width='251' height='13' />
		<rect x='117' y='45' rx='0' ry='0' width='251' height='13' />
		<rect x='117' y='70' rx='0' ry='0' width='251' height='13' />
		<circle cx='52' cy='165' r='52' />
		<rect x='117' y='133' rx='0' ry='0' width='251' height='13' />
		<rect x='117' y='158' rx='0' ry='0' width='251' height='13' />
		<rect x='117' y='183' rx='0' ry='0' width='251' height='13' />
		<circle cx='52' cy='289' r='52' />
		<rect x='117' y='257' rx='0' ry='0' width='251' height='13' />
		<rect x='117' y='282' rx='0' ry='0' width='251' height='13' />
		<rect x='117' y='307' rx='0' ry='0' width='251' height='13' />
	</ContentLoader>
);
export default PopularSkeleton