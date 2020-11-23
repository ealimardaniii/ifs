import React from 'react';
import Layout from 'components/generic/Layout';
import Main from 'screens/Main';
import {Provider} from 'react-redux';
import store from 'redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Main />
      </Layout>
    </Provider>
  );
};
export default App;
