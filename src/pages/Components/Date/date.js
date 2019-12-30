import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker';
import styles from './style';

export default class MyDatePicker extends Component {
  constructor(){
    super()
    this.state =  
    {
        date: ''
    }
  }
    render(){
      return (
        <DatePicker
          style={styles.datePicker}
          date={this.state.date}
          mode='date'
          placeholder='Selecione'
          format='DD/MM/YYYY'
          minDate='01/01/2000'
          confirmBtnText='Confirm'
          cancelBtnText='Cancel'
          customStyles={{
            dateIcon: {
                display: 'none',
            },
            dateInput: {
                
                fontSize: 18,
                borderWidth: 0,

            },
            dateText:{
              color: '#FFF',
              fontWeight:'bold'
            }
          }}
          onDateChange={(date) => {this.setState({date})}}
        />
      )
    }
  }

