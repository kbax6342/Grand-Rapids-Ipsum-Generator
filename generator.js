// Code that generates the random lorem ipsum text

// Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

// Constructor function that creates an object with the sentences property
function GenerateNewText() {
  // Add property to the object
  this.sentences =
    [
      "Welcome to Grand Rapids.",
      "Grand Rapids will be nationally recognized as an equitable, welcoming, innovative and collaborative city with a robust economy, safe and healthy community, and the opportunity for a high quality of life for all..",
      "To elevate quality of life through excellent City services.",
      "Wondering when your trash and recycling is picked up? You can use our My Neighborhood page to look up your next collection dates.",
      "You need to put your bin out at the curb before 7:00 am on the day of collection. We recommend moving it the night before to make sure you don't miss a pickup.",
      "Our City code says you can't leave your bin at the curb. Make sure you move it back to your property on the same day it's collected",
      "Are you planning to operate a business out of your home with customers or clients visiting your home? Are you looking to grow medical marijuana as a caregiver?",
      "Grand Rapids is home to people of every race, creed, color, religion, and national origin.",
      "These and other groups have all contributed their own unique colors and brush strokes to the canvas of Grand Rapids, creating a rich, vibrant community that emphasizes collaboration while honoring diversity. ",
      "The future of our region depends on our ability to embrace change and leverage diversity through leadership, education, employment, suppliers, and continued community support. ",
      "The Hopewell were mound builders, constructing great geometric earthworks that served as enclosures, burial places, defensive structures and religious sites.",
      "Around 1700 A.D., people of the Three Fires - the Ottawa (Odawa), Chippewa (Ojibwa) and Potawatomi Indians - established villages in and around what is now Grand Rapids.",
      "Kingma’s Market, an 80-year-old Grand Rapids institution, offers unique local grocery products and a huge selection of domestic and imported beers, wines and cheeses."
   ];
}

// Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[Math.floor(Math.random() * this.sentences.length)]
	return randomSentence;
}

// Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = "";
  // Set the minimum number of words
  let minimumCharacterLength = 250;
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(" " + this.getRandomSentence());
    }
  }
  return paragraph;
}

// Method to the GenerateNewText constructor function that gerates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  // Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  // Convert array into HTML string
  let paragraphHTML = "";
  allParagraphs.forEach(function (paragraph) {
    paragraphHTML += "<p>" + paragraph + "</p>";
  });
  return paragraphHTML;
}

module.exports = loremIpsum;