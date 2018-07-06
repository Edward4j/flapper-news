class PostsController < ApplicationController
  before_filter :authenticate_user!, only: [:create, :upvote]
  before_action :set_post, only: [:show, :upvote]

  def index
    respond_with Post.all
  end

  def create
    respond_with Post.create(post_params)
  end

  def show
    respond_with @post
  end

  def upvote
    @post.increment! :upvotes

    respond_with @post
  end

  private

    def post_params
      params.require(:post).permit(:title, :link)
    end

    def set_post
      @post ||= Post.find params[:id]
    end
end
