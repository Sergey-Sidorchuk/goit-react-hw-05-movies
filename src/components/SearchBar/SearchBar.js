import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

export default function SearchBar({ onClick }) {
    const [searchQuery, setSearhQuery] = useState('');

    const handleChange = event => {
        setSearhQuery(event.currentTarget.value.toLowerCase());
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (searchQuery.trim() === '') {
            alert('Enter your request, please');
            return;
        }
        onClick(searchQuery);
    }

    return (
        <header className={styles.searchbar}>
            <form className={styles.searchForm} onSubmit={handleSubmit}>
                <button type="submit" className={styles.searchForm_button}>
                    <span className={styles.searchForm_button_label}>Search</span>
                </button>

                <input className={styles.searchForm_input}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
                value={searchQuery}
                onChange={handleChange} />
            </form>
        </header> 
    )
};

SearchBar.propTypes = {
    query: PropTypes.string,

};
