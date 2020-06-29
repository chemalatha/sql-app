## How to run server
    server is a simple node express server, which contacts a dynamics 365 rest api to get /post customers
    1. `cd server`
    2. `yarn`
    3. `npm run dev` - for dev mode (preferable for now)
    4. the server starts running at 5000 port by default, can be changed according for config/dev.env file PORT variable
## How to run client
    client is a react application created with create-react-app package
    1. `cd client`
    2. `yarn`
    3. `npm run start`
    4. client starts running at 3000 port by default
    
P.S: for frontend to run correctly, the apis have to return the correct info, error handling is not done correctly.