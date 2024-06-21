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

const roots = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/sticky',
    element: <Sticky />,
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
    path: '/flex',
    element: <Flex />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/tab',
    element: <TabDemo />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/array',
    element: <Array />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/center',
    element: <Center />,
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
    path: '/float',
    element: <Float />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/anchor-basic',
    element: <AnchorBasic />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/anchor-multi',
    element: <AnchorMulti />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/anchor-inset-area',
    element: <AnchorInsetArea />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/anchor-demo',
    element: <AnchorDemo />,
    errorElement: <ErrorPage />,
  },
];

export default roots;
