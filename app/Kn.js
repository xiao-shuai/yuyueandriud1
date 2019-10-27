function getMessages(userId) {
    let user = getUserInfo(userId);
    return user.favoriteSong.map((msg, i) => {
      return {
        text: msg,
        my: i == user.favoriteSong.length - 1 ? false : Math.random() >= 0.5
      }
    });
  }
  
  
  let userId = '1';
  
  let users = [
    {
      "id": "1",
      "age": 23,
      "name": {
        "first": "John",
        "last": "Doe"
      },
      "online": true,
      "email": "fletcher.saunders@mail.tv",
      "phone": "+1 (898) 460-3581",
      "address": "140 Riverdale Avenue, Allendale, Maine, 1825",
      "registered": "Saturday, June 14, 2014 8:33 PM",
      "avatar": require("../../img/avatars/boy.jpg"),
      "profileBg": require("../../img/lights2.jpeg")
    },
    {
      "id": "2",
      "age": 21,
      "name": {
        "first": "Tran",
        "last": "Keith"
      },
      "online": true,
      "email": "tran.keith@mail.net",
      "phone": "+1 (911) 404-2873",
      "avatar": require("../../img/avatars/boy2.jpeg"),
      "favoriteSong": whereIsMyMind
    },
    {
      "id": "3",
      "age": 37,
      "name": {
        "first": "Ramos",
        "last": "Rowe"
      },
      "online": true,
      "email": "ramos.rowe@mail.co.uk",
      "avatar": require("../../img/avatars/boy3.jpeg"),
      "favoriteSong": tnt
    },
    {
      "id": "4",
      "age": 34,
      "name": {
        "first": "Sellers",
        "last": "Delgado"
      },
      "online": true,
      "email": "sellers.delgado@mail.me",
      "avatar": require("../../img/avatars/boy4.jpeg"),
      "favoriteSong": highWay
    },
    {
      "id": "5",
      "age": 25,
      "name": {
        "first": "Eliza",
        "last": "Dotson"
      },
      "online": false,
      "email": "eliza.dotson@mail.org",
      "avatar": require("../../img/avatars/girl.jpeg"),
      "favoriteSong": backInBlack
    },
    {
      "id": "6",
      "age": 25,
      "online": true,
      "name": {
        "first": "Nick",
        "last": "Jameson"
      },
      "email": "nick.jameson.@mail.org",
      "avatar": require("../../img/avatars/nick.jpg"),
      "favoriteSong": boysDontCry
    },
    {
      "id": "7",
      "online": true,
      "avatar": require("../../img/avatars/cecilia.jpg"),
      "age": 31,
      "name": {
        "first": "Cecilia",
        "last": "Rutledge"
      },
      "email": "ceciliarutledge@pearlessa.com",
      "favoriteSong": hardDaysNight
    },
    {
      "id": "8",
      "online": true,
      "avatar": require("../../img/avatars/bernadette.jpg"),
      "age": 27,
      "name": {
        "first": "Bernadette",
        "last": "Beck"
      },
      "email": "bernadettebeck@pearlessa.com",
      "favoriteSong": heartOut
    },
    {
      "id": "9",
      "online": false,
      "avatar": require("../../img/avatars/evelyn.jpg"),
      "age": 30,
      "name": {
        "first": "Evelyn",
        "last": "Valencia"
      },
      "email": "evelynvalencia@pearlessa.com",
      "favoriteSong": wrong
    },
    {
      "id": "10",
      "online": false,
      "avatar": require("../../img/avatars/rosalinda.jpeg"),
      "age": 23,
      "name": {
        "first": "Rosalinda",
        "last": "Morrison"
      },
      "email": "rosalindamorrison@pearlessa.com",
      "favoriteSong": weAreTheChampions
    },
    {
      "id": "11",
      "online": false,
      "avatar": require("../../img/avatars/stanton.png"),
      "age": 38,
      "name": {
        "first": "Stanton",
        "last": "Pugh"
      },
      "email": "stantonpugh@pearlessa.com",
      "favoriteSong": starman
    },
    {
      "id": "12",
      "online": true,
      "avatar": require("../../img/avatars/jenny.jpeg"),
      "age": 37,
      "name": {
        "first": "Jenny",
        "last": "Abbott"
      },
      "email": "workmanabbott@pearlessa.com",
      "favoriteSong": lifeOnMars
    },
    {
      "id": "13",
      "online": true,
      "avatar": require("../../img/avatars/eula.jpeg"),
      "age": 20,
      "name": {
        "first": "Eula",
        "last": "Doyle"
      },
      "email": "euladoyle@pearlessa.com",
      "favoriteSong": passenger
    }
  
  ];
  
  let posts = [
    {
      id: "1",
      userId: "1",
      text: "Stars can't shine without darkness.",
      img: require("../../img/posts/stars.jpg"),
      likes: 4
    },
    {
      id: "2",
      userId: "1",
      text: "When one door closes, another opens; but we often look so long and so regretfully upon the closed door " +
      "that we do not see the one which has opened for us.",
      img: require("../../img/posts/doors.jpg"),
      likes: 2
    },
    {
      id: "3",
      userId: "1",
      text: "Everything has beauty, but not everyone sees it",
      img: require("../../img/posts/beauty.jpg"),
      likes: 9
  
    },
    {
      id: "4",
      userId: "1",
      text: "What doesn't kill you will make you stronger.",
      img: require("../../img/posts/birds.jpeg"),
      likes: 5
    },
    {
      id: "5",
      userId: "1",
      text: "True friends stab you in the front.",
      img: require("../../img/posts/friends.jpg"),
      likes: 6
    },
    {
      id: "6",
      userId: "1",
      text: "The only basis for living is believing in life, loving it, and applying the whole force of one's " +
      "intellect to know it better.",
      img: require("../../img/posts/life.jpg"),
      likes: 3
    },
    {
      id: "7",
      userId: "2",
      text: "When I like people immensely, I never tell their names to any one. It is like surrendering a " +
      "part of them. I have grown to love secrecy.",
      img: require("../../img/posts/people.jpeg"),
      likes: 4
    },
  
    {
      id: "9",
      userId: "3",
      text: "Insanity: doing the same thing over and over again and expecting different results.",
      img: require("../../img/posts/river.jpg"),
      likes: 2
    },
    {
      id: "10",
      userId: "4",
      text: "The surgeon had been sitting with his face turned towards the fire: giving the palms of his " +
      "hands a warm and a rub alternately. ",
      img: require("../../img/posts/sea.jpeg"),
      likes: 44
    },
    {
      id: "11",
      userId: "5",
      text: "What an excellent example of the power of dress, young Oliver Twist was! Wrapped in the blanket " +
      "which had hitherto formed his only covering, he might have been the child of a nobleman or a beggar; " +
      "it would have been hard for the haughtiest stranger to have assigned him his proper station in society.",
      img: require("../../img/posts/sun.jpeg"),
      likes: 1
    },
    {
      id: "12",
      userId: "5",
      text: "But now that he was enveloped in the old calico robes which had grown yellow in the same service, " +
      "he was badged and ticketed, and fell into his place at once--a parish child--the orphan of a workhouse--the humble," +
      " half-starved drudge--to be cuffed and buffeted through the world--despised by all, and pitied by none.",
      img: require("../../img/posts/tree.jpeg"),
      likes: 8
    },
    {
      id: "13",
      userId: "6",
      text: "For the next eight or ten months, Oliver was the victim of a systematic course of treachery and deception.",
      img: require("../../img/posts/onemore.jpeg"),
      likes: 7
    },
    {
      id: "14",
      userId: "7",
      text: "He was brought up by hand.",
      img: require("../../img/posts/wree.jpg"),
      likes: 7
    },
    {
      id: "15",
      userId: "8",
      text: "The hungry and destitute situation of the infant orphan was duly reported by the workhouse authorities " +
      "to the parish authorities.",
      img: require("../../img/posts/wood.jpg"),
      likes: 7
    },
    {
      id: "16",
      userId: "9",
      text: "The hungry and destitute situation of the infant orphan was duly reported by the workhouse authorities " +
      "to the parish authorities.",
      img: require("../../img/posts/petrak.jpeg"),
      likes: 8
    },
    {
      id: "17",
      userId: "10",
      text: "This was no very great consolation to the child.",
      img: require("../../img/posts/society.jpeg"),
      likes: 10
    },
    {
      id: "18",
      userId: "10",
      text: "It was the critical moment of Oliver's fate",
      img: require("../../img/posts/d.jpg"),
      likes: 7
    },
    {
      id: "19",
      userId: "11",
      text: "Mr. Bumble grasped the undertaker by the arm, and led him into the building",
      img: require("../../img/posts/dxd.jpeg"),
      likes: 11
    },
    {
      id: "20",
      userId: "12",
      text: "There being nothing eatable within his reach, Oliver replied in the affirmative.",
      img: require("../../img/posts/bike.jpg"),
      likes: 7
    },
    {
      id: "21",
      userId: "13",
      text: "Nearly all men can stand adversity, but if you want to test a man’s character, give him power.",
      img: require("../../img/posts/power.jpeg"),
      likes: 5
    },
    {
      id: "22",
      userId: "13",
      text: "When I do good, I feel good; when I do bad, I feel bad, and that is my religion.",
      img: require("../../img/posts/good.jpeg"),
      likes: 3
    },
    {
      id: "8",
      userId: "2",
      text: "You know we poor artists have to show ourselves in society from time to time, just to remind " +
      "the public that we are not savages",
      img: require("../../img/posts/night.jpeg"),
      likes: 11
    }
  ];
  