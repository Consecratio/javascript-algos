/*
SIMILAR
-------------------------------------------------------------------------
https://otcatchup.util.repl.co/

PROMPT
-------------------------------------------------------------------------
When people code together on Replit, everyone's code needs to be in sync. You have to see the same code as I do even though we're typing on different computers. The challenge is making sure we don't end up with a jumbled mess of text while we type together.

So in order to keep everyone's code in sync, Replit uses a method called Operational Transformations, or OT.

Think about OT like this: when you type, you can either insert text, delete text, or move your cursor to a new position (this is called skip in OT land). These actions are called operations, and they transform your document!

More concretely, you can look at an Operational Transformation as a function that takes in a document, a position within that document (like where your cursor is), and then either modifies the document at that position or skips to a new position.

*/

function isValid(stale, latest, otjson) {
    // take the otjson and change it to an array of objects
    let regExp = /\[(.*?)\]/
    let matches = regExp.exec(otjson)
    let newArr = [matches[0]]
    // console.log(matches[0]) // shows the array extracted using the regEx
    // console.log(otjson.split('}, {'))

    console.log(newArr)
    // iterate through the array of objects
    // for(let i = 0; i < newArr.length; i++){
        
    // }
    // execute each 'op' in the array of objects
}


isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations.',
    '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}]'
); // true

isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations.',
    '[{"op": "skip", "count": 45}, {"op": "delete", "count": 47}]'
); // false, delete past end

isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations.',
    '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}, {"op": "skip", "count": 2}]'
); // false, skip past end

isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'We use operational transformations to keep everyone in a multiplayer repl in sync.',
    '[{"op": "delete", "count": 7}, {"op": "insert", "chars": "We"}, {"op": "skip", "count": 4}, {"op": "delete", "count": 1}]'
); // true

isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    '[]'
); // true