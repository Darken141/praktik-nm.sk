module.exports = {
	siteMetadata: {
		title: `Praktik`,
		description: `Vodoinštalačný material PRAKTIK Nové Mesto nad Váhom. Vodovodné Batérie, ...`,
		author: `@coderkin`
	},
	plugins: [
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
