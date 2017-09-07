# Fields

Projects allow you to group your team’s work.
Project resources currently expose the following fields:

- id
- title
- description
- start_date
- end_date
- workgroup

# Endpoint

## GET /projects/

Get all projects.

## GET /projects/\<uuid:id\>/

Get a single project by UUID.

## POST /projects/

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

If you want to create a new project inside a certain workgroup you need to pass the right workgroup_id, for example:


```json
{
  "data": {
    "type": "project",
    "attributes": {
      "title": "Project with workgroup",
      "description": "Project with workgroup",
      "start_date": "2017-08-14",
      "end_date": "2017-08-20"
    },
    "relationships": {
      "workgroup": {
        "data": {"type": "workgroup", "id": 100}
      }
    }
  }
}
```
