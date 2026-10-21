const getDate = () => {
    const now = new Date();

    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString();
    const day = now.getDate().toString()
    const hours = now.getHours().toString()
    const minutes = now.getMinutes().toString()
    const seconds = now.getSeconds().toString()

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

console.log(getDate());