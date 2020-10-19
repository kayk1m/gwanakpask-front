import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';

import { saveIndex } from '../lib/utils';

import AppContext from '../AppContext';

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

const IndexPage: React.FC = () => {
  const { index, setIndex, withLayout } = React.useContext(AppContext);

  return (
    <>
      <Head>
        <title>title</title>
      </Head>
      <Root>
        <div>
          <div>withLayout: {String(withLayout)}</div>
          <div>index: {index}</div>
          <Button
            onClick={() => {
              setIndex(index + 1);
              saveIndex(index + 1);
            }}>
            setIndex ++
          </Button>
          <Button
            onClick={() => {
              setIndex(index - 1);
              saveIndex(index - 1);
            }}>
            setIndex --
          </Button>
        </div>
      </Root>
    </>
  );
};

export default IndexPage;
