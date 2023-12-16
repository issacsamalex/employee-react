import axios from "axios";

const BaseURL = "https://jsonplaceholder.typicode.com/users";

export const getData = async () => {
    try {
        const data = await axios.get(BaseURL);
        return data
    } catch (error) {
        console.log(error);
    }
}