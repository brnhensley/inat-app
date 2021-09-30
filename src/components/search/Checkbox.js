import React from 'react';

export default function Checkbox(props) {
    return (
        <div>
            <input
                type="checkbox"
                id={props.boxName}
                name={props.fieldName}
                value={props.boxName}
                checked={props.isChecked}
                onChange={() => props.onCheckboxChange(props.boxName)} />
            <label htmlFor={props.boxName}>{props.labelText}</label>
        </div>
    );
}
