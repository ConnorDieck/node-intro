const fs = require('fs');
const process = require('process');
const axios = require('axios');

function cat(path) {
	fs.readFile(path, 'utf-8', (err, data) => {
		if (err) {
			console.log(err);
			process.exit(1);
		}
		console.log(`file contents: ${data}`);
	});

	console.log('reading file');
}

async function webCat(path) {
	try {
		res = await axios.get(path);
		HTML = res.data;
		console.log(HTML);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
}

let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
	webCat(path);
} else {
	cat(path);
}
