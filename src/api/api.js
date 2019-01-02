import { axiosAppJson, axiosMultipart } from './axios-instances'

export default {
  signIn (payload) {
    return axiosAppJson.post('/api/sign-in', payload)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log(err)
        return Promise.reject(err)
      })
      .then(data => {
        if (data.status === 'success') {
          return data.data
        } else {
          return Promise.reject(new Error(data.message))
        }
      })
  },
  signOut () {
    return axiosAppJson.post('/api/sign-out', {})
      .then(res => {
        return res.data
      })
      .catch(err => {
        return Promise.reject(err)
      })
      .then(data => {
        if (data.status === 'success') {
          return data.data
        } else {
          return Promise.reject(new Error(data.message))
        }
      })
  },

  signUp (signUpForm) {
    return axiosAppJson.put('/api/sign-up', signUpForm)
      .then(res => {
        return res
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  isOccupiedUsername (username) {
    return axiosAppJson.post('/api/isOccupiedUsername', {
      'username': username
    })
      .then(res => {
        return res.data.isOccupiedUsername
      })
      .catch(err => console.log(err))
  },
  myAccount () {
    return axiosAppJson.get('/api/myAccount')
      .then(res => {
        return res.data
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  // subscription
  getSubscriptionOverview () {
    return axiosAppJson.get('/api/subscription/overview')
      .then(res => {
        return res.data
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  requestSubscription (subscription) {
    return axiosAppJson.post('/api/subscription/request', subscription)
      .then(res => {
        return res.data
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  getSubscriptionChargeRatio () {
    return axiosAppJson.get('/api/subscription/charge-ratio')
      .then(res => {
        return res.data
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  getRequestedSubscriptionPage (pageParameter) {
    return axiosAppJson.post('/api/subscription/manager/requested', pageParameter)
      .then(res => {
        return res.data
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  permitSubscription (subscription) {
    return axiosAppJson.post('/api/subscription/permit', subscription)
      .then(res => {
        return res.data
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  appAuthenticate (username) {
    return axiosAppJson.get('/api/subscription/authenticate/' + username)
      .then(res => {
        return res.data
      })
      .catch(err => {
        return Promise.reject(err)
      })
  },
  // /subscription/authenticate/{username}
  uploadAppFile(formData) {
    return axiosMultipart.post('/upload-file', formData)
      .then( res => {
        return res.data;
      })
      .catch( err => {
        console.error(err);
        throw err;
      })
  }
}
