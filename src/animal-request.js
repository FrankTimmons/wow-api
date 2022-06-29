export default class AnimalRequest {
  static async getAnimal(number){
    try {
      const response = await fetch(`https://zoo-animal-api.herokuapp.com/animals/rand/${number}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}