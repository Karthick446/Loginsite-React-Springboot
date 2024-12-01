import axios from 'axios'
 
const Base_URL1="http://localhost:8082/loginUser"
const Base_URL2="http://localhost:8082/addUser"
class Service{
    loginuser(data){
       return axios.post(Base_URL1,data);
    }

    registeruser(register){
        return axios.post(Base_URL2,register);
    }



}
export default new Service();