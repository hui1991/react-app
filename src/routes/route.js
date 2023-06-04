
import App from "../App"
import ErrorPage from "../error-page"
import Dropdown from "../pages/dropdown"
import Sticky from "../pages/sticky/index"
import UseEffectTest from "../pages/use-effect/index"
import Flex from "../pages/flex/index"
import TabDemo from "../pages/tab-demo/index"

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
  {
    path: "/use-effect",
    element: <UseEffectTest />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dropdown",
    element: <Dropdown />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/flex",
    element: <Flex />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tab",
    element: <TabDemo />,
    errorElement: <ErrorPage />,
  },
]

export default roots



