# Redux101
Redux Intro

After this morning's workshop, it's your turn to create a little redux based program.

We are going to create a simple trello/todo programme where we use redux to manage the state of our todo app.

Our todo app can add todo lists with a title, we can edit that title, and we can remove that list. We can add todos to a list, edit todos, comlete todos and delete todos. Finally we can also move a todo from one list to another.

In that respect we want the following actions:

ADD_LIST
EDIT_LIST
DELETE_LIST
ADD_TODO
EDIT_TODO
COMPLETE_TODO
DELETE_TODO
MOVE_TODO
We also need to design what our initial state should be. We know we need to keep track of lists and cards. We suggest that the initial state should look like the following:

const initialState = {
    lists: {},
    cards: {}
}
It might also be worth thinking what information we need to record about a list and a card:

Lists - A way to identify the list, the name of the list Cards - A way to identify the card, the text of the card, the list it belongs to

Testing

Remember the most important thing here is testing. You want to make sure that you are testing the reducers properly. Make sure that you are not mutating state.

We need to make sure we test that the original state is not mutated though. We can do this by checking equality. I.e. if you are adding an object to an array, create a new array! This is what pure functions and functional programming is about!

MAKE SURE YOU USE TDD! Test that your action creators return the correct actions Test that your reducers take a state and an action and return the correct new state Test that you are not mutating the previous state!

File structure

Here is an example of how you can structure your code

actions
types
actions
reducers
reducer