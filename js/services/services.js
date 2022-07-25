const getDataMenu = async (url) =>{
    const res = await fetch(url);
    if(!res.ok){
        throw new Error(`Что-то пошло не так на запрос по адресу: ${url}, получита ошибка: ${res.status}`);
    }
    return await res.json();
};
const postData = async (url, data) =>{
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    })
    
    return await res.json();
}
export {getDataMenu};
export {postData};