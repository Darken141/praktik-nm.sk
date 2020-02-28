import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import sink from '../images/sink.png';

import Experience from '../assets/vector_experiece.svg';
import Products from '../assets/vector_products.svg';
import VectorSink from '../assets/vector_sink.svg';
import VectorBath from '../assets/vector_bath.svg';

import Card from '../components/card/card';
import OpeningHours from '../components/opening-hours/opening-hours';
import Contact from '../components/contact/contact';

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

	const openingHours = [
		{
			id: 1,
			day: 'PON',
			time: '08:00 - 17:00'
		},
		{
			id: 2,
			day: 'UTO',
			time: '08:00 - 17:00'
		},
		{
			id: 3,
			day: 'STR',
			time: '08:00 - 17:00'
		},
		{
			id: 4,
			day: 'ŠTV',
			time: '08:00 - 17:00'
		},
		{
			id: 5,
			day: 'PIA',
			time: '08:00 - 17:00'
		},
		{
			id: 6,
			day: 'SO',
			time: '08:00 - 12:00'
		},
		{
			id: 7,
			day: 'NE',
			time: 'zatvorené'
		}
	];

	return (
		<Layout>
			<SEO title="Home" />
			<section id="heading-section">
				<div className="title">
					<h1 className="main-heading">VODOINŠTALAČNÝ MATERIÁL</h1>
				</div>
				<div className="illustration">
					<img src={sink} alt="sink background" />
					<div>
						<VectorSink className="vector-sink" />
					</div>
				</div>
			</section>

			<section id="benefits">
				{cardsInformations.map(({ id, image, content }) => <Card key={id} Image={image} content={content} />)}
			</section>

			<section id="opening-hours">
				<h2 className="heading">OTVÁRACIE HODINY</h2>
				<div className="content">
					<VectorBath />
					<OpeningHours openingHours={openingHours} />
				</div>
			</section>

			<section id="contact">
				<h2 className="heading">KONTAKT</h2>
				<Contact />
			</section>
		</Layout>
	);
};

export default IndexPage;