(()=>{
  const db=window.SONGSET_DATA;
  if(!db||!Array.isArray(db.setlists))return;
  const setlist={
    "id":"seed-cocoa-2022-01-14-hotcocoa-live",
    "performer":"道明寺ここあ",
    "title":"〖#ほっとここあライブ〗アツい冬には福きたる / 道明寺ここあ",
    "videoUrl":"https://www.youtube.com/watch?v=4ef3t8fjaPg",
    "streamDate":"2022-01-14",
    "sourceCommentUrl":"https://www.youtube.com/watch?v=4ef3t8fjaPg&lc=Ugx-xvkECzkTmvLo48d4AaABAg",
    "songs":[
      {"title":"Sorrows","artist":"King Gnu","startSeconds":809,"endSeconds":870,"position":1}
    ]
  };
  if(!db.setlists.some(x=>x.id===setlist.id||x.videoUrl===setlist.videoUrl))db.setlists.push(setlist);
})();
