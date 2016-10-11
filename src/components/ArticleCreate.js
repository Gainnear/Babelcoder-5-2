import React, { Component } from 'react'
import ArticleForm from './ArticleForm'
import { Link, withRouter, browserHistory } from 'react-router'

class ArticleCreate extends Component {

  state = {
    title: '',
    content: ''
  }

  constructor(props) {
    super(props)
    this.onTitleChange = this.onTitleChange.bind(this)
    this.onContentChange = this.onContentChange.bind(this)
    this.onCreateClick = this.onCreateClick.bind(this)
  }

  componentWillMount() {
    this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
  }

  routerWillLeave(nextLocation) {
    return 'Are you sure?'
  }

  onTitleChange(e) {
    this.setState({title: e.target.value})
  }

  onContentChange(e) {
    this.setState({content: e.target.value})
  }

  onCreateClick(e) {
    fetch('http://localhost:8080/articles', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      })
      .then(res => res.json())
      .then(article => {
        const path = `/articles`
        browserHistory.push(path)
      })
  }

  render() {
    return (
      <div>
        <h1><Link to={`/articles/`}>Articles</Link></h1>
        <ArticleForm onTitleChange={this.onTitleChange} onContentChange={this.onContentChange} />
        <input type="submit" value="Create" onClick={this.onCreateClick}/>
      </div>
    );
  }
}

export default withRouter(ArticleCreate)
