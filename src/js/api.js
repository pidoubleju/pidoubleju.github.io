const getToken = () => {
    const curl = window.location.href;
    
    const token = curl.slice(curl.indexOf('=') + 1, curl.indexOf('&'));
    
    if(token.indexOf('http') < 0){

        return token;
    }
}

export default getToken;