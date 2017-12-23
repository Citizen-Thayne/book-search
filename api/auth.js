import {
  CognitoUserPool,
  CognitoIdentityServiceProvider,
  AuthenticationDetails,
  CognitoUser
} from 'amazon-cognito-identity-js'

const poolData = {
  UserPoolId: 'us-east-1_zGYQa7Z7Y',
  ClientId: '3fjpas20gdlk7oc8ks31625uj8'
}

function signup (username, password, email) {
  return new Promise((resolve, reject) => {
    let userPool = new CognitoUserPool(poolData)
    let attributeList = [{
      Name: 'email',
      Value: email
    }]
    userPool.signUp(username, password, attributeList, null, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result.user)
      }
    })
  })
}

function login (username, password, callbacks) {
  var authenticationData = {
    Username: username,
    Password: password
  }
  var authenticationDetails = new AuthenticationDetails(authenticationData)
  var userPool = new CognitoUserPool(poolData)
  var userData = {
    Username: username,
    Pool: userPool
  }
  var cognitoUser = new CognitoUser(userData)
  cognitoUser.authenticateUser(authenticationDetails, callbacks)
}

export default {
  signup,
  login
}
