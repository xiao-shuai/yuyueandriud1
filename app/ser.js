 getMessages =(userId)=> {
    let user = getUserInfo(userId);
    return user.favoriteSong.map((msg, i) => {
      return {
        text: msg,
        my: i == user.favoriteSong.length - 1 ? false : Math.random() >= 0.5
      }
    });
  }