import React from "react";
import ReactDOM from "react-dom";

var CommentForm = React.createClass({
  getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    debugger
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    debugger
    if (!text || !author) {
      return;
    }
    debugger
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  },

  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Your text"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
});
CommentForm.propTypes = {
  onCommentSubmit: React.PropTypes.func.isRequired,
};
export { CommentForm as default };