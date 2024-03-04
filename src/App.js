import React from "react";
import axios from 'axios';
import Movie from './Movies';
import './App.css';

// 클래스형 컴포넌트를 사용하는 이유 => state를 사용하기 위해
class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };
    getMovies = async () => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
        this.setState({ movies, isLoading: false });
    }
    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        return (
            <section className="container"> 
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                    ) : (
                        <div className="movies">
                        { movies.map(movie => (
                        <Movie // App.js에서 API로 값가져온거를 무비컴포넌트에게 props전달
                            key={movie.id}
                            id={movie.id}
                            year={movie.year}
                            title={movie.title}
                            summary={movie.summary}
                            poster={movie.medium_cover_image}
                            genres={movie.genres}
                        />
                    )) }
                    </div>
                )}
            </section>


        );
    }
}
export default App;
