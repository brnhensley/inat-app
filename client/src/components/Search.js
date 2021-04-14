import { PropTypes } from 'prop-types';

export default function Search(props) {
    return (
        <form onSubmit={props.onSearchSubmit}>
            <label htmlFor="lat">Latitude</label>
            <input id="lat" name="lat" type="double" required="required" value="42.54300458868538" />
            <br />
            <label htmlFor="lng">Longitude</label>
            <input id="lng" name="lng" type="double" required="required" value="-118.45095664282164" />
            <br />
            <label htmlFor="radius">Distance from coordinates in KM</label>
            <input id="radius" name="radius" type="number" />
            <br />
            <label htmlFor="user">Not seen by this user id (Optional)</label>
            <input id="user" name="user" type="number" />
            <br />
            <fieldset className="row">
                <legend>Choose your taxon to narrow the search, by default all taxon are included</legend>
                <div className="column">
                    <div>
                        <input type="checkbox" id="Animalia" name="Taxa" value="Animalia" />
                        <label htmlFor="Animalia">Animals</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Plantae" name="Taxa" value="Plantae" />
                        <label htmlFor="Plantae">Plants</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Amphibia" name="Taxa" value="Amphibia" />
                        <label htmlFor="Amphibia">Amphibians</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Arachnida" name="Taxa" value="Arachnida" />
                        <label htmlFor="Arachnida">Arachnids</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Aves" name="Taxa" value="Aves" />
                        <label htmlFor="Aves">Birds</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Actinopterygii" name="Taxa" value="Actinopterygii" />
                        <label htmlFor="Actinopterygii">Ray-finned Fishes</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Insecta" name="Taxa" value="Insecta" />
                        <label htmlFor="Insecta">Insects</label>
                    </div>
                </div>
                <div className="column">
                    <div>
                        <input type="checkbox" id="Mammalia" name="Taxa" value="Mammalia" />
                        <label htmlFor="Mammalia">Mammals</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Mollusca" name="Taxa" value="Mollusca" />
                        <label htmlFor="Mollusca">Molluscs</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Reptilia" name="Taxa" value="Reptilia" />
                        <label htmlFor="Reptilia">Reptiles</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Chromista" name="Taxa" value="Chromista" />
                        <label htmlFor="Chromista">Kelps & Diatoms</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Fungi" name="Taxa" value="Fungi" />
                        <label htmlFor="Fungi">Fungi</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Protozoa" name="Taxa" value="Protozoa" />
                        <label htmlFor="Protozoa">Protozoa</label>
                    </div>
                </div>
            </fieldset>
            <br />
            <button type="submit">search</button>
        </form>
    );
}

Search.propTypes = {
    onSearchSubmit: PropTypes.func.isRequired
};