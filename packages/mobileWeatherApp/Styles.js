import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  // body: {
  //   fontFamily: "montseratt"
  // },
  container: {
    flex: 1,
    // padding: 0,
    // boxSizing:
    //   'border-box' /* accounts for any padding and margin, eg. 50px element plus 10px margin, the element will be 40px*/,
    // backgroundSize:
    //   'cover' /* scales the image to the smallest possible size while keeping the ratio to cover the background */,
    // backgroundPosition: 'bottom' /* */,
    // transition: '0.4s ease-out' /* */,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    transition: 'all 0.4 ease',
    // justifyContent: 'center',
  },
  // appWarm: {
  //   // backgroundImage: url("../public/warm-bg.jpeg"),
  //   /* transition: all 0.4 ease, */
  // },
  // main: {
  //   /* only one main element per document, and it refers to the dominant content */
  //   minHeight: "100vh", /* vh = percentage viewport height. This means it covers 100% of the viewport */
  //   // backgroundImage: /* can take multiple images */ linear-gradient(
  //   //   to bottom,
  //   //   rgba(0, 0, 0, 0.2),
  //   //   rgba(0, 0, 0, 0.7)
  //   //   ),
  //   //   padding: "25px", /* within the element */
  //   // },
  searchBox: {
    marginTop: '200%',
    width:
      '100%' /* how much width the element takes up within its parent element */,
    // marginTop: '50%' /* outside the element */,
  },
  /* block direction - up and down */
  /* inline direction - across */
  /* english is in horizontal writing mode */
  /* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow */
  // searchBar: {
  //     display: "block", /* */
  //     width: "100%",
  //   padding: "15px",
  //   appearance: "none", /* auto means it uses the native OS's theming */
  //   background: "none",
  //   border: "none",
  //   outline: "none", /* outside the border */
  //   // backgroundColor: rgba(255, 255, 255, 0.5),
  //   borderRadius: "0px 0px 16px 16px", /* top left, top right, bottom right, bottom left */
  //   marginTop: "-25px", /* brings the element 25 px up to account for the padding of the main class */
  //   boxShadow: "0px 5px rgba(0, 0, 0, 0.2)",
  //   color: "#313131",
  //   fontSize: "20px",
  //   transition: "0.4s ease",
  // },
  // searchBarFocus: {
  //   // backgroundColor: rgba(255, 255, 255, 0.75),
  // },
  // location: {
  //   color: "#fff",
  //   fontSize: "32px",
  //   fontWeight: "500",
  //   textAlign: "center",
  //   textShadow: "2px 2px rgba(50, 50, 50, 0.75)",
  // },
  // date: {
  //   color: "#fff",
  //   fontSize: "20px",
  //   fontWeight: "300",
  //   textAlign: "center",
  //   fontStyle: "italic",
  //   textShadow: "2px 2px rgba(50, 50, 50, 0.75)",
  // },
  // weatherBox: {
  //   textAlign: "center",
  // },
  // temperature: {
  //   position: "relative",
  //   display: "inline-block",
  //   margin: "30px auto",
  //   padding: "7px",
  //   backgroundColor: rgba(255, 255, 255, 0.2),
  //   borderRadius: "8px",
  //   fontSize: "100px",
  //   fontWeight: "500",
  //   color: "#fff",
  //   textShadow: "4px 4px rgba(0, 0, 0, 0.4)",
  //   /* text-align: center, */
  //   boxShadow: "3px 3px rgba(0, 0, 0, 0.4)",
  // },
  // weather: {
  //   fontSize: "48px",
  //   fontWeight: "500",
  //   color: "#fff",
  //   textShadow: "3px 3px rgba(0, 0, 0, 0.4)"
  // }
});
