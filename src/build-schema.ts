import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log({ __filename, __dirname });

const modelsDir = path.join(__dirname, '..', 'prisma', 'models');

let mergedSchema = '';

// Read all .prisma files from the models directory
try {
	const files = fs.readdirSync(modelsDir);
	const prismaFiles = files.filter(file => path.extname(file) === '.prisma');

	prismaFiles.forEach(file => {
		const fullPath = path.join(modelsDir, file);
		try {
			console.log('Reading schema from:', fullPath);
			const schema = fs.readFileSync(fullPath, 'utf8');
			mergedSchema += schema + '\n';
		} catch (err) {
			console.error(`Error reading file ${fullPath}:`, err);
			return;
		}
	});
} catch (err) {
	console.error(`Error reading directory ${modelsDir}:`, err);
	process.exit(1);
}

// Append generator client and datasource db configurations
let prismaConfig = `
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["multiSchema"]
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
`;

prismaConfig += mergedSchema;

const outputPath = path.join(__dirname, '..', 'prisma', 'schema.prisma');
console.log('Writing merged schema to:', outputPath);

try {
	fs.writeFileSync(outputPath, prismaConfig);
	console.log('Schemas merged successfully.');
} catch (err) {
	console.error(`Error writing file ${outputPath}:`, err);
}
