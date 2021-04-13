import { PropTypes } from 'prop-types';

export default function Search(props) {
    return (
        <form onSubmit={props.onSearchSubmit}>
            <label htmlFor="lat">Latitude</label>
            <input id="lat" name="lat" type="double" required="required" />
            <br />
            <label htmlFor="lng">Longitude</label>
            <input id="lng" name="lng" type="double" required="required" />
            <br />
            <label htmlFor="radius">Distance from coordinates in KM</label>
            <input id="radius" name="radius" type="number" />
            <br />
            <label htmlFor="user">Not seen by this user id (Optional)</label>
            <input id="user" name="user" type="number" />
            <br />
            <fieldset>
                <legend>Choose your taxon to narrow the search, by default all taxon are included</legend>
                <div>
                    <input type="checkbox" id="Animalia" name="Animalia" value="Animalia" />
                    <label for="Animalia">Animals</label>
                </div>
                <div>
                    <input type="checkbox" id="Plantae" name="Plantae" value="Plantae" />
                    <label for="Plantae">Plants</label>
                </div>
                <div>
                    <input type="checkbox" id="Amphibia" name="Amphibia" value="Amphibia" />
                    <label for="Amphibia">Amphibians</label>
                </div>
                <div>
                    <input type="checkbox" id="Arachnida" name="Arachnida" value="Arachnida" />
                    <label for="Arachnida">Arachnids</label>
                </div>
                <div>
                    <input type="checkbox" id="Aves" name="Aves" value="Aves" />
                    <label for="Aves">Birds</label>
                </div>
                <div>
                    <input type="checkbox" id="Actinopterygii" name="Actinopterygii" value="Actinopterygii" />
                    <label for="Actinopterygii">Ray-finned Fishes</label>
                </div>
                <div>
                    <input type="checkbox" id="Insecta" name="Insecta" value="Insecta" />
                    <label for="Insecta">Insects</label>
                </div>
                <div>
                    <input type="checkbox" id="Mammalia" name="Mammalia" value="Mammalia" />
                    <label for="Mammalia">Mammals</label>
                </div>
                <div>
                    <input type="checkbox" id="Mollusca" name="Mollusca" value="Mollusca" />
                    <label for="Mollusca">Molluscs</label>
                </div>
                <div>
                    <input type="checkbox" id="Reptilia" name="Reptilia" value="Reptilia" />
                    <label for="Reptilia">Reptiles</label>
                </div>
                <div>
                    <input type="checkbox" id="Chromista" name="Chromista" value="Chromista" />
                    <label for="Chromista">Chromista (Kelps & Diatoms)</label>
                </div>
                <div>
                    <input type="checkbox" id="Fungi" name="Fungi" value="Fungi" />
                    <label for="Fungi">Fungi</label>
                </div>
                <div>
                    <input type="checkbox" id="Protozoa" name="Protozoa" value="Protozoa" />
                    <label for="Protozoa">Protozoa</label>
                </div>
                <div>
                    <input type="checkbox" id="unknown" name="unknown" value="unknown" />
                    <label for="unknown">unknown</label>
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