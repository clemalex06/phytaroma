import { Container, IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { SearchOutlined } from "@mui/icons-material";

const SearchContainer: React.FC = () => {

    const [message, setMessage] = useState('');
    const handleChange = (event: any) => {
        setMessage(event.target.value);
    };

    const setSearchQuery = (e: string) => {
        alert(`keyword : ${e}`)
    };
    return (
        <Container maxWidth="md">
            <TextField
                fullWidth
                id="search-bar"
                label="Entrez un mot clé de recherche"
                onChange={(e) => handleChange(e)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        setSearchQuery(message);
                    }
                 }}
                placeholder="Entrez un mot clé de recherche"
                InputProps={{
                    endAdornment: (
                        <IconButton type="submit" aria-label="search" onClick={() => setSearchQuery(message)}>
                            <SearchIcon style={{ fill: "green" }} />
                        </IconButton>
                    ),
                }}
            />
        </Container>

    );
}

export default SearchContainer;