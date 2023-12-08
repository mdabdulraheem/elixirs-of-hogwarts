import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

type Props = {
    name: string;
    details: string[] | string;
};

const PotionDetailAccordion = (props: Props) => {
    const { name, details } = props;
    const isArray = Array.isArray(details) && details.length > 0;

    return (
        <Accordion disabled={!isArray}>
            <AccordionSummary
                expandIcon={isArray ? <ExpandMoreIcon /> : false}
                sx={{
                    opacity: isArray ? ' ' : '1 !important',
                    background: isArray ? '#f9f9f9' : '#fff',
                }}
            >
                <Typography
                    sx={{
                        width: '33%',
                        flexShrink: 0,
                        textTransform: 'capitalize',
                    }}
                >
                    {name.replace('_', ' ')}
                </Typography>
                {!isArray && (
                    <Typography sx={{ color: 'text.secondary' }}>
                        {details}
                    </Typography>
                )}
            </AccordionSummary>
            {isArray && (
                <AccordionDetails>
                    <List sx={{ listStyleType: 'disc' }} dense>
                        {details.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <FiberManualRecordIcon />
                                </ListItemIcon>
                                <ListItemText primary={item} />
                            </ListItem>
                        ))}
                    </List>
                </AccordionDetails>
            )}
        </Accordion>
    );
};

export default PotionDetailAccordion;
