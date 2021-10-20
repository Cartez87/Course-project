const apiUrl = "http://localhost:4000/movies";

export const getSortedFilteredFilms = async (filter=`?filter=${''}`, sortOrder) => {
  const filmDataParams = filter !== 'all' || sortOrder ? `?filter=${filter}&sortBy=release_date&sortOrder=${sortOrder}` : '';

  // TODO: modify by using handleResponse func to prevent any errors
  const response = await fetch(`${apiUrl}${filmDataParams}`);
  return await response.json();
}

// TODO: implement function to catch request errors
// const handleResponse = () => {};