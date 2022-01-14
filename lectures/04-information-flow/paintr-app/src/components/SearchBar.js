// Material-UI Imports
import { Container } from '@material-ui/core';

function SearchBar({ handleSearch }) {
    return (
        <div>
            <Container align="center">
                <h1>Search Paintings</h1>
                <input 
                    className={'center'} 
                    onChange={handleSearch} 
                    placeholder="Enter title..."
                />
            </Container>
            <br />
            <hr />
        </div>
    );
}

export default SearchBar;