import Search from '../../components/Search';
import FilmCard from './FilmCard/FilmCard';

function Main(props) {
    return (
        <main className="main">
            <div className="container">
                <div>
                    <Search movieUpdate={props.movieUpdate} />
                </div>
                <div className="main__container">
                    {props.movies ? (
                        props.movies.map((film) => (
                            <FilmCard key={film.imdbID} {...film} />
                        ))
                    ) : (
                        <div style={{ margin: '30px auto', fontSize: '30px' }}>
                            Dont't have films with such name
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}

export default Main;
