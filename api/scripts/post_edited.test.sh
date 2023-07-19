#!/bin/bash

# Define the function test_endpoint
test_endpoint() {
  local data_path=$1
  local endpoint_url="http://localhost:3000/api/handler"
  local event_type="post"
  local event="post_edited"
  
  # Print the request body
  echo "Request Body:"
  cat "$data_path"
  
  # Send POST request with headers and request body, and print the response
  local response=$(curl -X POST -H "Content-Type: application/json" -H "x-discourse-event-type: $event_type" -H "X-Discourse-Event: $event" --data @"$data_path" "$endpoint_url")
  echo "Response:"
  echo "$response"
}

# Call the test_endpoint function with the provided argument
sample_data_path="../example-events/edited-post.json"
test_endpoint "$sample_data_path"
