import { makeAutoObservable } from 'mobx';
import axios from "axios"

class ItemStore {
    gloves = [];
    loading = true;
    constructor() {
        makeAutoObservable(this)
    }
    fetchGloves = async () => {
        try {
            const response = await axios.get("http://localhost:8000/gloves");
            this.gloves = response.data;
            this.loading = false
        } catch (error) {
            console.error("fetchGloves: ", error);
        }
    };
    getProductById = (gloveId) => this.gloves.find((glove) => glove.id === gloveId);
}
const itemStore = new ItemStore() // create instance
itemStore.fetchGloves();
export default itemStore; // export it 