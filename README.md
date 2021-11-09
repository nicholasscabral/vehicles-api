<h1 align="center">
  Vehicles management API 
 </h1>
 
 <p align="center">
   Made with :coffee: by <a href="https://www.linkedin.com/in/nicholas-cabral-dos-anjos-13b3981a7/" target="_blank"> Nicholasscabral </a> 
 </p>
 
 <p align="center">
   <img src="https://img.shields.io/github/languages/top/nicholasscabral/corpvs-api"> 
   <img src="https://img.shields.io/github/repo-size/nicholasscabral/nps-api"> 
   <img src="https://img.shields.io/badge/License-MIT-green.svg"> 
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

 <p>The application use <a href="https://www.sqlite.org/index.html">MySQL</a> as database</p>
 
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

### Routes
![aa](https://github.com/nicholasscabral/corpvs-api/blob/master/public/api_routes.png)
