function grade(s1, s2, s3) {
  let num = ((s1 + s2 + s3) / 300) * 100;
  if (num >= 90) {
    return "A";
  } else if (num >= 80 && num < 90) {
    return "B";
  } else if (num >= 70 && num < 80) {
    return "C";
  } else if (num >= 60 && num < 70) {
    return "D";
  } else {
    return "F";
  }
}
