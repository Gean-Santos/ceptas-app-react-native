import React, {Component} from 'react';
import FormAnimal from './FormAtualizarAnimal'

export default class AtualizarAnimal extends Component{
    
    render(){
        const {animal} = this.props.navigation.state.params;
        return (
            <FormAnimal titulo='Atualizar animal' animal={animal} navigation={this.props.navigation} />
            )
    
    }
    
}
