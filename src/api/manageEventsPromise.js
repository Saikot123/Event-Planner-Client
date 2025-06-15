export const manageEventsPromise = (email, token) => {
    return fetch(`https://event-planner-server-three.vercel.app/myEvents/${email}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
};
