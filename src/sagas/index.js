import { takeLatest } from 'redux-saga/effects'//Verificar esse ponto

import getIP from './ipSagas'
import getUA from './uaSagas'


function *index(){
    yield [ //Vetor
            takeLatest('LOAD_DATA_REQUEST', getIP),
            takeLatest('LOAD_DATA_UA_REQUEST', getUA)
          ]
  }

  export default index