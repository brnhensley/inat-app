import PropTypes from 'prop-types';

export default function Species(props) {
    const { taxon, count, } = props.specie;
    const { index, onSpeciesSelect } = props;
    const img = taxon.default_photo ?
        <img alt={taxon.default_photo.attribution} src={taxon.default_photo.medium_url} /> :
        "No available image";


    return (
        <li onClick={() => onSpeciesSelect(index)}>
            {taxon.preferred_common_name} (<i>{taxon.name}</i>) - seen {count} time(s)
            <br />
            <a href={`https://www.inaturalist.org/taxa/${taxon.id}`}>View on iNaturalist</a>
            <br />
            {img}
            <hr />
        </li>
    );

}

Species.propTypes = {
    specie: PropTypes.object.isRequired,
    onSpeciesSelect: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
};
