// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
const getUserData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    const newUsers = data.map((user)=>{return user.name});
    return console.log(newUsers);
};
getUserData();


