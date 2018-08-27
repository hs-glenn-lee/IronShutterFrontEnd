import api from '../api/api'
export default {
  constraints: {
    'validateSignUpForm': {
      promisedCheck (signUpForm) {
        let usernameMessage

        var regex = /[^0-9A-Za-z_\-.]/
        if (signUpForm.username === '' || signUpForm.username === undefined || signUpForm.username === null) {
          usernameMessage = '사용자명을 입력해주세요.'
        } else if (signUpForm.username.length < 3) {
          usernameMessage = '사용자명은 세글자 이상되어야합니다.'
        } else if (signUpForm.username.length > 30) {
          usernameMessage = '사용자명은 30자 이하여야 합니다.'
        } else if (regex.test(signUpForm.username)) {
          usernameMessage = '사용자명은 알파벳, 숫자, 일부 특수문자 (-_.)만 입력해야 됩니다.'
        }

        let passwordMessage
        if (signUpForm.password === '' || signUpForm.password === undefined || signUpForm.password === null) {
          passwordMessage = '비밀번호를 입력해주세요'
        } else if (signUpForm.password.length < 5) {
          passwordMessage = '비멀번호는 5글자 이상 이어야합니다.'
        } else if (signUpForm.password.length > 30) {
          passwordMessage = '비멀번호는 30자 이하 이어야합니다.'
        } else if (signUpForm.password !== signUpForm.passwordRepeat) {
          passwordMessage = '다시입력한 비밀번호가 일치하지 않습니다.'
        }

        if (usernameMessage || passwordMessage) {
          let fail = []
          if (usernameMessage) {
            fail.push(usernameMessage)
          }

          if (passwordMessage) {
            fail.push(passwordMessage)
          }

          return Promise.reject(fail)
        } else {
          return api.isUniqueNewUsername(signUpForm.username)
            .then(ret => {
              if (ret) {
                return Promise.resolve('다되었습니다! 계정생성 버튼을 눌러주세요')
              } else {
                let fail = []
                fail.push('이미 사용중인 사용자명입니다.')
                return Promise.reject(fail)
              }
            })
        }
      }
    }
  },
  validate (constraintKey, value, rejectCallback) {
    var constraint = this.findConstraint(constraintKey)
    try {
      constraint.check(value, this.reject.bind(this))
    } catch (exception) {
      if (exception instanceof ValidatorRejection) {
        if (rejectCallback) {
          console.error('[validator] process rejected during validation. constraint key: "' + constraintKey + '", ' + exception.message)
          rejectCallback(exception)
        }
      }
      throw exception
    }
  },
  promisedValidate (constraintKey, value) {
    var constraint = this.findConstraint(constraintKey)
    if (constraint === undefined) {
      throw new Error('[validator]' + 'constraint doesn\'t have promisedCheck Function.')
    }
    return constraint.promisedCheck(value)
  },
  findConstraint (constraintKey) {
    var constraint = this.constraints[constraintKey]
    if (constraint === undefined) {
      var err = new Error('[validator]' + 'there\'s no matched constraint with key: "' + constraintKey + '"')
      console.error(err)
      throw err
    }
    return constraint
  },
  reject (message) {
    console.log('validator rejected')
    console.log(this)
    throw new ValidatorRejection(message)
  }
}

function ValidatorRejection (message) {
  this.name = 'ValidatorRejection'
  this.message = message || 'Validator Rejection'
}
ValidatorRejection.prototype = new Error()
ValidatorRejection.constructor = ValidatorRejection
