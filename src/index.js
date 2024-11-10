import express from 'express';
import studentsRoutes from './routes/students.js';
import staticPagesRoutes from './routes/static.js';
import path from 'path';
import { fileURLToPath } from 'url';  // Para converter a URL em um caminho de arquivo

const app = express();

// Obtendo o equivalente do __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware para servir arquivos estáticos (html, css e js) da pasta 'public'
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/students', studentsRoutes);
app.use('/', staticPagesRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
