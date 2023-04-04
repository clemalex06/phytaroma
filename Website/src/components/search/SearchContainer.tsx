import { Card, CardActions, Container, IconButton, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

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
                    id="search-bar"
                    label="Entrez un mot clé de recherche"
                    onChange={(e) => handleChange(e)}
                    placeholder="Recherchez..."
                />
                <IconButton type="submit" aria-label="search" onClick={() => setSearchQuery(message)}>
                    <SearchIcon style={{ fill: "green" }} />
                </IconButton>

        </Container>

    );
}

export default SearchContainer;