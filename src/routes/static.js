import express from 'express';  // Add this import
import path from 'path';
import { Router } from 'express';
import { fileURLToPath } from 'url'; // Importa a função para converter a URL em caminho de arquivo

const router = Router();

// Obtém o caminho do arquivo atual e o diretório atual
const __filename = fileURLToPath(import.meta.url); // Converte a URL do módulo em um caminho de arquivo
const __dirname = path.dirname(__filename); // Obtém o diretório do arquivo

// Serve static files from the public folder
router.use(express.static(path.join(__dirname, '../../public'))); // Now express is defined

// Serve the index.html file for the root path
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// Serve the about.html file for the /about route
router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/about.html'));
});

// Serve the doc.html file for the /doc route
router.get('/doc', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/doc.html'));
});

export default router;
