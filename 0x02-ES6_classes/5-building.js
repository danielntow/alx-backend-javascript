export default class Building {
<<<<<<< HEAD
  constructor(sqft) {
    this._sqft = sqft;

    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
=======
    constructor(sqft) {
      this._sqft = sqft;

      if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
        throw Error('Class extending Building must override evacuationWarningMessage');
      }
    }

    get sqft() {
      return this._sqft;
    }
  }
>>>>>>> 247c0be ( es6 classes)
