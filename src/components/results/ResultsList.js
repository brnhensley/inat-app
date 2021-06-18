import PropTypes from 'prop-types';
import Species from './Species';

export default function ResultsList(props) {
    return (
        <div id="resultsList">
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
        </div>
    );

}

ResultsList.propTypes = {
    species: PropTypes.array.isRequired,
    onSpeciesSelect: PropTypes.func.isRequired,
};
