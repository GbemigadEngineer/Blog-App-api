class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filer() {
    const queryObj = { ...this.queryString }; // this creates a new copy of the  req.query
    const excludedFields = ["page", "sort", "limit", "fields"]; // These are the properties / fields/ keys that i want to be excuded from my query string
    excludedFields.forEach((el) => {
      delete queryObj[el];
    });

    // Advanced filtering

    let queryStr = JSON.stringify(queryObj); // this converts the query object to a string
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`); // this replaces the gte, gt, lte and lt with $gte, $gt, $lte and $lt respectively

    this.query = this.query.find(JSON.parse(queryStr)); // this parses the query string back to an object and uses it to filter the query
    return this; // this returns the query object
  }
  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" "); // this splits the query string by , and joins it with a space
      this.query = this.query.sort(sortBy); // this sorts the query by the sortBy string
    } else {
      this.query.sort("-createdAt"); // this sorts the query by the createdAt field in descending order
    }
    return this; // this returns the query object
  }
  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" "); // this splits the query string by , and joins it with a space
      this.query = this.query.select(fields); // this selects the fields in the query string
    } else {
      this.query = this.query.select("-__v"); // Adding - before the __v makes sure we exclude the __v field when we are sending the response to the client
    }
    return this; // this returns the query object
  }
  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 2;
    const skip = (page - 1) * limit; // this calculates the number of documents to skip
    this.query = this.query.skip(skip).limit(limit); // the .skip is used to know the ammount of documents that would be skipped before quering or displaying starts. i.e the page we want, the .limit whatever value passed into the. limit is the number of response to be sent per page.
    return this; // this returns the query object
  }
}

module.exports = APIFeatures; // this exports the APIFeatures class so that it can be used in other files
