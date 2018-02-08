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


The value of custom_data varries as a result of the set of onboarding templates assigned to the specific freelancer. These are a set of key and value data pairs provided by the customer which may include any type of unstructured data useful to the onboarding and management of the freelancer for example type of equipment, location availability, and banking preferences. The data will be returned as a collection of keys / values grouped by template name. 

# Endpoints

## GET /freelancers/

List all the available freelancers for the given team. The result is a paginated list of freelancers.

## GET /freelancers/\<uuid:id\>/

Retrienve a freelancer given the corresponding ID.
