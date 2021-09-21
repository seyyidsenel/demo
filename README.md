## Introduction

- #### Users can list all firms and choose one of them.
- #### Users can easily post their request to the firm according to their needs.

## Code Samples

> Axios Instance &  Wrap

#### *`api/index.js`*
```` javascript
async function post (url, body, headers) {
  let header = '';
  if (headers) header = { headers: headers };
  return await axios.post(url,body,header).then((response) => {
    return handleResponse(response);
  }).catch((error) => {
    return handleError(error.response);
  })
}

async function put (url, body) {
  return await axios.put(url,body).then((response) => {
    return handleResponse(response);
  }).catch((error) => {
    return handleError(error.response);
  })
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete (url,headers) {
  let header = '';
  if (headers) header = { headers: headers };
  return await axios.delete(url,header).then((response) => {
    return handleResponse(response);
  }).catch((error) => {
    return handleError(error.response);
  })
}

// handler functions
function handleResponse (response) {
  if (response.status === 200) return response.data;
  return handleError(response);
}

// error handling
function handleError (response){
  // swagger'da api'lerin içerisinde error model'i göremediğim için responsu direk return ediyorum.
  // todo: herhangi bir handle işlemi yapılmadı.
  return response
}
````

### *`api/config.js`*
```` javascript
const baseURL = "https://private-1be47-duguncomapis.apiary-mock.com/";
const defaultConfiguration = {
  baseURL : baseURL,
  headers : { "Content-Type": "application/json" },
  timeout : 1000 * 30,
};

module.exports = defaultConfiguration;
````

> Api Repository

### *`repositories/repository.js`*
``` javascript
import CompanyRepository from '~/repositories/companies'
import service from '../api/index'

export default () => ({
  companyApi: CompanyRepository(service),
})

```

### *`repositories/companies.js`*
``` javascript
export default (service) => ({
  async list() {
    return await service.get('companies');
  },
  async getFormById(id) {
    return await service.get(`companies/${id}/forms`);
  },
})
```



## Installation

## Project setup
###### install all dependencies

npm install

### Compiles and hot-reloads for development
###### serve with hot reload at localhost:3000

npm run dev


### Compiles and minifies for production

npm run build


### Lints and fixes files

npm run lint
