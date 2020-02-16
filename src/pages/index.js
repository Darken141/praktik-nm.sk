import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import sink from '../images/sink.png';

import Experience from '../assets/vector_experiece.svg';
import Products from '../assets/vector_products.svg';
import VectorSink from '../assets/vector_sink.svg';

import Card from '../components/card/card';

import './styles/index.scss';

const IndexPage = () => {
	const cardsInformations = [
		{
			id: 1,
			image: Experience,
			content: 'Viac ako 15 rokov skúseností'
		},
		{
			id: 2,
			image: Products,
			content: 'produktov	prispôsobených moderným trendom'
		}
	];

	return (
		<Layout>
			<SEO title="Home" />
			<section className="heading-section">
				<div className="illustration">
					<img src={sink} alt="sink background" />
					<div>
						<VectorSink className="vector-sink" />
					</div>
				</div>

				<div className="title">
					<h1 className="main-heading">VODOINŠTALAČNÝ MATERIÁL</h1>
				</div>
			</section>

			<section className="benefits">
				{cardsInformations.map(({ id, image, content }) => <Card key={id} Image={image} content={content} />)}
			</section>
		</Layout>
	);
};

export default IndexPage;
