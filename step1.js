const fs = require('fs');
const process = require('process');

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

cat(process.argv[2]);
