import { faker } from '@faker-js/faker';
import { getRandomInt } from '../Utils/helpers';
import { IMovie, Genre, Country } from '../Types/Movies';

const allGenres: Genre[] = [Genre.drama, Genre.action, Genre.fantasy];
const allCountries: Country[] = [Country.US, Country.UK, Country.France];

export class Movie implements IMovie {
  constructor(
    public director: IMovie['director'] = undefined!,
    public genres: IMovie['genres'] = undefined!,
    public title: IMovie['title'] = undefined!,
    public country: IMovie['country'] = undefined!,
    public duration: IMovie['duration'] = getRandomInt(30, 200),
    public rating: IMovie['rating'] = undefined!,
  ) {
    this.director = director ?? this.RandomDirectorName;
    this.genres = genres ?? this.RandomGenres;
    this.title = title ?? this.RandomTitle;
    this.country = country ?? this.RandomCountry;
    this.rating = rating ?? this.RandomRating;
  }

  private get RandomDirectorName(): IMovie['director'] {
    return faker.name.findName();
  }

  private get RandomTitle(): IMovie['title'] {
    return `${faker.word.adjective()} ${faker.word.noun()}`;
  }

  private get RandomRating(): IMovie['rating'] {
    return faker.datatype.float({ min: 1, max: 10 });
  }

  private get RandomGenres(): IMovie['genres'] {
    return faker.helpers.arrayElements(allGenres);
  }

  private get RandomCountry(): IMovie['country'] {
    return faker.helpers.arrayElement(allCountries);
  }
}

export let MoviesStorage: IMovie[] = [...Array(getRandomInt(5, 10))].map(() => new Movie());
