import { createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Acesso/Login';
import CadastroFuncionario from './pages/Acesso/CadastroFuncionario';
import Inicio from './pages/Inicio';
import Cadastros from './pages/Fichas';
import CadastrarAnimal from './pages/Fichas/CadastroAnimal';
import DadosComplementares from './pages/Fichas/DadosComplementares';
import CadastrarPessoa from './pages/Fichas/CadastroPessoa';
import CadastrarApreensao from './pages/Fichas/CadastroApreensao';
import CadastrarDestino from './pages/Fichas/CadastroDestino';
import OutrosDados from './pages/Fichas/OutrosRegistros/Menu';
import Consultas from './pages/Consultas';
import ConsultaAnimal from './pages/Consultas/ConsultaAnimal';
import ConsultaDetalhada from './pages/Consultas/ConsultaAnimal/FormConsultaDetalhada';
import AtualizarAnimal from './pages/Fichas/AtualizarAnimal';
import ConsultaApreensao from './pages/Consultas/ConsultaApreensao';
//import ConsultaExameAnimal from './pages/Consultas/ConsultaExameAnimal';
import ConsultaDestino from './pages/Consultas/ConsultaDestino'
import CadastrarEspecie from './pages/Fichas/OutrosRegistros/CadastrarEspecie';
import CadastrarRecinto from './pages/Fichas/OutrosRegistros/CadastrarRecinto';
import CadastrarTipoApreensao from './pages/Fichas/OutrosRegistros/CadastrarTipoApreensao'
import CadastrarEntidadeApreensao from './pages/Fichas/OutrosRegistros/CadastrarEntidadeApreensao'

export default createAppContainer(
    createSwitchNavigator({ 
        Login,
        Inicio,
        Cadastros,
        Consultas,
        OutrosDados,
        CadastrarAnimal,
        ConsultaAnimal,
        AtualizarAnimal,
        ConsultaDestino,
        CadastrarPessoa,
        CadastrarRecinto,
        CadastrarEspecie,
        CadastrarDestino,
        ConsultaDetalhada,
        ConsultaApreensao,
        CadastrarApreensao,
        CadastroFuncionario,
        DadosComplementares,
        CadastrarTipoApreensao,
        CadastrarEntidadeApreensao,
    })
);