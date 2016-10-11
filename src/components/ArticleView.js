import React, { Component } from 'react'
import Article from './Article'
import { browserHistory } from 'react-router'

class ArticleView extends Component {

  state = {
    article: [],
    articleSelected: {
      title: '',
      content: ''
    }
  }

  constructor(props) {
    super(props)
    this.onDeleteClick = this.onDeleteClick.bind(this)
    this.onEditClick = this.onEditClick.bind(this)
  }

  componentDidMount() {
    fetch(`http://localhost:8080/articles/${this.props.params.id}`)
      .then(res => res.json())
      .then((article) => {
        this.setState({articleSelected: article})
      })
  }
  
  componentWillReceiveProps(nextProps) {
    fetch(`http://localhost:8080/articles/${nextProps.routeParams.id}`)
      .then(res => res.json())
      .then((article) => {
        this.setState({articleSelected: article})
      })
  }

  onDeleteClick() {
    if (confirm('Are you sure?') === true) {
      fetch(`http://localhost:8080/articles/${this.state.articleSelected.id}`, {
          method: 'delete'
        })
        .then(res => res.json())
        .then(article => {
          const path = `/articles`
          browserHistory.push(path)
        })
    }
  }

  onEditClick() {
    const path = `/articles/${this.state.articleSelected.id}/edit`
    browserHistory.push(path)
  }

  render() {
    return (
      <div>
        <Article/>
        <div>
          <h1>{this.state.articleSelected.title}</h1>
          <p>{this.state.articleSelected.content}</p>
        </div>
        <button type="button" onClick={this.onDeleteClick}>Delete</button>
        <button type="button" onClick={this.onEditClick}>Edit</button>
      </div>
    );
  }
}

export default ArticleView;
