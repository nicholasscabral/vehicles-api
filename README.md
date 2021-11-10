<h1 align="center">
  Vehicles management API 
 </h1>
 
 <p align="center">
   Made with :coffee: by <a href="https://www.linkedin.com/in/nicholas-cabral-dos-anjos-13b3981a7/" target="_blank"> Nicholasscabral </a> 
 </p>
 
 <p align="center">
   <img src="https://img.shields.io/github/languages/top/nicholasscabral/vehicles-api">  
   <img src="https://img.shields.io/github/repo-size/nicholasscabral/vehicles-api"> 
 </p>
 
 <div align="center">
  
  [Technologies](#construction_worker-built-with) | 
  [Installing](#arrow_down-installing) |
  [Configuring](#gear-configuring) | 
  [How to run](#triangular_flag_on_post-usage) 
 </div>
 
 ## :construction_worker: Built with
 <ul>
    <li><a href="https://nodejs.org/en/">Node.js</a></li>
    <li><a href="https://adonisjs.com/">Adonis.js</a></li>
    <li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
    <li><a href="https://www.mysql.com/">MySQL</a></li>
    <li><a href="https://github.com/adonisjs/lucid">Lucid</a></li>
 </ul>

## :arrow_down: Installing

 <p>You can run:</p>

```
$ yarn
```

 <p>Or:</p>

```
$ npm install
```

## :gear: Configuring

 <p>The application use <a href="https://www.mysql.com/">MySQL</a> as database</p>
 
 ### MySQL
 <p>Is responsible for storing all the users, vehicles and tokens</p>
 <li>ORM: <a href="https://github.com/adonisjs/lucid">Lucid</a></li>

### Migrations

 <p>Running the database migrations.</p>

```
$ node ace migration:run
```

## :triangular_flag_on_post: Usage

 <p>to start up the development server, you can run:</p>

```
$ yarn dev
```

 <p>Or:</p>

```
$ npm run dev
```

## :computer: Development process
<p>here i'm gonna detail the developement process in stages </p>

### Stage 1
<p> First of all, even before starting the project I designed what the database would look like, with the entity relationships, and then created the project with the adonis cli. Once created i generated the users migration and model to run in the database. After the database were sync with the model i focused on the basic user CRUD, and also the login/authentication
</p>

### Stage 2
<p> In this stage i generated the vehicles migration and model, defining a Many to one relationship with user entity, and storing the user id as a foreign key in the vehicles table. Once the relationship was established i focused on the basic vehicle CRUD and others methods like returning the vehicle owner and listing vehicles from a user id (the vehicles that belongs to the user).
</p>

### Stage 3
<p> Here i first focused on refactor the methods and routes structure, then on implement authentication in the routes that needed. with all the methods refactored i developed the more elaborated methods like associate and dissasociate a vehicle from a user and locate a vehicle with coordinates
</p>

## :world_map: Routes
![api routes](https://github.com/nicholasscabral/corpvs-api/blob/master/public/api_routes.png)
