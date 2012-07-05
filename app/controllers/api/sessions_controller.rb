class Api::SessionsController < Devise::SessionsController
prepend_before_filter :require_no_authentication, :except => [:create]
  def create
    respond_to do |format|
      format.json do
        params[:api_user] = {}
        params[:api_user][:email] = params[:email]
        params[:api_user][:password] = params[:password]

        resource = warden.authenticate!(auth_options)
        sign_in(resource_name, resource)
        render json: resource, status: 200
      end
    end
  end
end
