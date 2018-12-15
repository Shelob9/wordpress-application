const {Router} = require('express');
const getWpSite = require( './clients/getWpSite');
const getAllFromWordPress = require( './util/getAllFromWordPress');
const cacheFileName = require( './util/cacheFileName' );
const cachePage = require( './util/cachePage')



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
		const cacheFileExists = require( './util/cacheFileExists');
		const {slug} = req.params;

		const dirName = __dirname;
		if( cacheFileExists(dirName,slug)){
			const getCacheFile = require( './util/getCacheFile' );
			return res.status(200).json(getCacheFile(dirName,slug));
		}


		try {
			const site = await getWpSite(url);
			try {
				const page = await site.pages().slug( slug );
				//cachePage(dirName,page[0]);
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

	//Regenerate cache
	//@TODO Better way to do this.
	router.get('/api/cache/pages', async (req, res) => {
		const site = await getWpSite(url);
		const fs = require('fs');
		const dirName = __dirname;


		getAllFromWordPress(site.pages()).then(function( pages ) {
			const  created= [];
			Object.values(pages).forEach(page => {
				const {slug} = page;
				if( slug ){
					cachePage(dirName,page);
				}
			});

			return res.status(200).json(created);
		}
		);

	});

	return router;
};
