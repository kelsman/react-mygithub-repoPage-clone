import React, { useState } from 'react';



const SelectRepo = (props) => {

    const [Type, setType] = useState('');

    const handleTypeChange = (e) => {
        setType(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDeafult();

    }
    return (
        <div>
            <form action=""
                onSubmit={handleSubmit}>
                <select name="Type" id="Type" onChange={handleTypeChange} value={Type} placeholder="select">
                    <option value="" disabled defaultValue>Select a type</option>
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                    <option value="Sources">Sources</option>
                    <option value="Forks">Forks</option>
                    <option value="Archived">Archived</option>
                    <option value="Mirrors">Mirrors</option>
                </select>


            </form>



        </div>
    )
};

export default SelectRepo;