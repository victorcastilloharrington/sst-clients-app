## Fullstack SST Application

### Description

The following is an app suite with the purpose of showcasing individual
fullstack skills in several technologies.

It consists of the following apps:

- Frontend app in React Vite (Apollo Client, Graphql Codegen, Tailwindcss, React Router)
- Backend Graphql API Lambda (Pothos, SST Graphql)

The app suite shows a list of clients on startup. It also allows users to
navigate to the clients detail page, where they show a list of events produced
by the client and client's contact details.

## Setup

- Note: The app requires the AWS CLI credentials installed locally on your machine.

- Run `npm install` on the project root, and on the `/packages/web` folder
- Run `npm run dev` on the project root to start the Graphql serer
- Once the app is running, navigate to the `/packages/web` folder and run `npm run dev` to start the React development environment.

## Deploy

- Run `npx sst deploy --stage <YOUR-PROD-STAGE>` to deploy to AWS.
