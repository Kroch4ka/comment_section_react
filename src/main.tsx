import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './assets/styles/root.css'
import {CommentsProvider} from "./providers/CommentsProvider.tsx";

createRoot(document.getElementById('root')!).render(
    <CommentsProvider>
        <App/>
    </CommentsProvider>
)
