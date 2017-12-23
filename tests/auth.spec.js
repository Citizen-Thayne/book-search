import auth from '../api/auth'

const {
  login,
  signup
} = auth

// afterEach(async () => {
//   await deleteTestUser()
// })

let username = 'loginTestUser'
let password = 'P@ssw0rd'

login(username, password, {
  newPasswordRequired: function (userAttributes, requiredAttributes) {
    // User was signed up by an admin and must provide new
    // password and required attributes, if any, to complete
    // authentication.

    // the api doesn't accept this field back
    delete userAttributes.email_verified

    // Get these details and call
    cognitoUser.completeNewPasswordChallenge('P@ssw0rd', userAttributes, this)
  }

})

test('signup', async () => {
  deleteTestUser()
  let username = 'testUser'
  let password = 'P@ssw0rd'
  let email = 'testemail@email.com'
  const user = await signup(username, password, email)
  console.log(Object.keys(user))
})

test('login', async () => {
  let username = 'loginTestUser'
  let password = 'P@ssw0rd'
  const user = await login(username, password)
  console.log('done')
})

async function deleteTestUser () {
  try {
    let user = await login('testUser', 'P@ssw0rd')
    console.log(user)
    await user.deleteUser()
  } catch (e) {}
}
