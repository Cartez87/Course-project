const apiUrl = "http://localhost:4000/movies";

export const getSortedFilteredFilms = async (filter, sortOrder) => {
  const filmDataParams = filter !== 'all' || sortOrder ? `?filter=${filter}&sortBy=release_date&sortOrder=${sortOrder}` : '';

  console.log(filmDataParams)
    const response = await fetch(`${apiUrl}${filmDataParams}`);
    handleResponse(response);
    return await response.json();
}

const handleResponse = (response) => {
  if (!response.ok) {
    throw new Error(response.status);
  }else {
    return response;
  }
};