import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Enter the URL: ",
      name: "Ans",
    },
  ])
  .then((answers) => {
    const url = answers.Ans;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream(`photos/${Date.now()}.jpg`));

    fs.writeFile(`${Date.now()}.txt`, url, (error) => {
      if (error) throw error;
      console.log("The file has been saved");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("There is a error");
    } else {
      // Something else went wrong
    }
  });
