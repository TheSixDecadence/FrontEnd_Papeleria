export const fetchUsers = async () => {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    return data.users;
};  