const {Router} = require('express');
const getWpSite = require( './clients/getWpSite');



module.exports = (url = 'https://localhost', router = new Router()) => {
	router.get('/api/pages', async (req, res) => {
		try {
			const site = await getWpSite(url);
			try {
				const pages = await site.pages();
				return res.status(200).json(pages);
			} catch (e) {
				res.status(500);
				return res.json(e);
			}
		} catch (e) {
			res.status(500);
			return res.json(e);
		}
	});

	router.get('/api/pages/:slug', async (req, res) => {
		try {
			const site = await getWpSite(url);
			const {slug} = req.params;
			try {
				const page = await site.pages().slug( slug );
				return res.status(200).json(page[0]);
			} catch (e) {
				res.status(500);
				return res.json(e);
			}
		} catch (e) {
			res.status(500);
			return res.json(e);
		}
	});

	router.get('/api/pages/page/:page', async (req, res) => {
		try {
			const site = await getWpSite(url);
			const {page} = req.params;
			try {
				const pages = await site.pages().perPage(2).page( page )
				return res.status(200).json(pages);
			} catch (e) {
				res.status(500);
				return res.json(e);
			}
		} catch (e) {
			res.status(500);
			return res.json(e);
		}
	});

	return router;
};
