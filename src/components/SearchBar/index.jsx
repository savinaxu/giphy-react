import React from 'react';

function SearchBar({ q, handleInputChange, handleSubmit }) {
    return(
        <form>
            <div>
                <input 
                className="form-control"
                id="gifSearch"
                type="text"
                value={q}
                placeholder="Type the Gifs you want to search.."
                name="q"
                onChange={handleInputChange}
                />
            </div>
            <div>
                <button
                    onClick={handleSubmit}
                    type="submit"
                >
                    Search
                </button>
            </div>
        </form>
    )
}

export default SearchBar