export default class Building {
  constructor (sqft) {
    this._sqft = sqft
  }

  get sqft () {
    return (this._sqft)
  }

  set sqft (value) {
    if (typeof value !== 'number') {
      throw new TypeError('sqft must be a Number')
    }
    this._sqft = value
  }

  evacuationWarningMessage () {
    throw new Error('Class extending Building must override evacuationWarningMessage')
  }
}
