import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PlayerService } from './player.service';
import { Player } from '@models/player.model';
import { environment } from 'src/environments/environment';
import { PLAYERSMOCK } from '@core/mocks/player.mock';
import { UPDATEDRESPONSEMOCK } from '@core/mocks/updated-response.mock';
import { DELETEDRESPONSEMOCK } from '@core/mocks/deleted-response.mock';


describe('PlayerService', () => {
  let service: PlayerService;
  let httpTestingController: HttpTestingController;
  const url = `${environment.apiPlayer}/player`;
  const mockPlayer: Array<Player> = PLAYERSMOCK;

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

  it('save soccer player', () => {
    service.savePlayer(PLAYERSMOCK[0]).subscribe( (player) => {
      expect(player).toEqual(mockPlayer)
    })

    const urlApi = `${url}`;
    const req = httpTestingController.expectOne(urlApi);

    expect(req.request.method).toEqual('POST');

    req.flush(mockPlayer);


  })

  it('edit soccer player', () => {
    service.editPlayer(PLAYERSMOCK[0]).subscribe( (UpdatedResponse) => {
      expect(UpdatedResponse).toEqual(UPDATEDRESPONSEMOCK)
    })

    const urlApi = `${url}/${PLAYERSMOCK[0].id}`;
    const req = httpTestingController.expectOne(urlApi);

    expect(req.request.method).toEqual('PATCH');

    req.flush(UPDATEDRESPONSEMOCK);


  })

  it('delete soccer player', () => {
    service.deletePlayer(PLAYERSMOCK[0]).subscribe( (deletedResponse) => {
      expect(deletedResponse).toEqual(DELETEDRESPONSEMOCK)
    })

    const urlApi = `${url}/${PLAYERSMOCK[0].id}`;
    const req = httpTestingController.expectOne(urlApi);

    expect(req.request.method).toEqual('DELETE');

    req.flush(DELETEDRESPONSEMOCK);


  })
});
