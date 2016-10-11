import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App'
import Article from './components/Article'
import ArticleCreate from './components/ArticleCreate'
import ArticleView from './components/ArticleView'
import ArticleEdit from './components/ArticleEdit'

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Article}/>
      <Route path="/articles" component={Article}>
        {/*
        <Route path="/:id" component={ArticleView}/>
        <Route path="/:id/edit" component={ArticleEdit}/>
        */}
      </Route>
      <Route path="/articles/new" component={ArticleCreate}/>
      <Route path="/articles/:id" component={ArticleView}/>
      <Route path="/articles/:id/edit" component={ArticleEdit}/>
      <Route path="*" component={Article}/>
    </Route>
  </Router>  
)
