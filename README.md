# The Guardian API

The Open Platform is a public web service for accessing all the content the Guardian creates, categorised by tags and section. 
To get started, You need an key to successfully authenticate against the API.

[Guardian query] (<https://content.guardianapis.com/search?api-key=)>)

## Endpoints

The Guardian Open Platform API provide several endpoints to retrieve different items:

Content
Tags
Sections
Editions
Single item
For each endpoint:

- results can be filtered using parameters
- response contains minimal detail by default but more data can be exposed using parameters
- results are returned as paginated list of containing, by default, 10 entries per page