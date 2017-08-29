# Overview

## Kalo API

The base URL of the Kalo API is `https://api.kalohq.com/publicapi/`, and exposes projects, tasks and freelancers at:

- https://api.kalohq.com/publicapi/projects/
- https://api.kalohq.com/publicapi/tasks/
- https://api.kalohq.com/publicapi/freelancers/

## Creating Kalo Apps

In order to use the Kalo API, you’ll first need to create a Kalo app, going to the [kalo app management page](https://developers.kalohq.com/apps/create).
You can think of a Kalo app as an integration point binto the Kalo platform.

A Kalo app allows you to define one or more Kalo app keys.
Kalo apps and kalo apps keys can only be created by admin users, and keys will have admin rights on the team resources, so they should not be shared with others.

## REST API

The Kalo API is a RESTful json API, and follows [the json api specification](http://jsonapi.org).
Each request needs to be authenticated using the authentication key previously generated, using the `X-Kalo-Api-Key` authentication header, which would look like this:

    X-Kalo-Api-Key: ea4fa026c1874a4fb40d1c4880d97bb4
    
For write http requests you also need to pass the content type, so in that case the header would look like:

    X-Kalo-Api-Key: ea4fa026c1874a4fb40d1c4880d97bb4
    Content-Type: application/json

The general status codes you can expect from the API are the following:

- **200: ok**

    The request was successful.
    *PATCH* and *GET* requests will return 200 on success, with information about the fetched/patched
    objects in the response body.
    
- **201: created**

    Resource successfully created, only POST *requests* will return this status code.

- **400: bad request**

    Something wrong with the data passed in, for example missing required fields, mismatching
    field types and other similar issues. The response body in this case should help detecting
    what the issue is.

- **401: unauthorized**

    Most likely a wrong authentication key.

- **403: forbidden**

    The authentication succeeded but you are trying to access data you are not allowed to access
    with that key.

- **404: not found**

    The page does not exists or some of the resources that were trying to be accessed during
    the request do not exist in the database.

    <!-- in theory this could also happen when you access something you do not have access -->
    <!-- to given how the filtering works. For example filtering by team and a certain id -->
    <!-- even if the given object would exist with that id if it's not part of that team -->
    <!-- we will still return 404 -->

- **500: server error**

    Most likely a bug in the Kalo API code, or something wrong in the request which should
    actually return a 400 but it's not handled correctly.
    These gets all logged to our tracking system and we will have enough context to be
    able to reproduce the problem.

    <!-- Should we add something else here about 502/503 or that's not really necessary? -->

## Request types

Allowed requests to the API can be split into these categories:

| URL             | Method | Operation                                       |
|-----------------|--------|-------------------------------------------------|
| `/$resource/$id/` | `GET`    | Fetch a single resource                         |
| `/$resource/`     | `GET`    | Fetch all the resources (paginating the result) |
| `/$resource/$id/` | `PATCH`  | Modify an existing resource                     |
| `/$resource/`     | `POST`   | Create a new resource                           |

