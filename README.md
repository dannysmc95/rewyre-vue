# Rewyre Vue

## Introduction

This project is a boilerplate for using the `rewyre` package alongside the Vue framework, and uses the latest Vue 3 preview release. This project is solely built with TypeScript in both Node and Vue. The project comes packed with NPM commands to manage your workflow and offers a single domain/port for both development and production.

The project is built using the standard Vue CLI and offers both HMR and dev mode for inspection using the Vue devtools extension. See the commands section for available commands, and also comes with nodemon for automatic reload of the node application on file change.

This project uses HPM (http-proxy-middleware) to proxy the vue dev server through the node application, this means that the API is available under the same host and port, this does mean if you create an API that uses a simple / route then you may overwrite what you need. We suggest prefixing all controllers with `/api/<controller>` instead. Then you can access the API from the Vue app as: `fetch('/api/test/foo')`.

---

## Folder Structure

By default the folder structure has two main folders, `app` and `src`, the `src` folder contains all rewyre and node specific code, and the `app` folder contains the built Vue project from the CLI.

---

## Commands

The main commands are as follows, there are more commands specific to each app, but we suggest not touching them.

**Build Project**  
_The below will build both the Vue application and the rewyre application._  
```npm run build```

**Start Project**  
_The command will start the project, using the built files from the above, the vue dev server does not run._  
```npm run start```

**Start Development Server**  
_The below command will start the Vue development server, alongside starting the rewyre app under nodemon for automatic restart, please note this project uses ts-node in development._  
```npm run dev```

**Clean Distribution Folders**  
_The below will clean the dist folders for both Vue and rewyre._  
```npm run clean```

**Lint Rewyre**  
_The below will lint the rewyre project only._  
```npm run api:lint```

---

## Contributions

If you want to make some changes then please, feel free, but please note that when it comes to examples, this is supposed to be an extremely simple example of the rewyre and vue framework working together so adding too many examples and lots of _other_ third party dependencies will most likely be rejected unless it does improve the flow significantly.