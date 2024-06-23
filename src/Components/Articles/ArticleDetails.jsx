import React, {Component} from "react";
import Rectangle1 from "../../images/mother.jpg";
import image from "../../images/image 55.png";
import Ellipse from "../../images/child.png";
import baby from "../../images/baby.png";
export default class ArticleDetails extends Component {
	render() {
		return (
			<div className='articleDetails' style={{fontFamily: "Amaranth"}}>
				<div className='container'>
					<h1 className='text-center' style={{color: "#32AA90"}}>
						Medical Articles
					</h1>
					<div className='page_articles'>
						<div class='row'>
							<div class='col-sm-8'>
								<div class='card mb-3 card_article border-0'>
									<img src={Rectangle1} class='card-img-top' alt='...' />
									<div class='card-body card_txt'>
										<h5 class='card-title text-center fs-3'>
											Are you tired of raising children?Here's
											<br /> what's easy for you
										</h5>
										<p class='card-text text-center '>
											The modern mother is under great pressure to do everything! We tend to value the image of parents who do everything in their
											power to provide a perfect life for their children Are you tired of raising children?Here's what's easy for you The modern
											mother is under great pressure to do everything! We tend to value the image of parents who do everything in their power to
											provide a perfect life for their children.{" "}
										</p>
									</div>
								</div>
								<div className='card benfit shadow rounded-3 border-0 mt-4 p-4' style={{background: "rgba(249, 249, 249, 1)"}}>
									<div class='row'>
										<div class='col-sm-8'>
											<h4>Contents of the article</h4>
											<ol style={{color: "rgba(50, 170, 144, 1)"}}>
												<li>The infant's immune system.</li>
												<li> Symptoms of the common cold in infants.</li>
												<li>Symptoms of severe colds in infants.</li>
												<li>Symptoms of colds in summer.</li>
												<li>Treating cold symptoms in infants.</li>
											</ol>
										</div>
										<div class='col-sm-4'>
											<img src={image} alt='' />
										</div>
									</div>
								</div>
								<div className='para mt-5'>
									<ol>
										<li className='fs-2'>The infant's immune system</li>
										<p>
											The modern mother is under great pressure to do everything! We tend to value the image of parents who do everything in their
											power to provide a perfect life for their children Are you tired of raising children?Here's what's easy for you The modern
											mother is under great pressure to do everything! We tend to value the image of parents who do everything in their power to
											provide a perfect life for their children The modern mother is under great pressure to do everything! We tend to value the image
											of parents who do everything in their power to provide a perfect life for their children Are you tired of raising
											children?Here's what's easy for you The modern mother is under great pressure to do everything! We tend to value the image of
											parents who do everything in their power to provide a perfect life for their children
										</p>
										<li className='fs-2'>The infant's immune system</li>
										<p>
											The modern mother is under great pressure to do everything! We tend to value the image of parents who do everything in their
											power to provide a perfect life for their children Are you tired of raising children?Here's what's easy for you The modern
											mother is under great pressure to do everything! We tend to value the image of parents who do everything in their power to
											provide a perfect life for their children The modern mother is under great pressure to do everything! We tend to value the image
											of parents who do everything in their power to provide a perfect life for their children Are you tired of raising
											children?Here's what's easy for you The modern mother is under great pressure to do everything! We tend to value the image of
											parents who do everything in their power to provide a perfect life for their children
										</p>
									</ol>
								</div>
							</div>
							<div class='col-sm-4'>
								<div class='card border-0 card_child shadow p-4 text-center' style={{background: "#D9D9D9"}}>
									<div className='justify-content-center'>
										<img src={Ellipse} class='card-img-top w-50' alt='...' />
									</div>
									<div class='card-body card_txt'>
										<h5 class='card-title'>Are you tired of raising children?</h5>
										<p class='card-text'>
											The modern mother is under great pressure to do everything! We tend to value the image of parents who do everything in their
											power to provide a perfect life for their
											<br /> children
										</p>
									</div>
								</div>
								<div className='card mt-5 popular shadow rounded-3 border-0 h-25' style={{background: "rgba(221, 221, 221, 0.16)"}}>
									<h4 className='text-center fw-bold'>Most Popular</h4>
									<div className='baby_card mt-1'>
										<div class='card mb-3 shadow border-top border-3 border-warning rounded-3 border-0 bg-white p-2' style={{borderTop: ""}}>
											<div class='row'>
												<div className='d-flex'>
													<div class='col-md-4' style={{width: "40%"}}>
														<img src={baby} alt='...' />
													</div>
													<div class='col-md-8'>
														<div class='card-body'>
															<h5 class='card-title text-primary'>
																Causes of cold
																<br /> extremities in <br />
																infants
															</h5>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class='card mb-3 shadow border-top border-3 border-warning rounded-3 border-0 bg-white p-2' style={{borderTop: ""}}>
											<div class='row'>
												<div className='d-flex'>
													<div class='col-md-4' style={{width: "40%"}}>
														<img src={baby} alt='...' />
													</div>
													<div class='col-md-8'>
														<div class='card-body'>
															<h5 class='card-title text-primary'>
																Causes of cold
																<br /> extremities in <br />
																infants
															</h5>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class='card mb-3 shadow border-top border-3 border-warning rounded-3 border-0 bg-white p-2' style={{borderTop: ""}}>
											<div class='row'>
												<div className='d-flex'>
													<div class='col-md-4' style={{width: "40%"}}>
														<img src={baby} alt='...' />
													</div>
													<div class='col-md-8'>
														<div class='card-body'>
															<h5 class='card-title text-primary'>
																Causes of cold
																<br /> extremities in <br />
																infants
															</h5>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
