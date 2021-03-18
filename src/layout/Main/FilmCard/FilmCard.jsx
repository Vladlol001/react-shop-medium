import sMod from './FilmCard.module.css';

function FilmCard(props) {
    return (
        <div className="card">
            <div className={sMod.photo}>
                <img src={props.Poster} alt="" />
            </div>
            <div className={sMod.description}>
                <div className={sMod.film__name}>{props.Title}</div>
                <div className={sMod.film__description}>{props.Type}</div>
                <div className={sMod.film__rating}>{props.Year}</div>
            </div>
        </div>
    );
}

export default FilmCard;
