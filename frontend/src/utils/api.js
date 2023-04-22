import axios from "axios";

// const urlvar = "https://localhost:5001";

// create user
export async function createUser(formData) {
  const { data } = await axios.post(`signup`, formData);
  return data;
}

//log in to user account
export async function loginToAccount(formData) {
  const { data } = await axios.post(`login`, formData);
  return data;
}

//Book home index route
export async function getIndexRoute() {
  const { data } = await axios.get(`book`);
  return data;
}

//add a book - admin function
export async function createBook(formData) {
  const bookData = await axios.post(`book`, formData);
  return bookData.data;
}

//show a book
export async function showBook(id) {
  const bookData = await axios.get(`book/${id}`);
  return bookData.data;
}

//edit a book
export async function editBook(id) {
  const editedBookForm = await axios.get(`book/${id}`);
  return editedBookForm.data;
}

//update a book
export async function updateBook(id, formState) {
  const updatedBookForm = await axios.put(`book/${id}`, formState);
  return updatedBookForm.data;
}

//delete a book
export async function deleteBook(id) {
  const deletedBook = await axios.delete(`book/${id}`);
  return console.log("Book entry deleted");
}

//create review
export async function createReview(id, formState) {
  const createdReview = await axios.put(`book/${id}/review`, formState);
  return createdReview.data;
}
