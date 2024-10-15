// Time -> O(nlogn) | Space -> O(1)
function classPhotos(redShirtHeights, blueShirtHeights) {
  // Sort both arrays in ascending order
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);
  
  const len = redShirtHeights.length;
  const isBigger = redShirtHeights[len - 1] > blueShirtHeights[len - 1];
  
  // Compare heights of students in both groups based on sorted arrays
  if (isBigger) {
    for (let i = 0; i < len; i++) {
      if (redShirtHeights[i] <= blueShirtHeights[i]) {
        return false;
      }
    }
  } else {
    for (let i = 0; i < len; i++) {
      if (blueShirtHeights[i] <= redShirtHeights[i]) {
        return false;
      }
    }
  }
  
  return true;
}
