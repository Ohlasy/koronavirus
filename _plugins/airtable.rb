require 'json'
require 'airtable'
require 'active_support/all'

def get_records(api_key, base_id, table_name)
    client = Airtable::Client.new(api_key)
    table = client.table(base_id, table_name)
    return table.records()
end

def write_records(file_name, records)
    File.open(file_name, "w") do |f|
        data = records.map { |record| record.attributes }
        f.write(data.to_json)
    end
end

api_key = ENV["AIRTABLE_API_KEY"]

write_records("_data/restaurace.json", get_records(api_key, "appNCO9QEMVKRmd6d", "Restaurace"))
write_records("_data/poptavky.json", get_records(api_key, "app3gRRZZhUJ6p0Mb", "Poptávky"))