---
title: "Freelancers"
---

# Fields

Freelancers are the individual who work on the tasks defined in a project. 
Freelancer resources currently expose the following fields:
- id
- name
- email
- telephone
- country
- city
- area code
- currency
- next_available
- custom_data
- daily_rate
- hourly_rate
- instagram
- linkedin
- twitter
- website
- youtube


# Endpoints

## GET /freelancers/

List all the available freelancers for the given team. The result is a paginated list of freelancers.

## GET /freelancers/\<uuid:id\>/

Retrienve a freelancer given the corresponding ID.
