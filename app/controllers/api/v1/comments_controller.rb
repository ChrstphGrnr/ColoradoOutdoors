class Api::V1::CommentsController < ApplicationController
    
  
    # GET /comments
    def index
      @comments = comment.all
  
      render json: @comments
    end
  
  
    # POST /comments

    def create
      # binding.pry  
      @comment = Comment.new(comment_params)
  
      if @comment.save
        render json: @comment
      else
        render json: @comment.errors, status: :unprocessable_entity
      end
    end
  
    
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_attraction
        @attrac = comment.find(params[:id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def comment_params
        params.require(:commentContent).permit(:name, :content, :attraction_id)
      end
  end
  


  # , status: :created, location: @comment