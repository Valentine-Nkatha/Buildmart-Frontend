const url = '/api/login/'
const userlogin = async (loginData: {  email: string; password: string; }) => {
    try{
        const response = await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(loginData),
        });
        return response.json();
    }catch (error){
        return error
    }
};
export default userlogin;