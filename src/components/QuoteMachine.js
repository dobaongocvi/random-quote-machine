import React from 'react';
import { Typography} from '@mui/material';
import { Card } from '@mui/material';
import { CardActions }  from '@mui/material';
import { CardContent } from '@mui/material';
import { Button } from '@mui/material';
import {IconButton} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote}) => (
    <Card>
        <CardContent>
        {selectedQuote ? 
            (
        <Typography id = "text">
            {selectedQuote.quote} - <span id ="author"> {selectedQuote.author}</span>
        </Typography>
            ) : null }
        </CardContent>
        <CardActions>
        <Button id = "new-quote" size = "small" onClick={assignNewQuoteIndex}>Next Quote</Button>
        <IconButton
        href = {encodeURI(`https://twitter.com/intent/tweet?text=${selectedQuote.quote}`)} id = "tweet-quote"
        >
            <FontAwesomeIcon icon = {faTwitter} size = "md"></FontAwesomeIcon>
        </IconButton>
        </CardActions>
    </Card>
);

export default QuoteMachine;