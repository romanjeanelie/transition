import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter, NavLink } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import useRouter from './useRouter';
import GlobalStyles from './styles';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  const { location } = useRouter();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100vw, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-20vw, 0, 0)' },
  });

  return (
    <>
      <GlobalStyles />

      <Navigation>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </Navigation>

      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
          </Switch>
        </animated.div>
      ))}
    </>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
