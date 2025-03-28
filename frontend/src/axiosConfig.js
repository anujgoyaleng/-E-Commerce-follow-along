@@ -0,0 +1,8 @@
import axios from 'axios';

 const instance = axios.create({
    baseURL: 'https://ecommerce-fa.onrender.com',
     withCredentials: true, // crucial for sending cookies
 });

 export default instance;