import React, { Component } from 'react'
import ArticleForm from './ArticleForm'
import { Link, withRouter, browserHistory } from 'react-router'

class ArticleEdit extends Component {

  state = {
    id: 0,
    title: '',
    content: ''
  }

  constructor(props) {
    super(props)
    this.onTitleChange = this.onTitleChange.bind(this)
    this.onContentChange = this.onContentChange.bind(this)
    this.onEditClick = this.onEditClick.bind(this)
  }

  onTitleChange(e) {
    this.setState({title: e.target.value})
  }

  onContentChange(e) {
    this.setState({content: e.target.value})
  }
  
  componentWillMount() {
    this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
    
    fetch(`http://localhost:8080/articles/${this.props.params.id}`)
      .then(res => res.json())
      .then((article) => {
        this.setState(article)
      })
  }

  routerWillLeave(nextLocation) {
    return 'Are you sure?'
  }

  onEditClick(e) {
    fetch(`http://localhost:8080/articles/${this.state.id}`, {
        method: 'put',
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
        <ArticleForm onTitleChange={this.onTitleChange} title={this.state.title} content={this.state.content} onContentChange={this.onContentChange} />
        <input type="submit" value="Update" onClick={this.onEditClick}/>
      </div>
    );
  }
}

export default withRouter(ArticleEdit)
