export default class Subscription {
  constructor (id, subscriber, state, periodAmount, periodUnit, chargeAmount, requestedAt, canceledAt, permittedAt, activatedAt, expireAt) {
    this.id = id
    this.subscriber = subscriber
    this.state = state
    this.periodAmount = periodAmount
    this.periodUnit = periodUnit
    this.chargeAmount = chargeAmount
    this.requestedAt = requestedAt
    this.canceledAt = canceledAt
    this.permittedAt = permittedAt
    this.activatedAt = activatedAt
    this.expireAt = expireAt
  }
}
