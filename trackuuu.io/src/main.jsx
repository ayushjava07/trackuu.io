import { createRoot } from 'react-dom/client';
import App from './App';
// If you have this file

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);