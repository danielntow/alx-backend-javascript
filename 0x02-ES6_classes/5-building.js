/**
 * Represents a building with a given square footage.
 *
 * @class Building
 * @param {number} sqft - The square footage of the building.
 * @throws {TypeError} Throws an error if `sqft` is not a number.
 * @throws {Error} Throws an error if a class extending `Building` does not
 *     override the `evacuationWarningMessage` method.
 */
class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
            'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
    this.sqft = sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft nust be a number');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}

  export default Building;
