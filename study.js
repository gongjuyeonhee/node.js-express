const newInfo = {
  id: 11,
  name: "William",
  team: "Engineering",
  position: "Android Developer",
  emailAddress: "zake@google.com",
  phoneNumber: "010-xxxx-xxxx",
  admissionDate: "2021/06/12",
  birthday: "1995/09/27",
  profileImage: "profile11.png",
};

/*---Object.keys---*/
//console.log(Object.keys(newInfo)); //배열로 출력

/*---Object.entries---*/
//console.log(Object.entries(newInfo));

// Object.entries(newInfo).forEach((pair) => {
//   console.log(`Key: ${pair[0]} => Value: ${pair[1]}`);
// });

/*---for...in---*/
// for (const property in newInfo) {
//   console.log(property); //문자열로 출력
// }
