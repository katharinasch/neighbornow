json.extract! profile, :id, :about, :rating, :created_at, :updated_at
json.url profile_url(profile, format: :json)
