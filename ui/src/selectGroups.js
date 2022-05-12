import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";

const SelectGroups = () => {
    const [selected, setSelected] = useState([]);
    const [groups, setGroups] = useState([]);
    useEffect(() => {
       fetchData();
     }, []);
    const fetchData = async () => {
       let response = await (
         await fetch("https://sunday.sviry.net/gosvc/listgroups")
       ).json();
       setGroups(response);
     };

    return (
        <div>
            <h1>Select groups</h1>
            <pre>{JSON.stringify(selected)}</pre>
            <MultiSelect
                options={groups}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
            />
        </div>
    );
};

export default SelectGroups;