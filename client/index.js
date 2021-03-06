import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import ApolloClient from 'apollo-client';
import SongList from './components/SongList';
import App from './components/App';
import SongCreate from './components/SongCreate';

const client = new ApolloClient({});
const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={SongList}/>
        <Route path="song/new" component={SongCreate}/>
      </Route>
      
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);

