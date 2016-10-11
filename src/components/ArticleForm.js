import React, { Component } from 'react'

class ArticleForm extends Component {

  // state = {
  //   title: '',
  //   content: ''
  // }

  // constructor(props) {
  //   super(props)
  //   this.onTitleChange = this.onTitleChange.bind(this)
  //   this.onContentChange = this.onContentChange.bind(this)
  // }

  // onTitleChange(e) {
  //   this.setState({title: e.target.value})
  // }

  // onContentChange(e) {
  //   this.setState({content: e.target.value})
  // }

  render() {
    return (
      <form>
        <label>Title:</label>
        <input type="text" value={this.props.title} onChange={this.props.onTitleChange}/>
        <br/>
        <label>Content:</label>
        <input type="textarea" value={this.props.content} onChange={this.props.onContentChange}/>
      </form>
    )
  }
}

export default ArticleForm
