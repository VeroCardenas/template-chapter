import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { POSITIONSMOCK } from '@core/mocks/position.mock';
import { environment } from 'src/environments/environment';

import { PositionService } from './position.service';

describe('PositionService', () => {
  let service: PositionService;
  let httpTestingController: HttpTestingController;
  let url = `${environment.apiPlayer}/position`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [PositionService],
    });
    service = TestBed.inject(PositionService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('search positions', () => {
    service.getPosition().subscribe((positions) => {
      expect(positions).toEqual(POSITIONSMOCK)
    })

    const urlApi = `${url}`;
    const req = httpTestingController.expectOne(urlApi);

    expect(req.request.method).toEqual('GET');

    req.flush(POSITIONSMOCK);


  })
});
