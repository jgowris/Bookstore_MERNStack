import axios from "axios";

const urlvar = "https://bookstore-mernstack.herokuapp.com";

// create user
export async function createUser(formData) {
  const { data } = await axios.post(`${urlvar}/user/signup`, formData);
  return data;
}

//log in to user account
export async function loginToAccount(formData) {
  const { data } = await axios.post(`${urlvar}/user/login`, formData);
  return data;
}

//Book home index route
export async function getIndexRoute() {
  const { data } = await axios.get(`${urlvar}/book`);
  return data;
}

//add a book - admin function
export async function createBook(formData) {
  const bookData = await axios.post(`${urlvar}/book`, formData);
  return bookData.data;
}

//show a book
export async function showBook(id) {
  const bookData = await axios.get(`${urlvar}/book/${id}`);
  return bookData.data;
}

//edit a book
export async function editBook(id) {
  const editedBookForm = await axios.get(`${urlvar}/book/${id}`);
  return editedBookForm.data;
}

//update a book
export async function updateBook(id, formState) {
  const updatedBookForm = await axios.put(`${urlvar}/book/${id}`, formState);
  return updatedBookForm.data;
}

//delete a book
export async function deleteBook(id) {
  const deletedBook = await axios.delete(`${urlvar}/book/${id}`);
  return console.log("Book entry deleted");
}

// //create review
// export async function createReview(id, formState) {
//   const createdReview = await axios.put(`book/${id}/review`, formState);
//   return createdReview.data;
// }
