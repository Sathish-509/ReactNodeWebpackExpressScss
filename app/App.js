import React from 'react';
import styles from './App.css';
import allStyles from './styles/_all.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div className={styles.app}>
        This is the template for Webpack node express react and scss
      </div>
    );
  }
}
