class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  respond_to :json

  before_action :configure_permitted_parameters_on_signin, :configure_permitted_parameters_on_signup, if: :devise_controller?

  protected

  def configure_permitted_parameters_on_signup
    # devise_parameter_sanitizer.for(:sign_up) << :username
    # devise_parameter_sanitizer.permit(:sign_up) do |user_params|
    #   user_params.permit(:username, :email)
    # end

    # devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
    devise_parameter_sanitizer.for(:sign_up) << :username
  end

  def configure_permitted_parameters_on_signin
    # devise_parameter_sanitizer.permit(:sign_in) do |user_params|
    #   user_params.permit(:username, :email)
    # end

    # devise_parameter_sanitizer.permit(:sign_in, keys: [:username])
    devise_parameter_sanitizer.for(:sign_in) << :username
  end
end
