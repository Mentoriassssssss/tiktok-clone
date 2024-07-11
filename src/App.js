import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes/index.js';
import defaultLayout from './components/defaultLayout/index.js';
import Home from './pages/home.js';
function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Layout = route.layout || defaultLayout;
              const Page = route.component;
              console.log(Page)
              return ( 
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                     <Page/>
                    </Layout>
                  }
                />
              )
            })}
          </Routes>
        </div>
      </Router>
  );
}

export default App;
