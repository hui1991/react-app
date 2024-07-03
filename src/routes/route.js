import ErrorPage from '../error-page';
import Dropdown from '../pages/dropdown';
import Sticky from '../pages/sticky/index';
import UseEffectTest from '../pages/use-effect/index';
import Flex from '../pages/flex/index';
import TabDemo from '../pages/tab-demo/index';
import Array from '../pages/array/index';
import Center from '../pages/center/index';
import Home from '../pages/home';
import Test from '../pages/test';
import Modal from '../pages/modal/index';
import PointerEvents from '../pages/pointer-events/index';
import PrizeWheel from '../pages/prize-wheel/index';
import ClipPathShape from '../pages/clip-path-shape/index';
import Float from '../pages/float/index';
import AnchorBasic from '../pages/anchor-basic/index';
import AnchorMulti from '../pages/anchor-multi/index';
import AnchorInsetArea from '../pages/anchor-inset-area/index';
import AnchorDemo from '../pages/anchor-demo/index';
import GradientText from '../pages/gradient-text/index';
import Ellipsis from '../pages/ellipsis/index';
import Layout from '../pages/layout/index';

const roots = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },

  // layout
  {
    path: '/layout',
    element: <Layout />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/layout/center',
    element: <Center />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/layout/sticky',
    element: <Sticky />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/layout/flex',
    element: <Flex />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/layout/tab',
    element: <TabDemo />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/layout/float',
    element: <Float />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/layout/anchor-basic',
    element: <AnchorBasic />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/layout/anchor-multi',
    element: <AnchorMulti />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/layout/anchor-inset-area',
    element: <AnchorInsetArea />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/layout/anchor-demo',
    element: <AnchorDemo />,
    errorElement: <ErrorPage />,
  },



  {
    path: '/use-effect',
    element: <UseEffectTest />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/dropdown',
    element: <Dropdown />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/array',
    element: <Array />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/test',
    element: <Test />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/modal',
    element: <Modal />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/pointerEvents',
    element: <PointerEvents />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/prizeWheel',
    element: <PrizeWheel />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/clip-path-shape',
    element: <ClipPathShape />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/gradient-text',
    element: <GradientText />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/ellipsis',
    element: <Ellipsis />,
    errorElement: <ErrorPage />,
  },
];

export default roots;
