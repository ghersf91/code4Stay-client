Project URL: https://code4stay.netlify.app/

code4stay is Workaway for computer programmers. We connect organizations working in socially or enviromentally minded projects, with volunteers with technical skills willing to work in exchange for food and shelter.

code4stay was created using Node and React, as well as the Google Maps API, by Alejandro Fisman and Ghers Fisman. It has an authentication system for users, that can be volunteers or hosts. Projects can be created, and joiners can rate them and leave comments on their page.

We hope you enjoy it!


We present below the Client routes:


| Path                                     |  Description                                               |
| -----------                              | -----------                                                |
| `/`                                      | Home                                                       |
| `/signup`                                | Sign up as a user                                          |
| `/login`                                 | Log in to a specific user account                          |
| `/projects`                              | List of all projects                                       |   
| `/projects/:project_id/details`          | Details of a specific project                              |
| `/projects/:project_id/join`             | Join a specific project                                    |
| `/projects/:project_id/edit`             | Update a specific project                                  |
| `/projects/:project_id/delete`           | Delete a specific project                                  |
| `/projects/:region`                      | List of all countries in a specific region (continent)     |
| `/projects/:region/:country`             | List of all countries in a specific country                |
| `/users/:user_id`                        | Details of a specific user                                 |
| `/users/:user_id/edit`                   | Update a specific user                                     |
| `/users/:user_id/delete`                 | Delete a specific user                                     |
| `/users/:user_id/become_host`            | Form to become a host (after already signing up as user)   |
| `/search/:continents`                    | Searches projects in continents                            |
| `*`                                      | Error 404                                                  |






