
import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'src', 'data', 'store.json');

// Ensure data directory exists
const dataDir = path.dirname(DB_PATH);
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

// Initial Data
const initialData = {
    users: [],
    products: []
};

// Helper to read DB
export function readDb() {
    if (!fs.existsSync(DB_PATH)) {
        fs.writeFileSync(DB_PATH, JSON.stringify(initialData, null, 2));
        return initialData;
    }
    try {
        const data = fs.readFileSync(DB_PATH, 'utf-8');
        return JSON.parse(data);
    } catch {
        return initialData;
    }
}

// Helper to write DB
export function writeDb(data: unknown) {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}
