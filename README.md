# MEAN-TEST

by [CRS Consulting]

## Docker

Create the Docker image and run it locally

```bash
dockerImage=angular-cosmosdb
docker build -t $dockerImage .
docker run -d -p 3000:80 $dockerImage
```

## Requirements

1. Install the Angular CLI

    ```bash
    npm install -g @angular/cli
    ```


## Getting Started

1. Clone this repository

    ```bash
    git clone https://github.com/CRSConsulting/mean-test.git
    cd mean-test
    ```
1. Insert a new file in the root directory called ".env"
    ```
    copy and paste all the environment variables into the file
    ```
1. Install the npm packages

    ```bash
    npm i
    ```


## Running the app

1. Build the Angular app

    ```bash
    ng build --aot --prod
    ```

1. Launch the server

    ```bash
    node src/server/index.js
    ```

1. Open the browser to http://localhost:3000

