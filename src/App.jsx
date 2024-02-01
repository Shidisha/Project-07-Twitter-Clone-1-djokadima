
import Layout from "./components/layout.jsx";
import SideBare from './pages/side-bare.jsx';
import Home from './pages/home.jsx';
import TrendsBare from './pages/trend-bare.jsx';
import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
      <SideBare/>
      <Home/>
      <TrendsBare/>
    </Layout>
  );
}
