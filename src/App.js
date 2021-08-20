import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import StreamCreate from './components/Streams/StreamCreate';
import StreamDelete from './components/Streams/StreamDelete';
import StreamEdit from './components/Streams/StreamEdit';
import StreamList from './components/Streams/StreamList';
import StreamShow from './components/Streams/StreamShow';
import Header from './components/Header';
import history from './history';

function App() {
  return (
    <div className="ui container">


      <Router history={history}>
        <div>
          <Header />
          <Switch>




            <Route path='/' exact component={StreamList} />
            <Route path='/streams/new' component={StreamCreate} />
            <Route path="/streams/edit/:id" component={StreamEdit} />
            <Route path='/streams/delete/:id' component={StreamDelete} />
            <Route path='/streams/:id' component={StreamShow} />
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
