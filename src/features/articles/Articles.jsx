import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import ArticlesSkeleton from "./skeleton/ArticlesSkeleton.jsx";
import PopularSkeleton from "./skeleton/PopularSkeleton.jsx";

import Rectangle1 from "../../assets/mother.jpg";
import Ellipse from "../../assets/child.png";
import Rectangle4 from "../../assets/mot.jpg";
import comme from "../../assets/Ellipse 36.png";

import timeFormat from "../../utils/timeFormat.js";

import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
	WhatsappShareButton,
	WhatsappIcon,
	LinkedinShareButton,
	LinkedinIcon,
	TelegramShareButton,
	TelegramIcon,
	EmailShareButton,
	EmailIcon,
} from "react-share";

import {useGetArticlesQuery, useGetPopularArticlesQuery, useSendCommentMutation, useToggleLikeMutation} from "../api/articlesAPI.js";

const Articles = () => {
	const {data: {result: articles} = {}, error: articlesError, isLoading: articlesIsLoading} = useGetArticlesQuery();
	const {data: {result: popularArticles} = {}, error: popularArticlesError, isLoading: popularArticlesIsLoading} = useGetPopularArticlesQuery();

	return (
		<div className='articles' style={{fontFamily: "Amaranth"}}>
			<div className='container'>
				<h1 className='text-center' style={{color: "#32AA90"}}>
					Medical Articles
				</h1>
				<div className='page_articles'>
					<div className='row gy-4'>
						<div className='col-sm-8'>
							<div className='card mb-3 card_article border-0'>
								<img src={Rectangle1} className='card-img-top' alt='...' />
								<div className='card-body card_txt'>
									<h5 className='card-title text-center fs-3'>Why is it important to take care of our children?</h5>
									<p className='card-text text-center '>
										Children without adequate care are less likely to attend or do well in school, less able to access health and other basic
										services, more likely to engage in anti-social and criminal behaviours, and in many cases their physical, emotional and cognitive
										development is compromised.{" "}
									</p>
								</div>
							</div>
							<div className='row gy-4'>
								{articlesIsLoading == "loading" || articlesError ? (
									<div
										style={{
											display: "grid",
											gridTemplateColumns: "repeat(2, auto)",
											margin: "0 100px 0 0px",
										}}
									>
										<ArticlesSkeleton />
										<ArticlesSkeleton />
										<ArticlesSkeleton />
										<ArticlesSkeleton />
									</div>
								) : (
									articles?.map((article) => <Article key={article._id} article={article} />)
								)}
							</div>
						</div>
						<div className='col-sm-4'>
							<div className='card border-0 card_child shadow p-4 text-center' style={{background: "#D9D9D9"}}>
								<div className='justify-content-center'>
									<img src={Ellipse} className='card-img-top w-50' alt='...' />
								</div>
								<div className='card-body card_txt'>
									<h5 className='card-title'>Are you tired of raising children?</h5>
									<p className='card-text'>
										The modern mother is under great pressure to do everything! We tend to value the image of parents who do everything in their power
										to provide a perfect life for their
										<br /> children
									</p>
								</div>
							</div>
							<div className='card card_child2 mt-4 border-0 shadow rounded'>
								<img src={Rectangle4} className='card-img-top' alt='...' />
								<div className='card-body content'>
									<h5 className='card-title fs-4'>Are you tired of raising children?Here's what's easy for you</h5>
									<p className='card-text'>
										The modern mother is under great pressure to do everything! We tend to value the image of parents who do everything in their power
										to provide a perfect life for their children
									</p>
									<div className='text-center justify-content-center'>
										<Link to={`/artdet`} className='btn text-white rounded w-50' style={{background: "#32AA90"}}>
											Read More
										</Link>
									</div>
								</div>
							</div>
							<div className='card mt-5 popular shadow rounded-3 border-0 h-25' style={{background: "rgba(221, 221, 221, 0.16)"}}>
								<h4 className='text-center fw-bold'>Most Popular</h4>
								<div className='baby_card mt-1'>
									{popularArticlesIsLoading || popularArticlesError ? (
										<PopularSkeleton />
									) : (
										popularArticles.map((article) => (
											<Link key={article._id} to={`/articleDetails/${article._id}`}>
												<div className='card mb-3 shadow border-top border-3 border-warning rounded-3 border-0 bg-white p-2' style={{borderTop: ""}}>
													<div className='row'>
														<div className='d-flex'>
															<div className='col-md-4' style={{width: "40%"}}>
																<img src={article.articleCover.url} alt={article.title} />
															</div>
															<div className='col-md-8'>
																<div className='card-body'>
																	<h5 className='card-title text-primary'>{article.title}</h5>
																</div>
															</div>
															{/* style */}
															{article.likes}
															{article.comments}
														</div>
													</div>
												</div>
											</Link>
										))
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Article = ({article}) => {
	const [toggleLike] = useToggleLikeMutation();
	const [sendComment] = useSendCommentMutation();
	const doesUserLikeThis = article.usersLiked
		.map((user) => {
			return user._id;
		})
		.includes(localStorage.getItem("ID") ?? "ID");

	const navigate = useNavigate();
	const [share, setShare] = useState(false);
	const [like, setLike] = useState(doesUserLikeThis);

	const articleComments = article.articleComments;
	const [comment, setComment] = useState("");

	return (
		<>
			<div className='col-lg-6 col-sm-12'>
				<div className='card border-0 box shadow rounded-3'>
					<Link to={`/articleDetails/${article?._id}`}>
						<img src={article?.articleCover.url} className='card-img-top' alt={article?.title} />
						<div className='card-body content text-dark'>
							<h5 className='card-title'>{article?.title} </h5>
							<p className='card-text'>{article?.description.slice(0, 200)}...</p>
						</div>
					</Link>
					<div className='info d-flex justify-content-between p-2'>
						<p>{timeFormat(article?.updatedAt)}</p>
						<ul className='icons d-flex gap-4'>
							<li>
								<i
									className='bi bi-share'
									onClick={() => {
										setShare(!share);
									}}
								></i>
							</li>
							<li data-bs-toggle='modal' data-bs-target='#createModal'>
								<i className='bi bi-chat-left'></i>
							</li>
							<a className='d-flex gap-1 text-dark'>
								{article?.likes + (like ? 1 : 0)}
								<li style={{color: "#FE6C93"}}>
									<i
										className={`bi bi-heart${like ? "-fill" : ""}`}
										onClick={async () => {
											if (!localStorage.getItem("token")) {
												return navigate("/login");
											}
											setLike(!like);
											toggleLike({articleID: article._id, method: like ? "DELETE" : "PATCH"});
										}}
									></i>
								</li>
							</a>
						</ul>
					</div>
				</div>
				<div className='modal fade' id='createModal' tabIndex='-1' aria-labelledby='createModalLabel' aria-hidden='true' data-bs-backdrop='false'>
					<div className='modal-dialog modal-dialog-centered'>
						<div className='modal-content'>
							<div className='modal-header align-items-center'>
								<h5 className='text-dark text-center w-100 m-0' id='exampleModalLabel'>
									Create Comment
								</h5>
								<button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
							</div>
							<div className='main-container'>
								{articleComments.map((comment) => (
									<div key={comment?._id} className='bg-white rounded p-2 mt-2'>
										<div className='d-flex justify-content-between'>
											<div className='d-flex'>
												<img
													src={comment?.user?.profileImage?.url}
													style={{width: "30px", height: "30px"}}
													alt='avatar'
													className='rounded-circle me-2'
												/>
												<div className='comment-container p-1 rounded' style={{background: "#EEE"}}>
													<p className='m-0 fw-bold'>{comment?.user?.username}</p>
													<p className='m-0'>{comment?.comment}</p>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
							<div className='modal-body'>
								<div className='d-flex'>
									<div className='p-1'>
										<img src={comme} alt='avatar' className='rounded-circle' />
									</div>
									<div className='w-100'>
										<input
											type='text'
											className='form-control rounded-pill bg-gray'
											value={comment}
											onChange={(e) => setComment(e.target.value)}
											placeholder='Write a comment...'
										/>
									</div>
									<div
										onClick={() => {
											if (!localStorage.getItem("token")) {
												return navigate("/login");
											}
											sendComment({articleID: article._id, comment: comment});
										}}
										style={{cursor: "pointer"}}
										className='p-1'
									>
										<div
											className='icon rounded-circle text-white text-center p-1'
											style={{background: "#32aa90", width: "30px", height: "30px", transform: "rotate(45deg)"}}
										>
											<i className='bi bi-send-fill me-1'></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{share && (
					<div className='share'>
						<div className='card border-0 shadow w-75 p-3 mt-3 ms-5'>
							<div className='row'>
								<div className='col'>
									<FacebookShareButton url={"https://www.youtube.com/watch?v=2BnTYEafRQc"} quote={"Dummy text!"} hashtag='#muo'>
										<FacebookIcon size={50} round />
									</FacebookShareButton>
								</div>
								<div className='col'>
									<TwitterShareButton url={"https://www.youtube.com/watch?v=2BnTYEafRQc"} quote={"Dummy text!"} hashtag='#muo'>
										<TwitterIcon size={50} round />
									</TwitterShareButton>
								</div>
								<div className='col'>
									<WhatsappShareButton url={"https://www.youtube.com/watch?v=2BnTYEafRQc"} quote={"Dummy text!"} hashtag='#muo'>
										<WhatsappIcon size={50} round />
									</WhatsappShareButton>
								</div>
							</div>
							<div className='row mt-3'>
								<div className='col'>
									<LinkedinShareButton url={"https://www.youtube.com/watch?v=2BnTYEafRQc"} quote={"Dummy text!"} hashtag='#muo'>
										<LinkedinIcon size={50} round />
									</LinkedinShareButton>
								</div>
								<div className='col'>
									<TelegramShareButton url={"https://www.youtube.com/watch?v=2BnTYEafRQc"} quote={"Dummy text!"} hashtag='#muo'>
										<TelegramIcon size={50} round />
									</TelegramShareButton>
								</div>
								<div className='col'>
									<EmailShareButton url={"https://www.youtube.com/watch?v=2BnTYEafRQc"} quote={"Dummy text!"} hashtag='#muo'>
										<EmailIcon size={50} round />
									</EmailShareButton>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Articles;
