import axios from "axios";
const instance =axios.create({
    baseURL:"http://localhost:5000/",
    timeout:1000,
})

instance.interceptors.request.use(
    async(config)=>{
        try{
            const accessToken =localStorage.getItem("accessToken");
            config.headers.Authorization =`Bearer ${accessToken}`;
            return config;
        }catch(error){
            console.error("Request Error:",error);
        }
    }
)
//Response Interceptor 

instance.interceptors.response.use(
    (response)=>{
console.log("Response data:",response.data);
return response;
    },
    (error) =>{
        console.error("Response error:",  error);
        if(error.response.status === 401){
            console.log("unauthorized error, Redirecting to login...");
        }
    }
);


export default instance