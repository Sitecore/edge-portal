# Edge Portal
A NextJS application, pulling data from Sitecore Experience Edge for Content Hub.

# To run locally

## Temporary Manual step till we have a Vercel account
- Create a .env file in the root of your repo on disk (It is intentionally excluded in the .gitignore to stop secret leak)
- Populate it as so

```
CH_TOKEN="<<CH_PREVIEW_TOKEN>>"
CH_URL="<<CH_PREVIEW_URL>>"
```

You can find the Token & URL values in the Teams message named 'Vercel Team Account' in the 'Edge Portal' team.

## Tie your local project to Vercel (Not possible till we have our vercel account, ignore for now)
Note this only needs to be performed once when setting up the project locally
- Install Vercel CLI by following instructions at `https://vercel.com/download`
- Run `vercel link` and follow prompts to connect your local repo to the Vercel project
- Run `vercel env pull` to create your local environment file

## Run the Project
- Run `npm i` to install the node dependencies
- Run `npm run dev` to run the site
- Access the site on `http://localhost:3000`