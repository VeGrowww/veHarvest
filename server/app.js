const {
    ImageAnnotatorClient,
  } = require('@google-cloud/vision');
const fs = require('fs');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();
app.use(bodyParser.json());

  
//   process.env.GOOGLE_APPLICATION_CREDENTIALS = '/Users/saitejsunkara/Desktop/Harvard/VeGrowww/server/keys/config.json';
  
  async function getAnswers(imageFilePath) {
    try {
      const client = new ImageAnnotatorClient();
      const question = 'Is there a horse in this image?';
  
      const imageFileBuffer = fs.readFileSync(imageFilePath);
      const base64EncodedImage = Buffer.from(imageFileBuffer).toString('base64');
  
      const [annotateImageResponse] = await client.annotateImage({
        image: {
          content: base64EncodedImage,
        },
        features: [{
          type: 'VISUAL_QA'
        }],
        visualQa: {
          questions: [question],
        },
      });
  
      console.log('Response:', annotateImageResponse);
  
      if (annotateImageResponse && annotateImageResponse.annotationResults) {
        console.log('annotationResults:', annotateImageResponse.annotationResults);
        if (annotateImageResponse.annotationResults[0].visualQaAnswers) {
          const answers = annotateImageResponse.annotationResults[0].visualQaAnswers[0].answers;
          console.log(answers);
          if (answers && answers.length > 0) {
            console.log('Answers:', answers[0].answer);
          } else {
            console.log('No answers found.');
          }
        } else {
          console.log('No visual QA answers found in the response.');
        }
      } else {
        console.log('No annotation results found in the response.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
//   const imageFilePath = '/Users/saitejsunkara/Desktop/Harvard/VeGrowww/server/keys/p.png';

//   getAnswers(imageFilePath);

  app.get('/answer', async (req, res) => {
    const imageFilePath = req.query.imageFilePath;
    const answers = await getAnswers(imageFilePath);
  
    res.json(answers);
  });

  app.post("/tomato", async (req, res) => {
    console.log(req.body);
    let leaf_size = req.body.leafSize?Number(req.body.leafSize):res.send({status: 405, message: "Method Not Requested", points: 0});
    let leaf_color = req.body.leafColor?req.body.leafColor:res.send({status: 405, message: "Method Not Requested", points: 0});
    let fruit_size = req.body.fruitSize?req.body.fruitSize:res.send({status: 405, message: "Method Not Requested", points: 0});
    let week_number = req.body.weekNumber?Number(req.body.weekNumber):res.send({status: 405, message: "Method Not Requested", points: 0});

    if(week_number<7 || week_number%7!=0) {
        console.log(1);
        res.send({status: 404, message: "You have time to upload buddy! Take care of Tomatoes!", points: 0});
    }
    else if(week_number==14) {
        console.log(2);
        let points = 100;
        if(leaf_size<0 || leaf_size>1000) {
            res.send({status: 404, message: "Leaf Size cannot be less than 0 or greater than 1000 millimeters", points: 0});
        }

        else {
            if(leaf_color!="Green") {
                points-=10;
            }
            if(fruit_size<50 || fruit_size>70) {
                points-=10;
            }
            res.send({status: 200, message: "Well Done! You've Grown Tomato! Mother Earth's Gratitude: ", points: points});
        }
    }
    else if(week_number==21) {
        console.log(3);
        let points = 200;
        if(leaf_size<0 || leaf_size>1000) {
            res.send({status: 404, message: "Leaf Size cannot be less than 0 or greater than 1000 millimeters", points: 0});
        }

        else {
            if(leaf_color!="Green") {
                points-=20;
            }
            if(fruit_size<50 || fruit_size>70) {
                points-=20;
            }
            res.send({status: 200, message: "Well Done! You've Grown Tomato! Mother Earth's Gratitude: ", points: points});
        }
    }
    else if(week_number==28) {
        console.log(4);
        let points = 400;
        if(leaf_size<0 || leaf_size>1000) {
            res.send({status: 404, message: "Leaf Size cannot be less than 0 or greater than 1000 millimeters", points: 0});
        }

        else {
            if(leaf_color!="Green") {
                points-=40;
            }
            if(fruit_size<50 || fruit_size>70) {
                points-=40;
            }
            res.send({status: 200, message: "Well Done! You've Grown Tomato! Mother Earth's Gratitude: ", points: points});
        }
    }
    else if(week_number==28) {
        console.log(5);
        let points = 200;
        if(leaf_size<0 || leaf_size>1000) {
            res.send({status: 404, message: "Leaf Size cannot be less than 0 or greater than 1000 millimeters", points: 0});
        }

        else {
            if(leaf_color!="Green") {
                points-=20;
            }
            if(fruit_size<50 || fruit_size>70) {
                points-=20;
            }
            res.send({status: 200, message: "Well Done! You've Grown Tomato! Mother Earth's Gratitude: ", points: points});
        }
    }
    else {
        console.log(6);
        let points = 100;
        if(leaf_size<0 || leaf_size>1000) {
            res.send({status: 404, message: "Leaf Size cannot be less than 0 or greater than 1000 millimeters", points: 0});
        }

        else {
            if(leaf_color!="Green") {
                points-=10;
            }
            if(fruit_size<50 || fruit_size>70) {
                points-=10;
            }
            res.send({status: 200, message: "Well Done! You've Grown Tomato! Mother Earth's Gratitude: ", points: points});
        }
    }
  });


  app.post("/lettuce", async (req, res) => {
    console.log(req.body);
    let height = req.body.height?Number(req.body.height):res.send({status: 405, message: "Method Not Requested", points: 0});
    let leaf_color = req.body.leafColor?req.body.leafColor:res.send({status: 405, message: "Method Not Requested", points: 0});
    let leaf_size = req.body.leafSize?Number(req.body.leafSize):res.send({status: 405, message: "Method Not Requested", points: 0});
    let week_number = req.body.weekNumber?Number(req.body.weekNumber):res.send({status: 405, message: "Method Not Requested", points: 0});

    if(week_number<7 || week_number%7!=0) {
        console.log(1);
        res.send({status: 404, message: "You have time to upload buddy! Take care of Lettuce!", points: 0});
    }
    else if(week_number==14) {
        console.log(2);
        let points = 100;
        if(leaf_size<75 || leaf_size>102) {
            res.send({status: 404, message: "Lettuce Leaf Size cannot be less than 75 or greater than 102 millimeters", points: 0});
        }

        else {
            if(leaf_color!="Green" || leaf_color!="red" || leaf_color!="Yellow" || leaf_color!="brown" || leaf_color!="maroon") {
                points-=10;
            }
            if(height<300 || height>1000) {
                points-=10;
            }
            res.send({status: 200, message: "Well Done! You've Grown Lettuce! Mother Earth's Gratitude: ", points: points});
        }
    }
    else if(week_number==21) {
        console.log(2);
        let points = 200;
        if(leaf_size<75 || leaf_size>102) {
            res.send({status: 404, message: "Lettuce Leaf Size cannot be less than 75 or greater than 102 millimeters", points: 0});
        }

        else {
            if(leaf_color!="Green" || leaf_color!="red" || leaf_color!="Yellow" || leaf_color!="brown" || leaf_color!="maroon") {
                points-=20;
            }
            if(height<300 || height>1000) {
                points-=20;
            }
            res.send({status: 200, message: "Well Done! You've Grown Lettuce! Mother Earth's Gratitude: ", points: points});
        }
    }
    else if(week_number==28) {
        console.log(2);
        let points = 400;
        if(leaf_size<75 || leaf_size>102) {
            res.send({status: 404, message: "Lettuce Leaf Size cannot be less than 75 or greater than 102 millimeters", points: 0});
        }

        else {
            if(leaf_color!="Green" || leaf_color!="red" || leaf_color!="Yellow" || leaf_color!="brown" || leaf_color!="maroon") {
                points-=40;
            }
            if(height<300 || height>1000) {
                points-=40;
            }
            res.send({status: 200, message: "Well Done! You've Grown Lettuce! Mother Earth's Gratitude: ", points: points});
        }
    }
    else {
        console.log(2);
        let points = 200;
        if(leaf_size<75 || leaf_size>102) {
            res.send({status: 404, message: "Lettuce Leaf Size cannot be less than 75 or greater than 102 millimeters", points: 0});
        }

        else {
            if(leaf_color!="Green" || leaf_color!="red" || leaf_color!="Yellow" || leaf_color!="brown" || leaf_color!="maroon") {
                points-=10;
            }
            if(height<300 || height>1000) {
                points-=10;
            }
            res.send({status: 200, message: "Well Done! You've Grown Lettuce! Mother Earth's Gratitude: ", points: points});
        }
    }
  });


  app.post("/basil", async (req, res) => {
    console.log(req.body);
    let height = req.body.height?Number(req.body.height):res.send({status: 405, message: "Method Not Requested", points: 0});
    let leaf_color = req.body.leafColor?req.body.leafColor:res.send({status: 405, message: "Method Not Requested", points: 0});
    let leaf_size = req.body.leafSize?Number(req.body.leafSize):res.send({status: 405, message: "Method Not Requested", points: 0});
    let week_number = req.body.weekNumber?Number(req.body.weekNumber):res.send({status: 405, message: "Method Not Requested", points: 0});

    if(week_number<7 || week_number%7!=0) {
        console.log(1);
        res.send({status: 404, message: "You have time to upload buddy! Take care of Bsil!", points: 0});
    }
    else if(week_number==14) {
        console.log(2);
        let points = 100;
        if(leaf_size<30 || leaf_size>110) {
            res.send({status: 404, message: "Bsil Leaf Size cannot be less than 30 or greater than 110 millimeters", points: 0});
        }

        else {
            if(leaf_color!="Green") {
                points-=10;
            }
            if(height<406 || height>610) {
                points-=10;
            }
            res.send({status: 200, message: "Well Done! You've Grown Lettuce! Mother Earth's Gratitude: ", points: points});
        }
    }
    else if(week_number==21) {
        console.log(2);
        let points = 200;
        if(leaf_size<30 || leaf_size>110) {
            res.send({status: 404, message: "Basil Leaf Size cannot be less than 30 or greater than 110 millimeters", points: 0});
        }

        else {
            if(leaf_color!="Green") {
                points-=20;
            }
            if(height<406 || height>610) {
                points-=20;
            }
            res.send({status: 200, message: "Well Done! You've Grown Lettuce! Mother Earth's Gratitude: ", points: points});
        }
    }
    else if(week_number==28) {
        console.log(2);
        let points = 400;
        if(leaf_size<30 || leaf_size>112) {
            res.send({status: 404, message: "Basil Leaf Size cannot be less than 30 or greater than 112 millimeters", points: 0});
        }

        else {
            if(leaf_color!="Green") {
                points-=40;
            }
            if(height<406 || height>610) {
                points-=40;
            }
            res.send({status: 200, message: "Well Done! You've Grown Lettuce! Mother Earth's Gratitude: ", points: points});
        }
    }
    else {
        console.log(2);
        let points = 200;
        if(leaf_size<30 || leaf_size>112) {
            res.send({status: 404, message: "Basil Leaf Size cannot be less than 30 or greater than 112 millimeters", points: 0});
        }

        else {
            if(leaf_color!="Green") {
                points-=10;
            }
            if(height<300 || height>1000) {
                points-=10;
            }
            res.send({status: 200, message: "Well Done! You've Grown Lettuce! Mother Earth's Gratitude: ", points: points});
        }
    }
  });
  
  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });