import { useState } from 'react';

export default function TaxonSelect() {
    const [expanded, setExpanded] = useState(false);
    let classes = ["column", expanded ? "showing" : "hiding"];

    return (
        <>
            <div>
                <fieldset className="row">
                    <legend onClick={() => setExpanded(!expanded)}>Click to search by taxon, by default all taxon are included</legend>
                    <div className={classes.join(" ")}>
                        <div>
                            <input type="checkbox" id="Animalia" name="taxa" value="Animalia" />
                            <label htmlFor="Animalia">Animals</label>
                        </div>
                        <div>
                            <input type="checkbox" id="Plantae" name="taxa" value="Plantae" />
                            <label htmlFor="Plantae">Plants</label>
                        </div>
                        <div>
                            <input type="checkbox" id="Amphibia" name="taxa" value="Amphibia" />
                            <label htmlFor="Amphibia">Amphibians</label>
                        </div>
                        <div>
                            <input type="checkbox" id="Arachnida" name="taxa" value="Arachnida" />
                            <label htmlFor="Arachnida">Arachnids</label>
                        </div>
                        <div>
                            <input type="checkbox" id="Aves" name="taxa" value="Aves" />
                            <label htmlFor="Aves">Birds</label>
                        </div>
                        <div>
                            <input type="checkbox" id="Actinopterygii" name="taxa" value="Actinopterygii" />
                            <label htmlFor="Actinopterygii">Ray-finned Fishes</label>
                        </div>
                        <div>
                            <input type="checkbox" id="Insecta" name="taxa" value="Insecta" />
                            <label htmlFor="Insecta">Insects</label>
                        </div>
                    </div>
                    <div className={classes.join(" ")}>
                        <div>
                            <input type="checkbox" id="Mammalia" name="taxa" value="Mammalia" />
                            <label htmlFor="Mammalia">Mammals</label>
                        </div>
                        <div>
                            <input type="checkbox" id="Mollusca" name="taxa" value="Mollusca" />
                            <label htmlFor="Mollusca">Molluscs</label>
                        </div>
                        <div>
                            <input type="checkbox" id="Reptilia" name="taxa" value="Reptilia" />
                            <label htmlFor="Reptilia">Reptiles</label>
                        </div>
                        <div>
                            <input type="checkbox" id="Chromista" name="taxa" value="Chromista" />
                            <label htmlFor="Chromista">Kelps & Diatoms</label>
                        </div>
                        <div>
                            <input type="checkbox" id="Fungi" name="taxa" value="Fungi" />
                            <label htmlFor="Fungi">Fungi</label>
                        </div>
                        <div>
                            <input type="checkbox" id="Protozoa" name="taxa" value="Protozoa" />
                            <label htmlFor="Protozoa">Protozoa</label>
                        </div>
                    </div>
                </fieldset>
            </div >
        </>
    );
}

// Months.propTypes = {
//     toggleCheckboxes: PropTypes.func.isRequired
// };