import React from 'react';
import { Typography} from '@mui/material';
import { Card } from '@mui/material';
import { CardActions }  from '@mui/material';
import { CardContent } from '@mui/material';
import { Button } from '@mui/material';
import {IconButton} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


const QuoteMachine = (props) => (
    <Card>
        <CardContent>
        {props.selectedQuote ? 
            (
        <Typography id = "text">
            {props.selectedQuote.quote} - <span id ="author"> {props.selectedQuote.author}</span>
        </Typography>
            ) : null }
        </CardContent>
        <CardActions>
        <Button id = "new-quote" size = "small" onClick={props.assignNewQuoteIndex}>Next Quote</Button>
        <IconButton
         id = "tweet-quote"
        >
            <FontAwesomeIcon icon = {faTwitter} size = "1x"></FontAwesomeIcon>
        </IconButton>
        </CardActions>
    </Card>
);

export default QuoteMachine;