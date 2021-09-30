import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import CheckboxField from './CheckboxField';

export default function Search(props) {
    const [monthBoxes, setMonthBoxes] = useState({
        1: { text: "January", checked: false },
        2: { text: "February", checked: false },
        3: { text: "March", checked: false },
        4: { text: "April", checked: false },
        5: { text: "May", checked: false },
        6: { text: "June", checked: false },
        7: { text: "July", checked: false },
        8: { text: "August", checked: false },
        9: { text: "September", checked: false },
        10: { text: "October", checked: false },
        11: { text: "November", checked: false },
        12: { text: "December", checked: false },
    });
    const [taxonBoxes, setTaxonBoxes] = useState({
        "Plantae": { text: "Plants", checked: false },
        "Amphibia": { text: "Amphibians", checked: false },
        "Arachnida": { text: "Arachnids", checked: false },
        "Aves": { text: "Birds", checked: false },
        "Actinopterygii": { text: "Ray-finned Fishes", checked: false },
        "Insecta": { text: "Insects", checked: false },
        "Mammalia": { text: "Mammals", checked: false },
        "Mollusca": { text: "Molluscs", checked: false },
        "Reptilia": { text: "Reptiles", checked: false },
        "Chromista": { text: "Kelps & Diatoms", checked: false },
        "Fungi": { text: "Fungi", checked: false },
        "Protozoa": { text: "Protozoa", checked: false },
        "Animalia": { text: "Other Animals", checked: false }
    });


    const handleBoxChange = (boxList, setState) => {
        return (boxName) => {
            const updated = { ...boxList[boxName], checked: !boxList[boxName].checked };
            setState({ ...boxList, [boxName]: updated });
        };
    };

    return (
        <form onSubmit={props.onSearchSubmit}>
            <label htmlFor="coor">Coordinates</label>
            <input id="coor" name="coor" type="double" required="required" />
            {/* value="45.99347579633895, -121.85747631016253" /> */}
            <br />
            <label htmlFor="radius">Distance from coordinates in KM</label>
            <input id="radius" placeholder="10" name="radius" type="number" />
            <br />
            <label htmlFor="user">Unseen by this user ID or name (Optional)</label>
            <input id="user" name="user" type="double" />
            <br />
            <label htmlFor="threatened">Threatened only?</label>
            <input type="checkbox" id="threatened" name="threatened" value="Animalia" />
            <CheckboxField
                fieldName="taxa"
                legendText="Search by taxon, by default all taxon are included"
                boxList={taxonBoxes}
                onCheckboxChange={handleBoxChange(taxonBoxes, setTaxonBoxes)}
            />
            <CheckboxField
                fieldName="months"
                legendText="Search by time of year, by default it searches year round"
                boxList={monthBoxes}
                onCheckboxChange={handleBoxChange(monthBoxes, setMonthBoxes)}
            />
            <br />
            <button type="submit">SEARCH</button>
        </form>
    );
}

Search.propTypes = {
    onSearchSubmit: PropTypes.func.isRequired
};