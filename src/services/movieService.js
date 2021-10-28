
export const getSortedFilteredFilms = async (filter, sortOrder) => {
  let apiUrl = `http://localhost:4000/movies?limit=${9}`;
 
  if(filter && filter !== 'all') {
    apiUrl += `&filter=${filter}`;
  }
  if (sortOrder) {
    apiUrl += `&sortBy=release_date&sortOrder=${sortOrder}`;
  }
  const response = await fetch(apiUrl);
  handleResponse(response);
  return await response.json();
}

export const deleteMovies = async (id) => {
  let apiUrl = "http://localhost:4000/movies";

  const response = await fetch(
    `${apiUrl}/${id}`, { method: 'DELETE'});
    console.log(response);
    handleResponse(response);
  }

const handleResponse = (response) => {
  if (!response.ok) {
    throw new Error(response.status);
  }else {
    return response;
  }
};