module Nesta
  class App
    not_found do
      haml(:my_error_page)
    end
    error 400..510 do
      haml(:my_error_page)
    end
  end
end