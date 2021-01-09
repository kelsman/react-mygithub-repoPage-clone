
import React, { useState } from 'react';



const LanguageType = () => {
    const [Language, setLanguage] = useState('')

    const handleLangChange = async (e) => {
        await setLanguage(e.target.value);
        setLanguage('')

    };
    const handleSubmit = (e) => {
        e.preventDeafult();

    }
    return (

        <div>
            <form action=""
                onSubmit={handleSubmit}>
                <select name="language" id="Language" onChange={handleLangChange} value={Language} >
                    <option value="" disabled defaultValue>Language: All</option>
                    <option value="Javascript">Javascript</option>
                    <option value="Html">Html</option>
                    <option value="Sources">Css</option>
                    <option value="PHP">PHP</option>

                </select>


            </form>



        </div>
    )
};

export default LanguageType;