import App from "./App.jsx";
import HomePage from "./pages/homePage/HomePage.jsx";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage.jsx";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "all",
        element: <AllQuizPage />,
      },
      {
        path: "random/:id",
        element: <RandomQuizPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];
