//update..
export default function createReducer(initialState, handlers) {

    return function reducer(state = initialState, action) {

        if (handlers.hasOwnProperty(action.type)) {

            return handlers[action.type](state, action);

        } else {
            return state;
        }
    }
}

//handlers[action.type] ->
// function (state,action){
//
//     var newState={};
//
//     action.recipes.forEach(
//         function(recipe){
//             var id=recipe.href;
//             newState[id]=_extends({},recipe,{id:id});
//         });
//
//
//     return newState;
// }