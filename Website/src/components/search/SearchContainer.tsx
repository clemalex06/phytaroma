import { Container, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { PhytaromaContextEventHelper } from "../../helpers/phytaroma-context-event-helper";
import { IPhytaromaContext } from "../../models/phytaroma-context";
import SearchResult from "./SearchResult";
import PlantDetail from "../plantFamilies/PlantDetail";


const SearchContainer: React.FC<IPhytaromaContext> = (phytaromaContext: IPhytaromaContext) => {

    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState(false);
    const handleChange = (event: any) => {
        setMessage(event.target.value);
    };
    const errorMesage = `Entrez ${PhytaromaContextEventHelper.defaultMinSearchStringLength} charactères ou plus.`;

    const setSearchQuery = (searchstring: string) => {
        if (searchstring.length < PhytaromaContextEventHelper.defaultMinSearchStringLength) {
            setNameError(true);
        } else {
            setNameError(false);
        }
        PhytaromaContextEventHelper.onClickSearchResult(phytaromaContext, searchstring);
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
                error={nameError}
                helperText={nameError ? errorMesage : ""}
                placeholder={PhytaromaContextEventHelper.resources.searchLabel}
                InputProps={{
                    endAdornment: (
                        <IconButton type="submit" aria-label="search" onClick={() => setSearchQuery(message)}>
                            <SearchIcon style={{ fill: "green" }} />
                        </IconButton>
                    ),
                }}
            />
            {PhytaromaContextEventHelper.isPlantDetailSelected(phytaromaContext) ?
                <PlantDetail {...phytaromaContext}></PlantDetail> :
                <SearchResult {...phytaromaContext}></SearchResult>}
        </Container>

    );
}

export default SearchContainer;