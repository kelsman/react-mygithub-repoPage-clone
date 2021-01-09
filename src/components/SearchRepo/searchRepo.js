import React, { Fragment, useState } from 'react';
import './style.scss';
import { searchValue } from '../../redux/Actions/Repo/RepoActions'
import { connect } from 'react-redux';

const Search = (props) => {


    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        props.searchValue(searchValue);
    };
    const handleSearchInput = (e) => {
        setSearchValue(e.target.value)

    }
    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <input
                        name="searchValue"
                        type='text'
                        placeholder='Find a Repository...'
                        value={searchValue}
                        onChange={handleSearchInput}
                    />

                </div>
            </form>
        </Fragment>
    )
};

export default connect(null, { searchValue })(Search);