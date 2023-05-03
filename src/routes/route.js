
import App from "../App"
import ErrorPage from "../error-page"
import Sticky from "../page/sticky/index"

const roots = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sticky",
    element: <Sticky />,
    errorElement: <ErrorPage />,
  },
]

export default roots



