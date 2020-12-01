//get dog images

function getDogImages(dogBreed) {
    fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
        .then(response=> response.json())
        .then(responseJson => displayResults(responseJson))
        //I understand this 'catch' is largely useless since the fetch from still returns a JSON, but leaving it in there for safe keeping
        .catch(error => alert("Sorry, that breed doesn't match. Try again."));

    $('#breed-of-dog').val('');
}

// test for success and display results
function displayResults(responseJson) {
    console.log(responseJson);
    
    if (responseJson.status !== "success") {
      alert("Sorry, that breed doesn't match. This is not a perfect system.");
    } else {
        $(".results").replaceWith(`<img src="${responseJson.message}" class="results">`);
    };
}
   
// watch for user input
function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      let dogBreed = $('#breed-of-dog').val();
      getDogImages( dogBreed );
    });
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});