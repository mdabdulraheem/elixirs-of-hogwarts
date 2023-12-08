import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import {
    Popover,
    List,
    Checkbox,
    ListSubheader,
    Divider,
    FormControlLabel,
    Button,
    Box,
} from '@mui/material';
import { FilterAltOutlined } from '@mui/icons-material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FilterData, SelectedFilters } from '@/types/common';

type Props = {
    data: FilterData[];
    onFilterChange: (selectedFilters: SelectedFilters) => void;
    filterState: SelectedFilters;
};

/**
 *  A common filter component.
 */
const Filter = (props: Props) => {
    const { data, onFilterChange, filterState } = props;

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState(filterState);

    useEffect(() => {
        setSelectedFilters(filterState);
    }, [filterState]);

    const handleClick = (event: BaseSyntheticEvent) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // Handle filter selection and update local state.
    const handleCheckboxChange = (category: string, value: string) => {
        const updatedFilters = {
            ...selectedFilters,
            [category]: [...selectedFilters?.[category]],
        };

        if (updatedFilters[category].includes(value)) {
            // Remove the value if already selected
            updatedFilters[category] = updatedFilters[category].filter(
                (val) => val !== value,
            );
        } else {
            // Add the value if not selected
            updatedFilters[category].push(value);
        }

        setSelectedFilters(updatedFilters);
    };

    // Invoke the callback when selected filters are applied.
    const handleApply = () => {
        onFilterChange(selectedFilters);
        handleClose();
    };

    const open = Boolean(anchorEl);
    const id = open ? 'filter-popover' : undefined;

    if (data.length === 0) return <div>No Filter Options</div>;

    return (
        <>
            <Button
                color="primary"
                aria-describedby={id}
                onClick={handleClick}
                variant="outlined"
                size="large"
            >
                <FilterAltOutlined fontSize="large" />
            </Button>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                disableScrollLock={true}
            >
                <List sx={{ minWidth: '250px', paddingBottom: 0 }} dense>
                    <ListSubheader>Filter By</ListSubheader>
                    <Divider />
                    {data.map((category, index) => (
                        <Accordion key={index}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>{category.name}</Typography>
                            </AccordionSummary>

                            <AccordionDetails
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                {category.options.map((option, index2) => (
                                    <FormControlLabel
                                        key={index2}
                                        control={
                                            <Checkbox
                                                checked={selectedFilters?.[
                                                    category.name.toLowerCase()
                                                ]?.includes(option.key)}
                                                onChange={() =>
                                                    handleCheckboxChange(
                                                        category.name.toLowerCase(),
                                                        option.key,
                                                    )
                                                }
                                            />
                                        }
                                        label={option.label}
                                    />
                                ))}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </List>

                <Box sx={{ textAlign: 'center' }}>
                    <Button
                        onClick={handleApply}
                        variant="contained"
                        size="small"
                        sx={{ margin: '1rem' }}
                    >
                        Apply Filters
                    </Button>
                </Box>
            </Popover>
        </>
    );
};

export default Filter;
