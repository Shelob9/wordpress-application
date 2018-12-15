const fs = require('fs');
module.exports = function cachePage(dirName, page) {
	const {slug} = page;
	const fileName = cacheFileName(dirName, slug);
	fs.writeFileSync(fileName, JSON.stringify(page));
	return fileName;
};
