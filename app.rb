module Nesta
  class App
    not_found do
      haml(:error_page)
    end
  end
end