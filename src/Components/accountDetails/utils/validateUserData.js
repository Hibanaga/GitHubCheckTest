function validateCountFollow(num) {
  let strNum = String(num);

  if (num > 100000) {
    return strNum.substring(0, 3) + "k+";
  }

  if (num > 10000) {
    return strNum.substring(0, 2) + "k+";
  }

  if (num > 1000) {
    return strNum[0] + "k+";
  }

  return String(num);
}

function validateDateFollow(date) {
  if (date !== undefined) {
    return date.split("T")[0];
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { validateCountFollow, validateDateFollow };
