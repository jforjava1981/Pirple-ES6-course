
/**
 * SONG DESCRIPTION - 
 * this file describes various attributes of a song
 */
exports.printSongInfo = function () {
    var name = "You fill up my senses"
    var shortDescription
    var author = "John Denver"
    var dateWritten = "1972-5-15"
    var composers = ["John Denver"]
    var duration  = "10800"
    var theme = "romantic"
    var genre = "classic"
    var singers = { "name": "John", "lastName": "Denver", "name": "Sara", "lastName": "Denver" } 
    var availableOnCD = false
    var availableOnAppleItunes = true
    var formatsAvailable = ["mp3","mp4","itunes"]
    var dateRecored = "1972-5-25"
    var recordingStudioName = "Jingle Bell Studios"
    var copyrightOwners = [
      { 
        "ownerType" : "personal", 
        "name": "Jenny", 
        "lastName":"Denver"
      },//only personal owner has last name.
      {
        "ownerType" : "business", 
        "name": "Denver Studios" 
      }]
    var copyrightValidTill = "2019-12-31"
    var numberofStanza = 4 // indicates how long the song text is.  
    var language = "English"
    var isTranlationAvailableInOtherLanguages = false
    var copiesSold = "1000000"
    var album = null; 
    /** to demonstrate null data type. when song is published as single song and it not published as part of any album "album" attribute is null.
    */  
    var isSingle = true //if true indiates it is not pbulished as a part of album. 

    console.log(name);
    console.log(shortDescription);
    console.log(author);
    console.log(dateWritten);
    console.log(composers);
    console.log(duration);
    console.log(theme);
    console.log(genre);
    console.log(singers);
    console.log(availableOnCD);
    console.log(availableOnAppleItunes);
    console.log(formatsAvailable);
    console.log(dateRecored);
    console.log(recordingStudioName);
    console.log(copyrightOwners);
    console.log(copyrightValidTill);
    console.log(numberofStanza);
    console.log(language);
    console.log(isTranlationAvailableInOtherLanguages);
    console.log(copiesSold);
    console.log(album);
    console.log(isSingle);

}    
 
