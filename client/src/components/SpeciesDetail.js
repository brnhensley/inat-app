import PropTypes from 'prop-types';

export default function SpeciesDetail(props) {
    const { taxon, count, } = props.specie;
    const img = taxon.default_photo ?
        <img alt={taxon.default_photo.attribution} src={taxon.default_photo.medium_url} /> :
        "No available image";

    return (
        <div onClick={() => props.onSpeciesSelect(null)}>
            <h2>I'm a detail page</h2>
            {taxon.preferred_common_name} (<i>{taxon.name}</i>) - seen {count} time(s)
            <br />
            <a href={`https://www.inaturalist.org/taxa/${taxon.id}`}>View on iNaturalist</a>
            <br />
            {img}
            <hr />
        </div>
    );

}

SpeciesDetail.propTypes = {
    specie: PropTypes.object.isRequired,
    onSpeciesSelect: PropTypes.func.isRequired,
};
