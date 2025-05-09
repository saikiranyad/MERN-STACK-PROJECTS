// Helper function to find a reply by ID
const findreplybyid = (comments, replyId) => {
    for (const comment of comments) {
      for (const reply of comment.replies) {
        if (reply._id.toString() === replyId) {
          return reply;
        }
        // Recursively check nested replies
        for (const nestedReply of reply.replies) {
          if (nestedReply._id.toString() === replyId) {
            return nestedReply;
          }
        }
      }
    }
    return null;
  };

module.exports = findreplybyid