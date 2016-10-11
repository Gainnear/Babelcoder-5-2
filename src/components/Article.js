import React, { Component } from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'

class Article extends Component {

  state = {
    articles: []
  }

  componentDidMount() {
    fetch('http://localhost:8080/articles')
      .then(res => res.json())
      .then((articles) => {
        this.setState({articles: articles})
      })
  }

  onCreateClick() {
    const path = `/articles/new`
    browserHistory.push(path)
  }

  render() {
    return (
      <div>
        <h1><Link to={`/articles/`}>Articles</Link></h1>
        <ul>
          {this.state.articles.map(article => (
            <li key={article.id}>
              <Link to={`/articles/${article.id}`}>{article.title}</Link>
            </li>
          ))}
        </ul>
        <button type="button" onClick={this.onCreateClick}>Create</button>
      </div>
    )
  }
}

export default Article
