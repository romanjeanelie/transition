import React from 'react';
import { useTransition, animated, config } from 'react-spring';
import useRouter from '../useRouter';
import Page from '../components/Page';

const Home = () => {
  const { location } = useRouter();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { transform: 'translateY(-2000px)' },
    enter: { transform: 'translateY(0)' },
    leave: { transform: 'translateY(200px)' },
    config: config.stiff,
  });

  return (
    <Page style={{ background: 'lightpink' }}>
      {transitions.map(({ item, props, key }) => (
        <animated.span key={key} style={props}>
          Home
        </animated.span>
      ))}
    </Page>
  );
};

export default Home;
