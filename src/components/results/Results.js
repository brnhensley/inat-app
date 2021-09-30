import React from 'react';
import ResultsList from './ResultsList';

export default function Results(props) {
    const monthPicker = () => {
        const calendar = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let output = p.months.map(month => calendar[month]);
        return output.join(", ");
    };

    const handleSortData = () => {
        if (p.sortByLeastSeen) {
            p.onSetApiData(p.apiData.sort((a, b) => b.count - a.count));
        } else {
            p.onSetApiData(p.apiData.sort((a, b) => a.count - b.count));
        }
        p.onSetSort(!p.sortByLeastSeen);
    };

    const p = props;
    let userText = p.user ? `not seen by user ${p.user} ` : "seen";
    let results = null;
    let monthString = p.months.length > 0 ? `during ${monthPicker()}` : "year round";
    let sortText = p.sortByLeastSeen ? "most" : "least";
    let taxaText = p.taxa.length > 0 ? `${p.taxa.join(", ").toLowerCase()}` : "all taxa";

    // render errors, loading message or search results
    if (p.error) {
        console.log(p.error);
        results = (p.error === "422") ? `User ${p.user} not found, user names are case sensative.` : `Error ${p.error}.`;
    } else if (p.loading) {
        results = "Searching for species...";
    } else if (p.speciesList) {
        results = <>
            {p.totalResults} species from {taxaText} {userText} within {p.radius} km, {monthString}.
            <br />
            <button onClick={() => handleSortData()}>Sort by {sortText} common</button>
            <ResultsList speciesList={p.speciesList} />
        </>;
    }

    return (
        <>{results}</>
    );
}