defmodule Geo.PageController do
  use Geo.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
