function ageCategory(age) {
    if (/* check if age is not a number or is negative */) {
      return "Invalid age";
    } else if (/* age is less than 13 */) {
      return "Child";
    } else if (/* age is between 13 and 19 */) {
      return "Teen";
    } else {
      return "Adult";
    }
  }
  