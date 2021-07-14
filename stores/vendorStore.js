import { makeAutoObservable } from 'mobx';
import axios from "axios"

class VendorStore {
    vendors = [];
    loading = true;
    constructor() {
        makeAutoObservable(this)
    }
    fetchVendors = async () => {
        try {
          const response = await axios.get("http://localhost:8000/shops");
          this.vendors = response.data;
          this.loading = false
        } catch (error) {
          console.error("fetchVendors: ", error);
        }
      };
}
const vendorStore = new VendorStore() // create instance
vendorStore.fetchVendors();
export default vendorStore; // export it 