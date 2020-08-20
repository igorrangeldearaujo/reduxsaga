import { put } from 'redux-saga/effects'
import { loadDataSuccess } from './../actions'

function *getIP(axios){
    const dados = yield axios.get('http://httpbin.org/ip')
    yield put(loadDataSuccess(dados.data.origin))
  }

  export default getIP