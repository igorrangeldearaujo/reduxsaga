import { put } from 'redux-saga/effects'
import axios from 'axios'
import { loadDataUASuccess } from './../actions'

function *getUA(){
    const dados = yield axios.get('http://httpbin.org/user-agent')
    yield put(loadDataUASuccess(dados.data['user-agent']))//Verificar essa linha
  }

  export default getUA