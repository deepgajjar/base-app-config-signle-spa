import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication(
   "@SampleAuth/root-navigation",
  () =>
    System.import<LifeCycles>(
      "@SampleAuth/root-navigation"
    ),
    (location) => {
      console.log("location.pathname  ==>> ",location.pathname);
     return true
    }
  );

// registerApplication(
//   "@SampleAuth/root-navigationms", 
//   () => System.import<LifeCycles>("@SampleAuth/root-navigation"),
//   (location) => {
//     console.log("location.pathname  ==>> ",location.pathname);
//    return location.pathname.startsWith("/ems")
//   }
// )

start({
  urlRerouteOnly: true,
});
