import React, {useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './SearchBar.module.css';


export default function Searchbar ({onSubmit}) {
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();
    const history = useHistory();
    
    const handleChange = event => {
        setSearchQuery(event.currentTarget.value.toLowerCase());
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (searchQuery.trim() === '') {
            alert('Enter your request, please!');
            return;
        }
        history.push({ ...location, search: `query=${searchQuery}` });
        onSubmit(searchQuery);
    }
    
        return (
    <header className={styles.Searchbar}>
                <form className={styles.SearchForm} onSubmit={handleSubmit}>
                    <button type="submit" className={styles.SearchForm_button}>
                        <span className={styles.SearchForm_button_label}>Search</span>
            </button>

            <input
                        className={styles.SearchForm_input}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
                value={searchQuery}
                onChange={handleChange}
            />
        </form>
    </header>
    )

};