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
    let newArr = JSON.parse(otjson)

    // track cursor position
    let cursor = 0

    // iterate through the array of objects
    for(let i = 0; i < newArr.length; i++){
        // execute each 'op' in the array of objects
        switch(newArr[i].op){
            case "skip":
                // add count to cursor
                cursor += newArr[i].count
                // check if skipping would go beyond the length of the stale sentence
                if(cursor  > stale.length){
                    return false
                }
                break;
            case "delete":
                // check if deleting would go beyond the length of the stale sentence
                if(cursor + newArr[i].count > stale.length){
                    return false
                } else {
                    // update stale after deleting characters
                    stale = stale.slice(0, cursor) + stale.slice(cursor + newArr[i].count, stale.length)
                }
                break;
            case "insert":
                // update stale by inserting characters in the middle
                stale = stale.slice(0, cursor) + newArr[i].chars + stale.slice(cursor + newArr[i].chars.length, stale.length)
                // update cursor location
                cursor += newArr[i].chars.length
                break;
        }
    }

    // check if the updated stale and latest are the same, otherwise return false
    if(stale !== latest){
        return false
    }

    return true
}


console.log(isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations.',
    '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}]'
)); // true

console.log(isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations.',
    '[{"op": "skip", "count": 45}, {"op": "delete", "count": 47}]'
)); // false, delete past end

console.log(isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations.',
    '[{"op": "skip", "count": 40}, {"op": "delete", "count": 47}, {"op": "skip", "count": 2}]'
)); // false, skip past end

console.log(isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'We use operational transformations to keep everyone in a multiplayer repl in sync.',
    '[{"op": "delete", "count": 7}, {"op": "insert", "chars": "We"}, {"op": "skip", "count": 4}, {"op": "delete", "count": 1}]'
)); // true

console.log(isValid(
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    'Repl.it uses operational transformations to keep everyone in a multiplayer repl in sync.',
    '[]'
)); // true