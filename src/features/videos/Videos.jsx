import {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";
import {VideosSkeleton, MainVideoSkeleton} from "./VideosSkeleton";

const baseURL = import.meta.env.VITE_API_BASE_URL
const Videos = () => {
	const {id} = useParams();
	const [videos, setVideos] = useState({
		videos: [],
		error: "",
		loading: true,
	});

	const [video, setVideo] = useState(null);

	const fetchVideos = async () => {
		try {
			const response = await axios.get(baseURL + "videos");
			const fetchedVideos = response.data.result;

			setVideos({
				videos: fetchedVideos,
				loading: false,
				error: null,
			});
			let selectedVideo;
			if (id && fetchedVideos.find((video) => video._id === id)) {
				selectedVideo = fetchedVideos.find((video) => video._id === id);
				setVideos((prevState) => ({
					...prevState,
					videos: prevState.videos.filter((vid) => vid._id !== id),
				}));
			} else {
				selectedVideo = fetchedVideos[0];
				setVideos((prevState) => ({
					...prevState,
					videos: prevState.videos.slice(1),
				}));
			}
			setVideo(selectedVideo);
		} catch (err) {
			setVideos({
				videos: [],
				loading: false,
				error: err,
			});
		}
	};

	useEffect(() => {
		fetchVideos();
	}, [id]);

	return (
		<div className='videos'>
			<div className='container'>
				<h1
					className='text-center'
					style={{
						color: "rgba(50, 170, 144, 1)",
					}}
				>
					Watch Our Children Wellbeing
				</h1>
				<br />
				<div className='card border-0' style={{border: "none"}}>
					{!video ? <MainVideoSkeleton /> : <ReactPlayer onStart={() => {}} url={video?.video} />}
				</div>
				<div className='row row-cols-1 row-cols-md-3 g-4 mt-4'>
					{videos?.error || videos.loading ? (
						<>
							<>
								<VideosSkeleton />
								<VideosSkeleton />
								<VideosSkeleton />
							</>
							<>
								<VideosSkeleton />
								<VideosSkeleton />
								<VideosSkeleton />
							</>
						</>
					) : (
						videos?.videos?.map((video) => (
							<div key={video?._id} className='col'>
								<Link to={`/videos/${video?._id}`}>
									<div className='card border-0 shadow'>
										<img src={video?.videoCover?.url} className='card-img-top' alt='...' />
										<div
											className='rounded-bottom rounded-top ps-2 text-white position-absolute top-0 end-0'
											style={{
												backgroundColor: "rgba(50, 170, 144, 1)",
											}}
										>
											<i className='bi bi-play-circle-fill fs-4 pe-2 ' style={{}}></i>
										</div>
										<div className='card-body'>
											<h5 className='card-title'>{video?.title}</h5>
											<p className='card-text'>{video?.description}</p>
										</div>
									</div>
								</Link>
							</div>
						))
					)}
				</div>
				<br />
			</div>
		</div>
	);
};
export default Videos;
