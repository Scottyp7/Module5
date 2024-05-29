const express = require("express");
const router = express.Router();
const friends = require('../models/friends') // while server is running we can get the data and make changes.


// default endpoint, gets all friends
router.get('/', (req, res) => {
    res.json(friends)
})

// filter endpoint, gets friends matching the gender from 'gender' query parameter ie. /friends/filter?gender=male
// 1. Add support to also filter by a starting 'letter' query parameter ie. /friends/filter?letter=R
router.get('/filter', (req, res) => {
    console.log(req.query)
    let filterGender = req.query.gender;
    let filterletter = req.query.letter;
    let matchingFriends = [...friends];

    if (filterGender) {
        matchingFriends = matchingFriends.filter(friend => friend.gender == filterGender);
    }
    if (filterletter) {
        matchingFriends = matchingFriends.filter(friend => friend.name.startsWith(filterletter));
    }
    
    if (matchingFriends.length > 0) {
        // return valid data when the gender matches 
        res.status(200).json(matchingFriends)
    } 
     else {
            
        // and an error response when there are no matches
        res.status(404).json({error: "No friends matching gender "+filterGender})
    }  
})



// 2. Get information about this request from the headers
router.get('/info', (req, res) => {
    console.log(req.headers)
    let newObject = {"user-agent":req.headers["user-agent"],accept:req.headers.accept,"content-type":req.headers["content-type"]}; 

    // Modify this response to just return info on the user-agent, content-type and accept headers
    res.json(newObject)  
})

// 3. Dynamic request param endpoint - get the friend matching the specific ID ie. /friends/3

router.get('/:id', (req, res) => {
    console.log(req.params)
    let matchingFriends = [...friends]
    let friendId = req.params.id; // 'id' here will be a value matching anything after the / in the request path

    let findFriends = matchingFriends.find(aFriendInArray => aFriendInArray.id == friendId);

    if (findFriends) { // find friends is either an object or null

        res.json(findFriends)// no response needed outside of IF statement as this line sends json.

    } // if an ID is matched in the friends array then return that object

     else { // if no ID is matched then return the below
            
        res.status(404).json({error: "No friends matching that ID "+friendId})
    }  

})

// a POST request with data sent in the body of the request, representing a new friend to add to our list
router.post('/', (req, res) => {
    let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
    console.log(newFriend) // 'body' will now be an object containing data sent via the request body

    // we can add some validation here to make sure the new friend object matches the right pattern
    if (!newFriend.name || !newFriend.gender) {
        res.status(500).json({error: 'Friend object must contain a name and gender'});
        return;
    }
    else if (!newFriend.id) {
        newFriend.id = friends.length + 1; // generate an ID if one is not present
    }

    // if the new friend is valid, add them to the list and return the successfully added object
    friends.push(newFriend)
    res.status(200).json(newFriend)
})

// 4. Complete this new route for a PUT request which will update data for an existing friend
router.put('/:id', (req, res) => {
    let friendId = parseInt(req.params.id);

    let updatedFriend = req.body;
    let friendIndex = friends.findIndex(friend => friend.id === friendId) // returns negative -1 if it cant find the friend
    if (friendIndex === -1){
        res.status(404).json({error: "No friends matching that ID "+friendId}) // if true return this
    }
    else {
        friends[friendIndex]=updatedFriend // replaces friend index with the updated dated friend.
            res.json({result: 'Updated friend with ID ' + friendId, data: updatedFriend})
    }  }  )

module.exports = router;