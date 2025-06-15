export const joinEventsPromise = (email, token) => {
    return fetch(`https://event-planner-server-three.vercel.app/joinedEvents/${email}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
};
