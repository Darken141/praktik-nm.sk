import React from 'react';
// import { graphql } from 'gatsby';

import './footer.scss';

// export const query = graphql`
// 	query LocationQuery {
// 		allLocationData {
// 			edges {
// 				node {
// 					results {
// 						geometry {
// 							location_type
// 							location {
// 								lat
// 								lng
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// `;

const Footer = () => {
	return (
		<footer>
			<div>
				<h2>© 2020 CODERKIN</h2>
			</div>
		</footer>
	);
};

export default Footer;
