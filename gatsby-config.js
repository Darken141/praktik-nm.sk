module.exports = {
	siteMetadata: {
		title: `Praktik`,
		description: `Vodoinštalačný material PRAKTIK Nové Mesto nad Váhom. Vodovodné Batérie, ...`,
		author: `@coderkin`
	},
	plugins: [
		// {
		// 	resolve: 'gatsby-source-googlemaps-geocoding',
		// 	options: {
		// 		key: 'AIzaSyAWJm6cxzq48liRWhS45Otn0DnfncMvc_k',
		// 		address: 'Slovakia'
		// 	}
		// },
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /assets/ // See below to configure properly
				}
			}
		},
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// The property ID; the tracking code won't be generated without it
				trackingId: 'UA-150072420-1'
				// Defines where to place the tracking script - `true` in the head and `false` in the body
				//   head: false,
				//   // Setting this parameter is optional
				//   anonymize: true,
				//   // Setting this parameter is also optional
				//   respectDNT: true,
				//   // Avoids sending pageview hits from custom paths
				//   exclude: ["/preview/**", "/do-not-track/me/too/"],
				//   // Delays sending pageview hits on route update (in milliseconds)
				//   pageTransitionDelay: 0,
				//   // Enables Google Optimize using your container Id
				//   optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
				//   // Enables Google Optimize Experiment ID
				//   experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
				//   // Set Variation ID. 0 for original 1,2,3....
				//   variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
				//   // Any additional optional fields
				//   sampleRate: 5,
				//   siteSpeedSampleRate: 10,
				//   cookieDomain: "example.com",
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `praktik`,
				short_name: `prkt`,
				start_url: `/`,
				background_color: `#c7d8f0`,
				theme_color: `#c7d8f0`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
