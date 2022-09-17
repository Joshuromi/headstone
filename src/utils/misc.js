export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const logOutUser = () => {
        localStorage.clear();
        window.location = "/login";
}