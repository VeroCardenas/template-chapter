import { PLAYERSMOCK } from '@core/mocks/player.mock';
import { FilterPlayersPipe } from './filter-players.pipe';

describe('FilterPlayersPipe', () => {
  let pipe: FilterPlayersPipe;


  beforeEach(() =>
    pipe = new FilterPlayersPipe()
  )

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('filter with firstName "Cristiano"', () => {

    const firstName = 'Cristiano';
    const lastNameExpect = 'Ronaldo';
    const resultExcept = 1;

    const resultPipe = pipe.transform(PLAYERSMOCK, firstName);

    expect(resultPipe.length).toBe(resultExcept);
    expect(resultPipe[0].lastName).toBe(lastNameExpect);

  })

});
