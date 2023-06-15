import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import About from "./pages/About/About.jsx";
import Tasks from "./pages/Tasks/Tasks";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/blog", element: <Blog /> },
    { path: "/about", element: <About /> },
    { path: "/tasks", element: <Tasks /> },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
