const key = 'e9a1219cfe2ab40aaceeb18a4dfa670f'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}language=en-US`
}

export default requests