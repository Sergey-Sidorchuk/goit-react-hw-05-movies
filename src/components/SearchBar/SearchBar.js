import React, {useState} from 'react';
import styles from './SearchBar.module.css';


export default function Searchbar ({onClick}) {
    const [searchQuery, setSearchQuery] = useState('');
    
    const handleChange = event => {
        setSearchQuery(event.currentTarget.value.toLowerCase());
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (searchQuery.trim() === '') {
            alert('Enter your request, please!');
            return;
        }
        onClick(searchQuery);
        
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