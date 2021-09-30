import PropTypes from 'prop-types';
import Species from './Species';

export default function ResultsList(props) {
    return (
        <div id="resultsList">
            {props.speciesList.map((s, i) => {
                return (
                    <Species
                        key={s.taxon.id}
                        species={s}
                        index={i}
                    />
                );
            })}
        </div>
    );

}

ResultsList.propTypes = {
    speciesList: PropTypes.array.isRequired,
};
