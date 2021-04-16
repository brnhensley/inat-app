import PropTypes from 'prop-types';
import Species from './Species';

export default function ResultsList(props) {
    return (
        <ol>
            {props.species.map((s, i) => {
                return (
                    <Species
                        key={s.taxon.id}
                        specie={s}
                        index={i}
                        onSpeciesSelect={props.onSpeciesSelect}
                    />
                );
            })}
        </ol>
    );

}

ResultsList.propTypes = {
    species: PropTypes.array.isRequired,
    onSpeciesSelect: PropTypes.func.isRequired,
};
