import { createBrowserRouter } from "react-router-dom"; 
import TelaInicial from "../assets/Tela inicial/TelaInicial";

const router = createBrowserRouter([
    {path: "link1", element: <TelaInicial/>},
    {path: "/contato", element: <Contato />},
    {path: "/generica", element: <Generica />},
    {path: "/final", element: <Final />},
])

export default router;