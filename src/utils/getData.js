export const getData = async () => {
    // fetch data from random user Api, convert it to JSON then return only results from JSON object hence recieved, errors if any are displayed to the user as alerts
    const data = await fetch("https://randomuser.me/api/?results=5000").then(res => res.json()).then(res => res.results).catch(err => {
        alert(err.message)
    });

    return data;
}