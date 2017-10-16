const addList = (listName) => ({
    type:"LIST_ADD",
    listName:listName, 
});

const editList = (newListName, listToChange) => ({
    type:"LIST_REMOVE",
    listName:newListName, 
});




module.exports = {
    addList,
    editList
};