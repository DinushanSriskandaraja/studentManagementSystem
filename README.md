
# Student Management System

Welcome to the Student Management System, a web application designed to efficiently manage student details.

## Tech Stack

**Client:** HTML, Bootstrap, jQuery, Ajex

**Server:** ExprexxJs, MongoDB


## Installation

Install my-project with npm

#### Pre_requirement to Develop 
- Create an account on [mongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- install MongoDB Compass on [mongoDB](https://downloads.mongodb.com/compass/mongodb-compass-1.40.4-win32-x64.exe)
- Install [Node](https://nodejs.org/en/download)
- Install npm
```bash 
npm install -g npm
```

### Install dependencies separately (if needed)
expressJs middleware to save a lot of time
```bash
  npm install express --save
```
body-parser to parse HTTP request
```bash
  npm install --save body-parser
```
nodemon for easy code development
```bash
  npm install -g nodemon
```
to enable CORS with various options
```bash
  npm install cors --save
```
## Run Locally

Clone the project

```bash
  git clone https://github.com/SriDinu/studentManagementSystem
```

Go to the project directory

```bash
  cd studentManagementSystem
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```



## API Reference

#### Get all students details

```http
  GET /students/
```

| Parameter | Type     |
| :-------- | :------- | 
| `api_key` | `string` |

#### Get student by SID

```http
  GET /student/SID/${sid}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `sid`      | `int` | **Required**. SID of Student  |

#### Get student by email

```http
  GET /student/Email/${email}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. email of Student  |

#### Get student by first name

```http
  GET /student/FirstName/${fname}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `fname`      | `string` | **Required**. FirstName of Student  |

#### Get student by last name

```http
  GET /student/LastName/${lname}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `lname`      | `string` | **Required**. LastName of Student  |

#### Get student by nearest city

```http
  GET /student/NearCity/${city}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `city`      | `string` | **Required**. Nearest City of Student  |

#### Add new student

```http
  POST /students/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Form Data`      | `string` | **Required**. Form Data of Student  |

#### Update student details

```http
  PUT /student/sid/${SID}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `SID`      | `int` | **Required**. SID of Student  |

#### Delete student

```http
  DELETE /student/sid/${SID}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `SID`      | `int` | **Required**. SID of Student  |


## Authors
- [@SriDinu](https://github.com/SriDinu)
- [@danirudp](https://github.com/danirudp)
- [@Gopinaathan](https://github.com/Gopinaathan)
- [@Ken7373](https://github.com/Ken7373)


