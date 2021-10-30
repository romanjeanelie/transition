import React, { useState } from 'react';
import styled from 'styled-components';
import { useTransition, useSprings, animated, config } from 'react-spring';
import useRouter from '../useRouter';
import Page from '../components/Page';

const About = () => {
  const { location } = useRouter();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { transform: 'scale(10)' },
    enter: { transform: 'scale(1)' },
    leave: { transform: 'scale(10)' },
    config: config.stiff,
  });

  const [toggle, setToggle] = useState(false);
  const boxTransitions = useTransition(toggle, null, {
    from: {
      opacity: 0,
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <Page
      onClick={() => setToggle(!toggle)}
      style={{ background: 'lightblue' }}
    >
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={{ textAlign: 'center', ...props }}>
          About
          <small style={{ display: 'block', fontSize: '12px' }}>
            click to toggle animating elements
          </small>
        </animated.div>
      ))}

      <Wrapper>
        {boxTransitions.map(
          ({ item, key, props }) => item && <Box key={key} style={props} />,
        )}
      </Wrapper>
    </Page>
  );
};

const Wrapper = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  width: 50vw;
`;

const Box = styled(animated.div)`
  width: 100px;
  xheight: 100px;
  margin-right: 20px;
  background-color: black;
  border-radius: 4px;

  &:last-child {
    margin-right: 0;
  }
`;

export default About;
