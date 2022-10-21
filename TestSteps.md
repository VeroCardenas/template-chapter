# Configure emmet on scss

```bash
# ctrl + , => open setting 
# search emmet
# add  
```
```json 
"emmet.includeLanguages": {
    "SCSS": "CSS"
}
```

# Configure Pug on Angular 

- https://medium.com/hackernoon/using-pug-jade-with-angular-with-cli-5592b7ee24e6
- install pug-cli

```bash
npm install pug-cli -D
```

- add script on package json 

```json
"scripts": {
    "pug-it": "pug src",
    "pug-it:w": "pug src -P -w"
},
```


# Define Icons Library (Optional)
    .
    ├── src                  
     ├── index.html  

```html
<!-- iconscout -->
<!-- https://iconscout.com/unicons/getting-started/line -->
<link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
```

# Define Fonts (Optional)
    .
    ├── src                  
     ├── index.html  

```html
<!-- fonts -->
<!-- https://fonts.google.com/specimen/Poppins-->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
```

#  Define Static Assets

    .
    ├── src                  
     ├── assets

- Note: Angualr is configure to get the static asset from this folder

# Define Dataset

    .
    ├── src                  
     ├── data
      ├── data
       ├── tracks.json
       ├── player.json
       ├── dataset.json  (your test data here)

```json 
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

# Modify tsconfig.json accept import json files

    .
    ├── tsconfig.json

```json
{
  "compileOnSave": false,
  "compilerOptions": {
    "resolveJsonModule": true, // add this line to import json files into the components
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "es2017",
    "module": "es2020",
    "lib": [
      "es2020",
      "dom"
    ]
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}
```

# Define Base Styles

    .
    ├── src
     ├── assets
      ├── scss
       ├── util
        ├── color-palette.scss (color according the app)
        ├── typography.scss (fonts base)
        ├── base.scss (base)

```scss
// color-palette.scss
$shadow1: rgb(0 0 0 / 35%) 0px 8px 24px;
$shadow-2: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
$borderRadius1: .25rem;
$borderRadius2: .5rem;
$animation-1: 200ms; 
```

```scss
// typography.scss
$color1: #1DB954;
$color2: #323232;
$color3: #000000;
$color4: #FFFFFF;
$color5: #181818;
```

```scss
// base.scss
$fontSize1: 1rem;
$fontSize2: 1.2rem;
$fontSize3: 1.8rem;
$fontFamily1: 'Poppins', sans-serif;
```

# 