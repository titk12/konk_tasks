import { faker } from '@faker-js/faker';
import { getRandomInt } from '../Utils/helpers';
import { IMovie, Genre, Country } from '../Types/movies';

export class Movie implements IMovie {
  private allGenres: Genre[] = [Genre.drama, Genre.action, Genre.fantasy];
  private allCountries: Country[] = [Country.US, Country.UK, Country.France];

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

  private get RandomDirectorName(): string {
    return faker.name.findName();
  }

  private get RandomTitle(): string {
    return `${faker.word.adjective()} ${faker.word.noun()}`;
  }

  private get RandomRating(): number {
    return faker.datatype.float({ min: 1, max: 10 });
  }

  private get RandomGenres(): number[] {
    return faker.helpers.arrayElements(this.allGenres);
  }

  private get RandomCountry(): number {
    return faker.helpers.arrayElement(this.allCountries);
  }
}
