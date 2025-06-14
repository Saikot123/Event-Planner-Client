export const manageEventsPromise = (email, token) => {
    return fetch(`http://localhost:3000/myEvents/${email}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
};
