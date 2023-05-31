import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Quiz from "./pages/quiz/Quiz";
import Modal from "./pages/modal/Modal";
import Layout from "./components/Layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {
  React.useEffect(() => {
    document.title = "6-mini projects";
  }, []);
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/modal" element={<Modal />} />
        </Route>
        <Route
          path="*"
          element={
            <h1>
              OOOPS... <br />
              Page Not Found!
            </h1>
          }
        />
      </>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
