class QuotesController < ApplicationController

  def random
    data = {}
    quote = Quote.all.sample
    data[:quote]=quote
    data[:author] = quote.icon.name
    render json: data
  end

end
