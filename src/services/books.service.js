import ApiServices from "./shared/Api.service";
const Base_Url = "https://622a7ce314ccb950d21d8592.mockapi.io/api/v1/books";

const booksServices = {
  async getAllAsync() {
    try {
      const response = await ApiServices.get(Base_Url);
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  async getByIdAsync(bookId) {
    try {
      const response = await ApiServices.get(`${Base_Url}/${bookId}`);
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  async updateAsync(bookId, Obj) {
    try {
      const response = await ApiServices.put(`${Base_Url}/${bookId}`, Obj);
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  async deleteAsync(bookId) {
    try {
      const response = await ApiServices.delete(`${Base_Url}/${bookId}`);
      return response.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};

export default booksServices;
