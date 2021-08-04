function smartSearchList(arrResults, currQuerySearch, keyLocation) {
  if (keyLocation) {
    return [];
  }

  if (currQuerySearch !== "" && arrResults !== undefined) {
    // eslint-disable-next-line array-callback-return
    return arrResults.filter(({ login }, idx) => {
      return login.includes(currQuerySearch);
    });
  } else {
    return [];
  }
}

export default smartSearchList;
