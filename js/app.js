
var tweets = [{
    tweet: 'tweet 1',
    username: "joe dirt",
    created_at: `10-04-2021`,
    age: 47
},
{
    tweet: 'tweet 2',
    username: "steven",
    created_at: `10-05-2021`,
    age: 47
},
{
    tweet: 'tweet 3',
    username: "trump",
    created_at: `10-06-2021`,
    age: 47
},
{
    tweet: 'tweet 4',
    username: "trebek",
    created_at: `10-07-2021`,
    age: 47
},
{
    tweet: 'tweet 5',
    username: "bezos",
    created_at: `10-08-2021`,
    age: 47
},
{
    tweet: 'tweet 6',
    username: "musk",
    created_at: `10-09-2021`,
    age: 47
},
{
    tweet: 'tweet 7',
    username: "walmart",
    created_at: `10-10-2021`,
    age: 47
},
{
    tweet: 'tweet 8',
    username: "ikea",
    created_at: `10-11-2021`,
    age: 47
},
{
    tweet: 'tweet 9',
    username: "lowes",
    created_at: `10-12-2021`,
    age: 47
},
{
    tweet: 'tweet 10',
    username: "Homer",
    created_at: `10-13-2021`,
    age: 47
},
];
var tl = tweets.length;
for (var i = 0; i < tl; i++) {
    console.log(`Tweet: ${tweets[i].tweet}, User: ${tweets[i].username}, Date Tweeted: ${tweets[i].created_at}`);
    console.log();
}