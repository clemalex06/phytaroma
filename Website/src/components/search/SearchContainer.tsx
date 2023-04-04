import { Card, CardActions, Container, IconButton, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const SearchContainer: React.FC = () => {
    const setSearchQuery = (e: string) => {
        alert(`keyword : ${e}`)
    };
    return (
        <Container maxWidth="md">
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center' }}
            >
                <CardActions sx={{ height: '100%', display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center' }}>
                    <TextField
                        id="search-bar"
                        label="Entrez un mot clé de recherche"
                        placeholder="Recherchez..."
                    />
                    <IconButton type="submit" aria-label="search" onClick={() => setSearchQuery('e.target')}>
                        <SearchIcon style={{ fill: "green" }} />
                    </IconButton>
                </CardActions>
            </Card>

        </Container>

    );
}

export default SearchContainer;