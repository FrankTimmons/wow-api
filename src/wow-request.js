export default class WowRequest {
  static async getWow(){
    try {
      const response = await fetch(`https://owen-wilson-wow-api.herokuapp.com/wows/random`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}