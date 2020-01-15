// Here we will make our api calls regarding authentication
export default function getAuthApiCalls(api) {
    return {
        getAll: ({ email, password }) => api.get('/expenses'),
        addExpense: expense => api.post('/expenses', expense),
        deleteExpense: ({ id }) => api.delete(`/expenses/${id}`),
        closeBorrow: ({ id }) => api.put(`/borrow/close`, { id })
    };
}
// here we export each name for each api call - maybe we will generate those
export const callNames = {
    GET_ALL: 'getAll',
    ADD_EXPENSE: 'addExpense',
    DELETE_EXPENSE: 'deleteExpense',
    CLOSE_BORROW: 'closeBorrow'
};
