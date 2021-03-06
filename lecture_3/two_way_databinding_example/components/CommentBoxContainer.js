define(["react", "react-dom", "./CommentBox.js"],
  (React, ReactDOM, CommentBox) => {

  var CommentBoxContainer = React.createClass({
    addComment: function(comment) {
      const previousComments = this.state.comments;
      const newComments = previousComments.concat(comment);
      this.setState({comments: newComments});
    },

    loadCommentsFromServer: function() {
      // Lets mock the comments, in reality would fetch it from server. In this case
      // we will simply add same comment to the old comments every time a pull is made from "server"
      const newComment = {"author": "Sukram", "text": "This is niss thing", "id": Date.now()};
      this.addComment(newComment);
    },

    getInitialState: function() {
      return {comments: []};
    },

    componentDidMount: function() {
      this.loadCommentsFromServer();
    },

    handleCommentSubmit: function(comment) {
      // You shouldnt mutate data, but we just mock out server response in here,
      // which has assigned ID to the comment
      comment.id = Date.now()
      this.addComment(comment)
    },

    render: function() {
      return (
        <CommentBox
          comments={this.state.comments}
          onCommentSubmit={this.handleCommentSubmit}
        />
      );
    }
  });

  return CommentBoxContainer;
});
