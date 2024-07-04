import ContentLoader from "react-content-loader";

export const ArticlesSkeleton = (props) => (
	<ContentLoader speed={2} width={380} height={430} viewBox='0 0 380 430' backgroundColor='#e3e3e3' foregroundColor='#ecebeb' {...props}>
		<circle cx='323' cy='385' r='14' />
		<rect x='20' y='296' rx='2' ry='2' width='326' height='7' />
		<rect x='20' y='380' rx='2' ry='2' width='130' height='9' />
		<rect x='10' y='7' rx='22' ry='22' width='372' height='277' />
		<rect x='20' y='306' rx='2' ry='2' width='326' height='7' />
		<rect x='20' y='315' rx='2' ry='2' width='326' height='7' />
		<rect x='20' y='324' rx='2' ry='2' width='186' height='7' />
		<rect x='20' y='334' rx='2' ry='2' width='186' height='7' />
		<circle cx='361' cy='385' r='14' />
		<circle cx='286' cy='385' r='14' />
	</ContentLoader>
);
export default ArticlesSkeleton