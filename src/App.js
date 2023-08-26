import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Bibliografia from './components/pages/Bibliografia'
import Integrantes from './components/pages/Integrantes'
import Atualidades from './components/pages/Atualidades'
import Atualidades1 from './components/pages/Atualidades1'
import Atualidades2 from './components/pages/Atualidades2'
import Atualidades3 from './components/pages/Atualidades3'
import Atualidades4 from './components/pages/Atualidades4'
import Atualidades5 from './components/pages/Atualidades5'
import Historia from  './components/pages/Historia'
import Historia1 from './components/pages/Historia1'
import Historia2 from './components/pages/Historia2'
import Historia3 from './components/pages/Historia3'
import Historia4 from './components/pages/Historia4'
import Historia5 from './components/pages/Historia5'
import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/bibliografia">
            <Bibliografia />
          </Route>
          <Route exact path="/integrantes">
            <Integrantes />
          </Route>
          <Route exact path="/atualidades">
            <Atualidades />
          </Route>
          <Route exact path="/atualidades1">
            <Atualidades1 />
          </Route>
          <Route exact path="/atualidades2">
            <Atualidades2 />
          </Route>
          <Route exact path="/atualidades3">
            <Atualidades3 />
          </Route>
          <Route exact path="/atualidades4">
            <Atualidades4 />
          </Route>
          <Route exact path="/atualidades5">
            <Atualidades5 />
          </Route>
          <Route exact path="/historia">
            <Historia />
          </Route>
          <Route exact path="/historia1">
            <Historia1 />
          </Route>
          <Route exact path="/historia2">
            <Historia2 />
          </Route>
          <Route exact path="/historia3">
            <Historia3 />
          </Route>
          <Route exact path="/historia4">
            <Historia4 />
          </Route>
          <Route exact path="/historia5">
            <Historia5 />
          </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
