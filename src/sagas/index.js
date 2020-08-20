import { takeLatest, all } from 'redux-saga/effects'//Verificar esse ponto
import axios from 'axios'
import getIP from './ipSagas'
import getUA from './uaSagas'//código alterado


function* index(){
    yield all([ //Vetor
            takeLatest('LOAD_DATA_REQUEST', getIP, axios),
            takeLatest('LOAD_DATA_UA_REQUEST', getUA, axios)
          ])
  }

  export default index