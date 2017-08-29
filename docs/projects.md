# Fields

Projects allow you to group your team’s work.
Project resources currently expose the following fields:

- id
- title
- description
- start_date
- end_date

# Endpoint

## GET /publicapi/projects/

Get all projects.

## GET /publicapi/projects/\<uuid:id\>/

Get a single project by UUID.

## POST /publicapi/projects/

Creates a new project, as shown in this example:

```json
{
  "data": {
    "type": "project",
    "attributes": {
      "title": "Project title",
      "description": "Project description",
      "start_date": "2017-08-14",
      "end_date": "2017-08-20"
    }
  }
}
```

