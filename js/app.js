
// Creating an Array of Objects. Each object is a tweet and its information
var tweets = [{
    tweet: 'tweet 1',
    username: "joe dirt",
    created_at: `10-04-2021`,
    age: 18
},
{
    tweet: 'tweet 2',
    username: "steven",
    created_at: `10-05-2021`,
    age: 17
},
{
    tweet: 'tweet 3',
    username: "trump",
    created_at: `10-06-2021`,
    age: 99
},
{
    tweet: 'tweet 4',
    username: "trebek",
    created_at: `10-07-2021`,
    age: 55
},
{
    tweet: 'tweet 5',
    username: "bezos",
    created_at: `10-08-2021`,
    age: 14
},
{
    tweet: 'tweet 6',
    username: "musk",
    created_at: `10-09-2021`,
    age: 13
},
{
    tweet: 'tweet 7',
    username: "walmart",
    created_at: `10-10-2021`,
    age: 46
},
{
    tweet: 'tweet 8',
    username: "ikea",
    created_at: `10-11-2021`,
    age: 12
},
{
    tweet: 'tweet 9',
    username: "lowes",
    created_at: `10-12-2021`,
    age: 33
},
{
    tweet: 'tweet 10',
    username: "Homer",
    created_at: `10-13-2021`,
    age: 15
},
];

// Creating new array of tweets of users over 18. We use the .filter to loop through the array items, and then use a lambda function to return true values of all the users 
// over the age of 18. Using the tweet.age it checks to see if the users age is over 18 or not, and will store the list of objects that return true into a new array
var age_verified = tweets.filter((tweet) => tweet.age >= 18);
console.log(age_verified);




// Creating variable that is the length of the array.
var tl = tweets.length;
// Creating variable i (I think of it as Index). i is smaller than the array length (tl). i++ add's 1 to i to go over next item in array
for (var i = 0; i < tl; i++) {
    // Here we console log the tweets[i] which is our array index number for each loop, followed by .keyname to show the data in the specific object key that we want to show.
    console.log(`Tweet: ${tweets[i].tweet}, User: ${tweets[i].username}, Date Tweeted: ${tweets[i].created_at}`);

