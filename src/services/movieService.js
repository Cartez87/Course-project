
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
  const response = await fetch(`${apiUrl}/${id}`, { method: 'DELETE'});
  handleResponse(response);
}

const handleResponse = (response) => {
  console.log(response.status)
  if(response.status >= 200 && response.status <= 299) {
    return response;
  }else {
    throw new Error(response.statusText);
  }
};