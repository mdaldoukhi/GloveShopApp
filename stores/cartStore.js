import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

class CartStore {
    items = [];

    constructor() {
        makeAutoObservable(this);
    }

    fetchItems = async () => {
        const items = await AsyncStorage.getItem("cart");
        this.items = items ? JSON.parse(items) : [];
    };

    addToCart = async (newItem) => {
        const foundItem = this.items.find(
            (item) => item.gloveId === newItem.gloveId
        );
        if (foundItem) foundItem.quantity += newItem.quantity;
        else this.items.push(newItem);
        await AsyncStorage.setItem("cart", JSON.stringify(this.items));
    };

    deleteItem = async (itemId) => {
        this.items = this.items.filter((item) => item.gloveId !== itemId)
        await AsyncStorage.setItem("cart", JSON.stringify(this.items));
    }
    checkout = async () => {
        this.items = [];
        await AsyncStorage.removeItem("cart");
        alert("Payment")
    }
    get totalQuantity() {
        let total = 0;
        this.items.forEach((item) => (total += item.quantity));
        return total;
    }
}

const cartStore = new CartStore();
cartStore.fetchItems();
export default cartStore;