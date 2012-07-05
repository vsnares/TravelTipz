class Api::RegistrationsController < Devise::RegistrationsController
prepend_before_filter :require_no_authentication, :except => [:create]
  def create
    respond_to do |format|
      format.json do
        build_resource email: params[:email], password: params[:password], password_confirmation: params[:password_confirmation]
        if resource.save
          render json: resource.to_json, status: 200
        else
          render json: resource.errors.to_json, status: 422
        end
      end
    end
  end
  def destroy
    super
  end
end
