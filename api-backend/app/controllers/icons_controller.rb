class IconsController < ApplicationController

  def random
    icon = Icon.all.sample
    render json: icon
  end

end
