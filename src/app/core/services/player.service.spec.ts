import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PlayerService } from './player.service';
import { Player } from '@models/player.model';


describe('PlayerService', () => {
  let service: PlayerService;
  let httpTestingController: HttpTestingController;
  const url = 'https://api-exercise-q3.herokuapp.com/player';
  const mockPlayer: Array<Player> =
  [
    {
        "id": 48,
        "firstName": "Cristiano",
        "lastName": "Ronaldo",
        "image": "https://www.realmadrid.com/img/vertical_380px/cristiano_550x650_20180917025046.jpg",
        "attack": 50,
        "defense": 60,
        "skills": 22,
        "idAuthor": 6,
        "idPosition": 10
    },
    {
        "id": 351,
        "firstName": "fasdf",
        "lastName": "fasdf",
        "image": "asdfasdf",
        "attack": 50,
        "defense": 50,
        "skills": 50,
        "idAuthor": 6,
        "idPosition": 1
    },
    {
        "id": 353,
        "firstName": "Figo",
        "lastName": "Nazario",
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgSFhUYGBgaGBoaHBgaGhgcGBgYGBgZGRgaGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHjQrJCQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIARAAuQMBIgACEQEDEQH/",
        "attack": 50,
        "defense": 50,
        "skills": 50,
        "idAuthor": 6,
        "idPosition": 1
    },
    {
        "id": 354,
        "firstName": "ffigo2",
        "lastName": "figo",
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/81/Luis_Figo-2009_cropped.jpg",
        "attack": 50,
        "defense": 50,
        "skills": 50,
        "idAuthor": 6,
        "idPosition": 1
    },
    {
        "id": 425,
        "firstName": "",
        "lastName": "",
        "image": "",
        "attack": 50,
        "defense": 50,
        "skills": 50,
        "idAuthor": 6,
        "idPosition": 1
    },
    {
        "id": 432,
        "firstName": "",
        "lastName": "",
        "image": "",
        "attack": 10,
        "defense": 10,
        "skills": 10,
        "idAuthor": 6,
        "idPosition": 0
    }
]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
      ],
      providers: [PlayerService],
    });
    service = TestBed.inject(PlayerService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpTestingController.verify();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('search soccer player', () => {
    service.getPlayers().subscribe( (player) => {
      expect(player).toEqual(mockPlayer)
    })

    const urlApi = `${url}`;
    const req = httpTestingController.expectOne(urlApi);

    expect(req.request.method).toEqual('GET');

    req.flush(mockPlayer);


  })
});
