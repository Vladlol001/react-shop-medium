import React from 'react';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import Main from './layout/Main/Main';
const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            isLoading: false,
        };
    }

    movieUpdate = (newMovie, type = 'all') => {
        this.setState({ isLoading: true });
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${newMovie}${
            type !== 'all' ? `&type=${type}` : ''
        }`;
        fetch(url)
            .then((response) => response.json())
            .then((commits) =>
                this.setState({ movies: commits.Search, isLoading: false })
            )
            .catch((err) => console.log(err));
    };

    componentDidMount() {
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}`;
        fetch(url)
            .then((response) => response.json())
            .then((commits) => this.setState({ movies: commits.Search }))
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <>
                <Header />
                <Main
                    movies={this.state.movies}
                    movieUpdate={this.movieUpdate}
                />
                <Footer />
            </>
        );
    }
}

export default App;
