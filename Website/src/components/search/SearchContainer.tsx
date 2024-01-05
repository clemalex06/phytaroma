import { Container, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { PhytaromaContextEventHelper } from "../../helpers/phytaroma-context-event-helper";

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
                label={PhytaromaContextEventHelper.resources.searchLabel}
                onChange={(e) => handleChange(e)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        setSearchQuery(message);
                    }
                }}
                placeholder={PhytaromaContextEventHelper.resources.searchLabel}
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