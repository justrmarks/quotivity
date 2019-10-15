class QuotesController < ApplicationController

  def random
    quote = Quote.all.sample
    render json: quote
  end

end
