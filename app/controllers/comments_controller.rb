class CommentsController < ApplicationController
  before_action :set_post, only: [:create, :upvote]

  def create
    # post = Post.find params[:post_id]
    comment = @post.comments.create comment_params

    respond_with @post, comment
  end

  def upvote
    comment = @post.comments.find params[:id]

    respond_with @post, comment
  end
  
  private
  
    def comment_params
      params.require(:comment).permit(:body)
    end

    def set_post
      @post ||= Post.find params[:post_id]
    end
end
