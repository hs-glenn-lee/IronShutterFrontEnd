export default class SubscriptionChargeRatio {
  constructor (result, activated, recentExpired) {
    this.result = result || {
      resultCode: null,
      resultMessage: null
    }
    this.activated = activated
    this.recentExpired = recentExpired
  }
}
