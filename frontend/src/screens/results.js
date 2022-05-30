import React from "react";
import { ItemResult } from "../components";

function Results({results}){
    return (
        <div className="results">
            {results.map((item) => (
                <ItemResult />
            ))}
        </div>
    )
}

export default Results;