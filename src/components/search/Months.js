import React, { useState } from 'react';

export default function Months() {
    const [expanded, setExpanded] = useState(true);
    let classes = ["column", expanded ? "showing" : "hiding"];

    return (
        <fieldset className="row">
            <legend onClick={() => setExpanded(!expanded)}>
                Click to search by time of year, by default it searches year round
            </legend>
            <div className={classes.join(" ")}>
                <div>
                    <input type="checkbox" id="jan" name="months" value="1" />
                    <label htmlFor="jan">January</label>
                </div>
                <div>
                    <input type="checkbox" id="feb" name="months" value="2" />
                    <label htmlFor="feb">February</label>
                </div>
                <div>
                    <input type="checkbox" id="mar" name="months" value="3" />
                    <label htmlFor="mar">March</label>
                </div>
                <div>
                    <input type="checkbox" id="apr" name="months" value="4" />
                    <label htmlFor="apr">April</label>
                </div>
                <div>
                    <input type="checkbox" id="may" name="months" value="5" />
                    <label htmlFor="may">May</label>
                </div>
                <div>
                    <input type="checkbox" id="jun" name="months" value="6" />
                    <label htmlFor="jun">June</label>
                </div>
            </div>
            <div className={classes.join(" ")}>
                <div>
                    <input type="checkbox" id="jul" name="months" value="7" />
                    <label htmlFor="jul">July</label>
                </div>
                <div>
                    <input type="checkbox" id="aug" name="months" value="8" />
                    <label htmlFor="aug">August</label>
                </div>
                <div>
                    <input type="checkbox" id="sep" name="months" value="9" />
                    <label htmlFor="sep">September</label>
                </div>
                <div>
                    <input type="checkbox" id="oct" name="months" value="10" />
                    <label htmlFor="oct">October</label>
                </div>
                <div>
                    <input type="checkbox" id="nov" name="months" value="11" />
                    <label htmlFor="nov">November</label>
                </div>
                <div>
                    <input type="checkbox" id="dec" name="months" value="12" />
                    <label htmlFor="dec">December</label>
                </div>
            </div>
        </fieldset>
    );
}
