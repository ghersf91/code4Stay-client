API routes

| Route                         | HTTP Verb     | Description                     |
| -----------                   | -----------   | -----------                     |
| `/createProject`              |     POST      | Create a new project            |
| `/getAllProjects`             |     GET       | List of all projects            |
| `/getOneProject/:project_id`  |     GET       | Details of a specific project   |   
| `/editProject/:project_id`    |     POST      | Update a specific project       |   
| `/deleteProject/:project_id`  |     DELETE    | Delete a specific project       |   
| `/createUser`                 |     POST      | Create a new user               |
| `/getAllUsers`                |     GET       | List of all users               | 
| `/getOneUser/:user_id`        |     GET       | Details of a specific user      | 
| `/editUser/:user_id`          |     POST      | Edit a new user                 |    
| `/deleteUser/:user_id`        |     DELETE    | Delete a new user               |    

//Preguntar a German sobre endpoints de usuario en la API




Client routes

| Path                                     |  Description                                               |
| -----------                              | -----------                                                |
| `/`                                      | Home                                                       |
| `/signup`                                | Sign up as a user                                          |
| `/login`                                 | Log in to a specific user account                          |
| `/projects`                              | List of all projects                                       |   
| `/projects/:project_id/details`          | Details of a specific project                              |
| `/projects/:project_id/join`             | Join a specific project                                  |
| `/projects/:project_id/edit`             | Update a specific project                                  |
| `/projects/:project_id/delete`           | Delete a specific project                                  |
| `/projects/:region`                      | List of all countries in a specific region (continent)     |
| `/projects/:region/:country`             | List of all countries in a specific country                |
| `/users/:user_id`                        | Details of a specific user                                 |
| `/users/:user_id/edit`                   | Update a specific user                                     |
| `/users/:user_id/delete`                 | Delete a specific user                                     |
| `/users/:user_id/become_host`            | Form to become a host (after already signing up as user)   |
| `*`                                      | Error 404                                                     |






