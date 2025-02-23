import {Link, useParams} from "react-router-dom";
import image from "../../assets/image 55.png";
import ArticleSkeleton from "./skeleton/ArticleSkeleton.jsx";
import PopularSkeleton from "./skeleton/PopularSkeleton.jsx";
import {useGetArticleQuery, useGetPopularArticlesQuery} from "../api/articlesAPI.js";

const ShowArticle = () => {
	const {id} = useParams();
	const {data} = useGetArticleQuery({id: id});
	const article = data?.result;
	const {data: {result: popularArticles} = {}, error: popularArticlesError, isLoading: popularArticlesIsLoading} = useGetPopularArticlesQuery();

	return (
		<div className='articleDetails' style={{fontFamily: "Amaranth"}}>
			<div className='container'>
				<h1 className='text-center' style={{color: "#32AA90"}}>
					Medical Articles
				</h1>
				<div className='page_articles'>
					<div className='row'>
						<div className='col-sm-8'>
							{article?.length == 0 ? (
								<ArticleSkeleton />
							) : (
								<>
									<div className='card mb-3 card_article border-0'>
										<img src={article?.articleCover?.url} className='card-img-top' alt={article?.title} />
										<div className='card-body card_txt'>
											<h5 className='card-title text-center fs-3'>{article?.title}</h5>
											<p className='card-text text-center '>{article?.description}</p>
										</div>
									</div>
									<div className='card benfit shadow rounded-3 border-0 mt-4 p-4' style={{background: "rgba(249, 249, 249, 1)"}}>
										<div className='row'>
											<div className='col-sm-8'>
												<h4>Contents of the article</h4>
												<ol style={{color: "rgba(50, 170, 144, 1)"}}>
													{article?.subTitles?.map((item, index) => (
														<li key={index}>{item}</li>
													))}
												</ol>
											</div>
											<div className='col-sm-4'>
												<img src={image} alt='' />
											</div>
										</div>
									</div>
									<div className='para mt-5'>
										<ol>
											{(() => {
												const items = [];
												for (let i = 0; i < article?.subTitles?.length; i++) {
													items.push(
														<div key={`title-${i}`}>
															<li className='fs-2'>{article?.subTitles[i]}</li>
															<p>{article?.subDescriptions[i]}</p>
														</div>,
													);
												}
												return items;
											})()}
										</ol>
									</div>
								</>
							)}
						</div>
						<div className='col-sm-4'>
							<div className='card border-0 card_child shadow p-4 text-center' style={{background: "#D9D9D9"}}>
								<div className='justify-content-center'>
									<img src={article?.addedBy?.profileImage?.url} className='card-img-top w-50' alt={article?.addedBy?.useNname} />
								</div>
								<div className='card-body card_txt'>
									<h5 className='card-title'>{article?.addedBy?.userName}</h5>
									<p className='card-text'>
										The modern mother is under great pressure to do everything! We tend to value the image of parents who do everything in their power
										to provide a perfect life for their
										<br /> children
									</p>
								</div>
							</div>
							<div className='card mt-5 popular shadow rounded-3 border-0 h-25' style={{background: "rgba(221, 221, 221, 0.16)"}}>
								<h4 className='text-center fw-bold'>Most Popular</h4>
								<div className='baby_card mt-1'>
									{popularArticlesError || popularArticlesIsLoading ? (
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

export default ShowArticle;
