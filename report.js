const newman = require("newman");

newman.run(
  {
    collection:("https://api.postman.com/collections/29332524-90716733-b40f-4ac1-8f07-5bfb8dbf57b2?access_key=PMAT-01H8YS0BMV5XBGW5FFBCHTMASP"), // pointing to local JSON file.

    iterationCount: 1,
    reporters: "htmlextra",
    reporter: {
      htmlextra: {
        export: "./reports/report.html", // If not specified, the file will be written to newman/ in the current working directory.
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);