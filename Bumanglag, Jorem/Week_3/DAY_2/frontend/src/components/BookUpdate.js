const BookUpdate = async (bookDetails) => {
    try {
      const response = await fetch(`http://localhost:3000/api/books/${bookDetails.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookDetails)
      });
  
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error("Error updating book");
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  export default BookUpdate;