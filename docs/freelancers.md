# Fields

Freelancers are the individual who work on the tasks defined in a project. 
Freelancer resources currently expose the following fields:
- id
- email
- telephone
- next_available
- show_availability

# Endpoints

## GET /publicapi/freelancers/

List all the available tasks.

## GET /publicapi/freelancers/<uuid:id>/

Fetch a task given by its UUID.