export const joinEventsPromise = (email, token) => {
    return fetch(`http://localhost:3000/joinedEvents/${email}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
};
