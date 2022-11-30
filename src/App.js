import React, {Component} from 'react';
import { random } from 'lodash';
import '@fontsource/roboto/300.css';
import QuoteMachine from './components/QuoteMachine';
import { Grid } from '@mui/material';

const styles = {
  container: {
    display: 'flex', 
    alignItem: 'center', 
    height: "100vh"
  }
};

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quotes: [], 
      selectedQuoteIndex: null,
    }
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
    this.selectedQuoteIndex = this.selectedQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
      .then(data => data.json())
      .then(quotes => this.setState({quotes} , this.assignNewQuoteIndex));
  }

  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)){
      return;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  /**
   * 
   * @returns an integer representing index in states.quotes
   * If state.quotes is empty, return undefined
   */
  selectedQuoteIndex() {
    if (!this.state.quotes.length) {
      return undefined;
    }
    return random(0, this.state.quotes.length - 1);
  }

  nextQuoteClickHandler() {
    console.log('hi');
  }

  assignNewQuoteIndex() {
    this.setState({selectedQuoteIndex: this.selectedQuoteIndex()});
  }

  render () {
  return (
    <Grid display = "flex" id = "quote-box" alignItems = "center" justifyContent ="center" minHeight= "100vh" container>
      <Grid xs = {11} lg = {8} item>
      <QuoteMachine selectedQuote = {this.selectedQuote} assignNewQuoteIndex = {this.assignNewQuoteIndex} />
      </Grid>
    </Grid>
    );
  }
}
export default App;

