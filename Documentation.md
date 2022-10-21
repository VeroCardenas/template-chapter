# Config Jest

https://www.youtube.com/watch?v=SDLX7iGCtB4

```bash
npm remove @types/jasmine jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter

npm install --save-dev jest jest-preset-angular @types/jest
```
# CLI Commands

```bash
# create proyect
ng new angular-tour-of-heroes
ng new angular-senority --routing --style=scss
# up server
ng s -o
ng s --port=4100
# create module
ng g m basic 
# create component
ng g c basic/counter
```

# Typescript

```js
name: string = "fjlaksdj"
age: number = 22;
phone: null = null;
phone1: undefined = undefined;
dataum: any = {};
status: string | number = 0;
```

## Interfaces (models)

```js
listCars: Array<CarModel> = {}
interface CarModel {
    brand: string;
    model: string
    year?: number; // optional date
}
```

## Generate Routes into our proyect 

```bash
ng generate module app-routing --flat --module=app
```

- add on app.module.ts

```js
import { RouterModule } from '@angular/router';
...
imports: [    RouterModule,  ]
```

- change the app-routing.modules.ts

```js
import { CounterComponent } from './basic/counter/counter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: 'basic/counter', 
      component: CounterComponent
    },
    {
      path: '**', //redirect warever route
      redirectTo: 'basic/counter'
    }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
```


## Steps Senority 

### Folder Structure

### Componentes

- each componente have your own folder 
- feature note reusable components
- contact
    - componetns
        contact.comopnte.html
        contant.componetne.csscc
        contanc.componetne.ts
    - services
        contact.services 

### main arquitecture

- modules 
    - configs(globals)
    - core 
        - guards
        - interceptors
        - http
        - mocks
        - services
    - home
        - compnents
            ...features compenntes
        - pages
        - auth-routing.module.ts
        - auth.module.ts
    - shared
        - components
        - directives
        - models
        - pipes
    - data *
- assets
    - scss 
        - partials
- enviroments

## app.module.ts

```js
imports: [
    AppRoutingModule
]
```

## app-routing.module.ts

```js
const routes : Routes = [
    path: 'auth',
    component: HomeComponent,
    loadChildren: () => import('@modules/auth/auth.module').then(m => m.AuthModule),// carga perezosa
    canActivate: [ValidateSEssionGuard]
]
```

# Importand 

- imports : hace que las declaraciones exportadas de otros módulos estén disponibles en el módulo actual
- Las declaraciones : son para hacer que las directivas (incluidos los componentes y las tuberías) del módulo actual estén disponibles para otras directivas en el módulo actual. Los selectores de directivas, componentes o conductos solo se comparan con el HTML si se declaran o importan.
- los proveedores: deben dar a conocer los servicios y valores a DI (inyección de dependencia). Se añaden al ámbito raíz y se inyectan a otros servicios o directivas que los tengan como dependencia.

## Pages and componentes

- into pages hacen referecntse associated with the route 
- it goitn a pages 
- coponentes jsut used into the pages

## Shared module 

- no tiene routing into your components


### Import icons lib

- into indes.html 

```html
<link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
```

### data 

- create folder data
- into that put your test data

``` json
{
    "data": [{
            "_id": 1,
            "name": "Getting Over",
            "album": "One Love",
            "cover": "https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg",
            "artist": {
                "name": "David Guetta",
                "nickname": "David Guetta",
                "nationality": "FR"
            },
            "duration": {
                "start": 0,
                "end": 333
            },
            "url": "http://localhost:3000/track.mp3"
        },
        {
            "_id": 2,
            "name": "Snow Tha Product || BZRP Music Sessions #39",
            "album": "BZRP Music Sessions",
            "cover": "https://is5-ssl.mzstatic.com/image/thumb/Features125/v4/9c/b9/d0/9cb9d017-fcf6-28c6-81d0-e9ac5b0f359e/pr_source.png/800x800cc.jpg",
            "artist": {
                "name": "Snow",
                "nickname": "Snow",
                "nationality": "US"
            },
            "duration": {
                "start": 0,
                "end": 333
            },
            "url": "http://localhost:3000/track-1.mp3"
        },
        {
            "_id": 3,
            "name": "Calypso (Original Mix)",
            "album": "Round Table Knights",
            "cover": "https://cdns-images.dzcdn.net/images/cover/1db3f8f185e68f26feaf0b9d72ff1645/350x350.jpg",
            "artist": {
                "name": "Round Table Knights",
                "nickname": "Round Table Knights",
                "nationality": "US"
            },
            "duration": {
                "start": 0,
                "end": 333
            },
            "url": "http://localhost:3000/track-2.mp3"
        },
        {
            "_id": 4,
            "name": "Bad Habits",
            "album": "Ed Sheeran",
            "cover": "https://www.lahiguera.net/musicalia/artistas/ed_sheeran/disco/11372/tema/25301/ed_sheeran_bad_habits-portada.jpg",
            "artist": {
                "name": "Ed Sheeran",
                "nickname": "Ed Sheeran",
                "nationality": "UK"
            },
            "duration": {
                "start": 0,
                "end": 333
            },
            "url": "http://localhost:3000/track-4.mp3"
        },
        {
            "_id": 5,
            "name": "BEBE (Official Video)",
            "album": "Giolì & Assia",
            "cover": "https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc",
            "artist": {
                "name": "Giolì & Assia",
                "nickname": "Giolì & Assia",
                "nationality": "IT"
            },
            "duration": {
                "start": 0,
                "end": 333
            },
            "url": "http://localhost:3000/track-3.mp3"
        },
        {
            "_id": 6,
            "name": "T.N.T. (Live At River Plate, December 2009)",
            "album": "AC/DC",
            "cover": "https://cdns-images.dzcdn.net/images/cover/ba5eaf2f3a49768164d0728b7ba64372/500x500.jpg",
            "artist": {
                "name": "AC/DC",
                "nickname": "AC/DC",
                "nationality": "US"
            },
            "duration": {
                "start": 0,
                "end": 333
            },
            "url": "http://localhost:3000/track-5.mp3"
        },
        {
            "_id": 7,
            "name": "50 Cent - Candy Shop (feat. Olivia)",
            "album": "50 Cent",
            "cover": "https://i.scdn.co/image/ab67616d0000b27391f7222996c531b981e7bb3d",
            "artist": {
                "name": "50 Cent",
                "nickname": "50 Cent",
                "nationality": "US"
            },
            "duration": {
                "start": 0,
                "end": 333
            },
            "url": "http://localhost:3000/track-6.mp3"
        },
        {
            "_id": 8,
            "name": "Bésame💋",
            "album": "Valentino Ft MTZ Manuel Turizo (Video Oficial)",
            "cover": "https://i1.sndcdn.com/artworks-000247627460-1hqnjr-t500x500.jpg",
            "artist": {
                "name": "Valentino",
                "nickname": "Valentino",
                "nationality": "CO"
            },
            "duration": {
                "start": 0,
                "end": 333
            },
            "url": "http://localhost:3000/track-7.mp3"
        }
    ]
}
```

- modifed tsconfig.json file (to accept json files)
- into tsconfig.json add
- permit import json files

```json
 "compilerOptions": {
    "resolveJsonModule": true
```


### defines colors 

- into assets> scss> util > color-palette

```scss
    $black: #070707;
    $white: #ffffff;
    $textColor: #1e6395;
    $textColor1: #85a2c2;
    $textColor2: #4dbdf0;
    $primaryColor: #4dbdf0;
    $secondaryColor: #4c9cc3;
    $evenColor: #edf8fe;
    $oddColor: #f5f9f9;
    $progress: #f7e257;
```

### structura de carpetas

- definir los modulos que va tener la applicacion
- define enviromentnsts si los existe
- create modules into app folder after that core into modules

```bask
app>modules
app>modules>core
```

- create share folder (componetne compartidos atoms->organism)

```bash
app>modules>shared
```

## Add router modules

- add the tag into app.component.html 

```html
<router-outlet></router-outlet>
```

## genereate the modules for you application
```bash
ng g m modules/auth --routing
ng g m modules/history --routing
ng g m modules/tracks --routing
ng g m modules/home --routing
```
- IMPORTANTE: modules just contain routing (rutas) and module (importar y declarar) file no more
- modules se usan par apoder importat librerias o otoras modules 
- declarar componente , directivas , filtros
- cada ruta de cada modulo esta vinculado al padre 
- modulos pueden tener o no rutas 
- module system 
- share information into modules

![texto_alternativo](./1.jpg){width=width height=height}

- componentes deben estar declarados en un module 
- asi que si no especificamos lo va hacer en el padre
 
```js
imports // solo otros modulos
declartatiosn  // delcarations,componentes, directives, pipes
providers // services
```

## Create shareModule (sin rutas)

```bash
ng g m modules/shared/shared --flat
```

- ejemplos nomenclatura modules

```js
@NgModule({ … }) 
export class AppModule { }
app.module.ts


@NgModule({ … }) 
export class HeroesModule { }
heroes.module.ts


@NgModule({ … }) 
export class VillainsModule { }
villains.module.ts


@NgModule({ … }) 
export class AppRoutingModule { }
app-routing.module.ts


@NgModule({ … }) 
export class HeroesRoutingModule { }
heroes-routing.module.ts

```

## Creacion de componentes compartidos

- creamos folder componentes into shared folder

```bash
ng g c shared/components/SideBar
ng g c shared/components/MediaPlayer
ng g c shared/components/HeaderUser
```

- ejemplo nomencaltura

```js
content_copy@Component({
  selector: 'admin-users'
})
export class UsersComponent {}
```

- automaticamtne realiza la declaraciton en el shared module

## config app-routing.module.ts (main)

- debemos hacer ikmportacion dinamico cargando el modulo 

```js
const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule)
  }
];
```

- cuando defines el module en el route module main despues si puedes configurar las rutas de los hijos

- contienet css , html , ts, spect .ts (opction prueba unitarias)

## config Pages into our modules

- with pages you can redirect your main app-routing to the pages

## config router modules child (home)

```js
const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
];

```

```bash
ng g c modules/home/pages/HomePage
```

## Alias (segun documentation)

- modificamos el archivo tsconfig.json

```json
   "paths": {
      // "@models/*": ["src/app/models/*"],
      // "@models": ["src/app/models/index"],
      "@modules/*": ["src/app/modules/*"],
      // "@modules": ["src/app/modules/shared/index"],
      "@core/*": ["src/app/modules/core/*"],
      "@core": ["src/app/modules/core/index"],
      "@shared/*": ["src/app/modules/shared/*"],
      "@shared": ["src/app/modules/shared/index"],
      
      // "@utils/*": ["src/app/utils/*"],
      // "@utils": ["src/app/utils/index"],
      // "@data/*": ["src/app/entities/*"],
      // "@data": ["src/app/entities/index"],
    },
```

## Pages 

- componente que esta relacionando directamente con una ruta 

## Exportar los componente compartidos

- primero exportamos el compnante que queremos usar en sahred modules

```js 
,
  exports: [
    SideBarComponent //exportamos el componente en el modulo 
  ] 
```

- despues vamos a importar el shared module en home module add en import el modulo a importar

```js
,
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule // importamos el modulo
  ]
```

## Llenamos de html y css nuestro componente compartido

- llenamos html estatico 
- llenamos scss 

## Contenido dinamico

- en file ts del componetne compartido 

```js
  linksMenu:Array<any> = [
    {
      name: 'Home',
      icon: 'uil-estate'
    },
    {
      name: 'Buscar',
      icon: 'uil-estate'
    },
    {
      name: 'Test',
      icon: 'uil-estate'
    }
  ];
```

- en html 

```html
<div class="side-bar">
    <div><i class="uil uil-ellipsis-h"></i></div>
    <ul class="side-bar__list list-one">
        <li  *ngFor="let item of linksMenu">
            <div class="list-wrapper-item">
                <i class="uil {{item.icon}}"></i>
                <span class="side-bar__list list-label">{{item.name}}</span>
            </div>
        </li>
    </ul>
    <div class="side-bar__separator"></div>
    <ul class="side-bar__list list-two">
        <!-- <li *ngFor="let item of mainMenu.accessLink">
            <div class="list-wrapper-item">
                <i [ngClass]="['uil',item.icon]"></i>
                <span class="side-bar__list list-label">{{item.name}}</span>
            </div>
        </li> -->
    </ul>
    <div class="side-bar__separator line-separator"></div>
    <ul class="side-bar__list list-three">
        <!-- <li *ngFor="let item of customOptions">
            <div class="list-wrapper-item">
                <span class="side-bar__list list-label">{{item.name}}</span>
            </div>
        </li> -->
    </ul>
</div>
```

## Generamos tipos de datos para nuestra data 

```js
mainMenu : {
    defaultOptions: Array<any>, accessLink: Array<any>
  } = {defaultOptions: [], accessLink: []}
```

## Componentes

- 8 cilcos de vida 
-
## ngOninit

- llamar a servicios he inicializar data

```js
 this.mainMenu.defaultOptions = [
      {
        name: 'HOme',
        icon: 'uil uil-estate',
        router: ['/']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'HOme',
        icon: 'uil uil-chart',
        router: ['/', 'favorites']
      }
    ]

```

## uso de [ngClass]

```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  mainMenu: {
    defaultOptions: Array<any>, accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }

  customOptions: Array<any> = []

  constructor() { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'auth']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        query: { hola: 'mundo' }
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]

  }

}
```

- cambiamos html para usar las propiedades 

```html
<div class="side-bar">
    <div><i class="uil uil-ellipsis-h"></i></div>
    <ul class="side-bar__list list-one">
        <li *ngFor="let item of mainMenu.defaultOptions">
            <div class="list-wrapper-item">
                <i [ngClass]="['uil',item.icon]"></i>
                <span class="side-bar__list list-label">{{item.name}}</span>
            </div>
        </li>
    </ul>
    <div class="side-bar__separator"></div>
    <ul class="side-bar__list list-two">
        <li *ngFor="let item of mainMenu.accessLink">
            <div class="list-wrapper-item">
                <i [ngClass]="['uil',item.icon]"></i>
                <span class="side-bar__list list-label">{{item.name}}</span>
            </div>
        </li>
    </ul>
    <div class="side-bar__separator line-separator"></div>
    <ul class="side-bar__list list-three">
        <li *ngFor="let item of customOptions">
            <div class="list-wrapper-item">
                <span class="side-bar__list list-label">{{item.name}}</span>
            </div>
        </li>
    </ul>
</div>
```


## Generamos todos nuestro modulos con sus Pages

## Configuramos router Outlet

- modificamos en app-routint.module.ts

```js
{
    path: '',
    component: HomePageComponent,// Carga comopente
    loadChildren: () => import (`./faklsdjflaksdjf).then(m=>m.HomeModule) // he hijo a la vez
}
``` 

- dentro de childs colocamos un 

```html
<router-outlet name="child"></router-outlet>
```

- call into the the HomeComponeten
- the componente not destroy the another componetes

## Niveles routing 

- routing principal 
    - home , autho
- second routin level
    - tracks, favorites, history
- third level
    - select home track 
- cambio dinamico 

# outlet  con nombre
en rutas especificar el nombre 

```js
const routes: Routes = [
    {
        path: '',
        component: Trackfkasdfa,
        outlet: 'child'
    }
]
]
```
- si no tiene nombre busca a nivel de jerarquia cual le pertenece

## ngContainer y maquetacion

- permite dividir es un tag vacio 
``` html

<ng-container *ngTemplateOutlet="artistZone"></ng-container>
<ng-template #artistZone>>
<!-- ...// here all html into ng-template -->
</ng-template> 
```

## ? 
si una propiedad no existe

## Pass personnalize data

```js
@Input() title: string = ''
@Input() mode: stirng = 'samall' | 'gbig'
```

```htlm
<app-section-generic [title]="nombre"></app-section-generic>
```

## [ngClass]

- array clases

```html
[ngClass] = "['class-1', 'clase-2']
[ngClass] = "['class-1', 'clase-2']
```

## | json pipes

- ver valores object into angular










