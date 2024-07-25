# Mon systeme d'authentifications (MongoDB)

### Etapes à realiser:

##### creation d'un fichier .env

```js
// créer cette variables et changer le contenue <...> par le vôtre.
    // si mongoDB Cloud
    MONGODB_URI_CLOUD = "mongodb+srv://<username>:<password>@<url-access>/<DBname>" 
    // si mongoDB auto heberge
    MONGODB_URI_HEBERGE = "mongodb://<username>:<password>@<url-access>/<DBname>?authSource=admin"
```

###### fichier src/mongoDB/mongoDBconfig.js

```js
    const urlExterne = process.env.MONGODB_URI_HEBERGE;
    const urlCloud = process.env.MONGODB_URI_CLOUD;
// choix de la variable ici
    const url = urlCloud;
```

##### Terminal

* npm install

* npm run dev

* localhost:3001