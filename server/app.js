const { ImageAnnotatorClient } = require("@google-cloud/vision");

process.env.GOOGLE_APPLICATION_CREDENTIALS =
  "/Users/saitejsunkara/Desktop/Harvard/VeGrowww/server/keys/config.json";

async function getAnswers() {
  try {
    const client = new ImageAnnotatorClient();

    const question = "What is this?";

    const [annotateImageResponse] = await client.annotateImage({
      image: {
        source: {
          imageUri:
            "https://www.thesprucepets.com/thmb/WCHi1vABy_vfH6kDo7snIluUzyo=/2109x0/filters:no_upscale():strip_icc()/GettyImages-909948608-5c69cd9446e0fb0001560d1a.jpg",
        },
      },
      features: [{ type: "VISUAL_QA" }],
      visualQa: {
        questions: [question],
      },
    });
    console.log("Response:", annotateImageResponse);

    if (annotateImageResponse && annotateImageResponse.annotationResults) {
      console.log(
        "annotationResults:",
        annotateImageResponse.annotationResults
      );
      if (annotateImageResponse.annotationResults[0].visualQaAnswers) {
        const answers =
          annotateImageResponse.annotationResults[0].visualQaAnswers[0].answers;
        console.log(answers);
        if (answers && answers.length > 0) {
          console.log("Answers:", answers[0].answer);
        } else {
          console.log("No answers found.");
        }
      } else {
        console.log("No visual QA answers found in the response.");
      }
    } else {
      console.log("No annotation results found in the response.");
    }
  } catch (error) {
    // console.error('Error:', error);
  }
}

getAnswers();
