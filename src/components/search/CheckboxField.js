import React, { useState } from 'react';
import CheckBox from './Checkbox';

export default function CheckboxField(props) {
    const [expanded, setExpanded] = useState(true);

    let classes = ["column", expanded ? "showing" : "hiding"];
    const firstColumn = Object.keys(props.boxList).filter((x, i, arr) => i < (arr.length / 2));
    const secondColumn = Object.keys(props.boxList).filter((x, i, arr) => i >= (arr.length / 2));

    const handleExpand = () => setExpanded(!expanded);


    return (
        <fieldset className="row">
            <legend onClick={handleExpand}>
                {props.legendText}
            </legend>

            {
                [firstColumn, secondColumn].map((column, i) => {
                    return (
                        <div key={i + 1} className={classes.join(" ")}>
                            {column.map((key) => {
                                return (
                                    <CheckBox
                                        key={key}
                                        isChecked={props.boxList[key].checked}
                                        boxName={key}
                                        boxValue={key}
                                        fieldName={props.fieldName}
                                        labelText={props.boxList[key].text}
                                        onCheckboxChange={props.onCheckboxChange}
                                    />
                                );
                            })}
                        </div>
                    );
                })
            }
        </fieldset>
    );
}
