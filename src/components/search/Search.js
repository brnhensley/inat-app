import { PropTypes } from 'prop-types';
import TaxonSelect from './TaxonSelect';
import Months from './Months';

export default function Search(props) {

    return (
        <form onSubmit={props.onSearchSubmit}>
            <label htmlFor="coor">Coordinates</label>
            <input id="coor" name="coor" type="double" required="required" />
            {/* value="45.99347579633895, -121.85747631016253" /> */}
            <br />
            <label htmlFor="radius">Distance from coordinates in KM</label>
            <input id="radius" name="radius" type="number" />
            <br />
            <label htmlFor="user">Unseen by this user ID or name (Optional)</label>
            <input id="user" name="user" type="double" />
            <br />
            <label htmlFor="threatened">Threatened only?</label>
            <input type="checkbox" id="threatened" name="threatened" value="Animalia" />
            <TaxonSelect />
            <Months />
            <br />
            <button type="submit">SEARCH</button>
        </form>
    );
}

Search.propTypes = {
    onSearchSubmit: PropTypes.func.isRequired
};