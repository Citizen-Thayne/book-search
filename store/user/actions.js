import {
  CognitoUserPool
} from 'amazon-cognito-identity-js'

export default {
  signup ({
    state,
    commit
  }, {
    username,
    password,
    email
  }) {
    return new Promise(resolve => {
      let userPool = new CognitoUserPool(state.poolData)
      let attributeList = [{
        Name: 'email',
        Value: email
      }]
      userPool.signUp(username, password, attributeList, null, (err, result) => {
        if (err) {
          commit('setError', err)
        } else {
          commit('setUser', result.user)
        }
        resolve()
      })
    })
  }
}
