// width, height and length are given in cms and mass in kgs
function sortPackage(width, height, length, mass) {

  if (
    typeof width !== 'number' || width <= 0 ||
    typeof height !== 'number' || height <= 0 ||
    typeof length !== 'number' || length <= 0 ||
    typeof mass !== 'number' || mass <= 0
  ) {
    throw new Error("All inputs must be positive numbers in cm (for dimensions) and kg (for mass).");
  }
  
  const isBulky = (width * height * length) >= 1000000 || Math.max(width, height, length) >= 150;
  const isHeavy = mass >= 20;

  if (isBulky && isHeavy) {
    return "REJECTED";
  } else if (isBulky || isHeavy) {
    return "SPECIAL";
  } else {
    return "STANDARD";
  }
}

module.exports = sortPackage;
