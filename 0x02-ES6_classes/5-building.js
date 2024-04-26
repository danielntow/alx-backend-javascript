/**
 * Represents a building with a given square footage.
 *
 * @class Building
 * @param {number} sqft - The square footage of the building.
 * @throws {TypeError} Throws an error if `sqft` is not a number.
 * @throws {Error} Throws an error if a class extending `Building` does not
 *     override the `evacuationWarningMessage` method.
 */
export default class Building {
  constructor (sqft) {
    if (this.constructor === Building) {
      throw new Error('Building is an abstract class and cannot be instantiated directly.')
    }
    this._sqft = sqft
  }

  get sqft () {
    return this._sqft
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
