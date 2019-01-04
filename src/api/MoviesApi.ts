import IResource from "typings/IResource";

let movies: object[] = []

export default class MoviesApi implements IResource {

  create(data: object) {
    movies.push(data)
    return data
  }

  findMany() {
    return movies
  }
}