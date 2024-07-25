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

##### Terminal

* npm install

* npm run dev

* localhost:3001