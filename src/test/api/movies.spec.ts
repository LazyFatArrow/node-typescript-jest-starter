import IResource from '../../typings/IResource'
import MoviesApi from '../../api/MoviesApi'

const moviesApi: IResource = new MoviesApi()

describe('Movies API', () => {
  it('should create a new movie', () => {
    const movieData: object = {
      name: 'Pirates of the caribbean',
      rating: 8.5
    }

    const movie: object = moviesApi.create(movieData)

    expect(movie).toEqual(movieData)
  })
})