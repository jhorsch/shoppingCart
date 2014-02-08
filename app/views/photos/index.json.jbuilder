json.array!(@photos) do |photo|
  json.extract! photo, :id, :title, :desc, :price, :id_num
  json.url photo_url(photo, format: :json)
end
