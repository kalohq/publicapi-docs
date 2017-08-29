# Fields

Tasks are individual units of work that belong to projects, and are assigned to freelancers.

Task resources currently expose the following fields:
- id
- freelancer
- managers
- summary
- description
- rate
- rate_type ['fixed' | 'daily' | 'hourly']
- status ['ongoing' | 'completed']
- project

# Endpoints

## GET /publicapi/tasks/

List all the available tasks.

## GET /publicapi/tasks/\<uuid:id\>/

Fetch a task given by its UUID.

## POST /publicapi/tasks/

Creates a new task, see this example request, where you have to
replace the right `project uuid` and the right `manager id`.

```json
{
  "data": {
    "type": "task",
    "attributes": {
      "description": "Sample task created",
      "summary": "Sample task"
    },
    "relationships": {
      "project": {
        "data": {
          "type": "project",
          "id": "608172ce-27ab-4dfe-82d9-9bd6e28c2366"
        }
      },
      "managers": {
        "data": [
          {
            "type": "user",
            "id": 100
          }
        ]
      }
    }
  }
}
```

## PATCH /publicapi/tasks/\<uuid:id\>/


Modify a task sending partial information about the fields to change.

This is used for both:

- change task attributes
- change the task state, where the supported possible states are (at the moment)

  + ONGOING
  + COMPLETED

So for example suppose we have a task which is currently pending, and
we want to make it switch to ongoing, we just have to patch the task
passig the new status we want.


```json
    {
        "data": {
            "type": "task",
            "attributes": {
                "status": "ongoing"
            }
        }
    }
```

If instead we want to change some attributes (like summary for
example) we will still use `patch` in the same way but passing the
attribute we want to change with the right value in.

```json
    {
        "data": {
            "type": "task",
            "attributes": {
                "summary": "New summary"
            }
        }
    }
```

These two changes can also be merged of course (so changing state and
some attributes at the same time).
