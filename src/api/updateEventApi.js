export const updateEventsPromise = (id, token) => {
    return fetch(`http://localhost:3000/events/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
};
