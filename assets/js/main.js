$(document).ready(function () {
  let cityList = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];

  let latitude = ''; // this changes with each step in the app (initial ip geolocation, then dining, then event)
  let longitude = ''; // this changes with each step in the app (initial ip geolocation, then dining, then event)
  let city = ''; // swap variable name for whatever we end up using
  let APIResponse = false; // check for api success (re-use as needed)
  let params = []; // array to hold event parameters (needs to be accessed by click event listener and api call - hence global scope)
  let loaderText = '';
  let event = {
    name: '',
    date: '',
    venue: '',
    price: '',
    url: '',
    // etc....
  };
  let restaurant = {
    name: '', // response.businesses[i].name
    price: '', // response.businesses[i].price
    url: '', // response.businesses[i].url
    rating: '', // response.businesses[i].rating
    ratingCount: '', // response.businesses[i].review_count
    address: '', // response.businesses[i].location.display_address[a]
    transactions: '', // response.businesses[i].transactions[a]
    phone: '', // response.businesses[i].phone
    categories: '', // response.businesses[i].categories[a]
    imageURL: '', // response.businesses[i].image_url
    // etc.
  }

  /* ----------------------------------------------------------------------------------- */
  // --------------------------------- BEGIN API CALLs --------------------------------- //
  /* ----------------------------------------------------------------------------------- */

  // ==================== BEGIN GeoLocation API Call ====================
  let callAPIGeo = function () {
    loaderText = 'Finding your location...';
    let url = 'https://api.ipdata.co/?api-key=';
    const key = '8bf6f7f9f28c7ed5495f6f6353d07d28a05c6bb9fbab598f32e7cba3';
    var queryURL = url + key;
    $.ajax({
      url: queryURL,
      method: "GET",
      // dataType: 'jsonp', // optional - needed to work around a CORS warning/error
    }).then(function (response) {
      APIResponse = true;
      console.log(response); // returns the initial ip address geolocation data // TEST CODE
      //latitude = response.latitude; // sets current lat // TEST CODE
      // longitude = response.longitude; // sets current long // TEST CODE
      city = response.city; // sets city - swap for whatever location data we end up using - change variable name!!!!
      // console.log('User latitude is ' + latitude); // tell us the lat // TEST CODE
      //  console.log('User longitude is ' + longitude); // tell us the long // TEST CODE
      console.log('You are in ' + city); // TEST CODE
      $('#city').text('It looks like you are in ' + city + '.  Is this correct?'); // populates the text for location (depends on APIResponse === true)
    });
  };
  // ==================== END GeoLocation API Call ====================

  // ==================== BEGIN Events API Call ====================
  let callAPIEvents = function () { // Begin ajax call for events
    loaderText = 'Finding awesome events near you...';
    let url = 'https://app.ticketmaster.com/discovery/v2/events.json?city=';
    const key = '1WLkNy3Qylx70A9ds5a5gXCT2PNoGeGq';

    classifications = '';

    for (i = 0; i < params.length; i++) {
      let newClassification = params[i] + '&';
      classifications = classifications + newClassification;
      console.log(newClassification);
    };

    // below prevents the events from failing by searching for all events if params is empoty
    if (params.length === 0) {
      classifications = 'all&';
    };

    console.log(classifications); // TEST CODE

    // ===== TESTING CODE =====

    $('#paramsList').empty(); // empty out search results from previous search

    let queryURL = url + city + '&keyword=' + classifications + 'apikey=' + key; // city pulled from geolocatin API call (this could be moved to be called on load for efficeincy instead of tied to a click event)
    $.ajax({
      url: queryURL,
      method: "GET",
      // dataType: 'jsonp', // optional - needed to work around a CORS warning/error
    }).then(function (response) {
      console.log(response); // returns the initial ip address geolocation data // TEST CODE 
      $('#eventsList').empty();
      // ===== Begin Event List Rendering =====
      // NOTE: Most of the event details should be rendered in a modal - show only the key data (event, time, date, etc.) in the list items
      for (i = 0; i < response._embedded.events.length; i++) {
        // console.log(response._embedded.events[i].name); // TEST CODE

        // ===== Begin Event Item core data (main data like name, date, etc.) =====
        let event = response._embedded.events[i].name; // get event name
        let eventItem = $('<button>');
        eventItem.addClass('col s12 l3');
        // eventItem.addClass('waves-effect waves-light btn');
        eventItem.addClass('eventCard');
        eventItem.text(event);
        $('#eventsList').append(eventItem);
        // ===== End Event Item core data (main data like name, date, etc.) =====

        // ===== Begin Event Details core data (extra data for modals) =====
        // let image = response._embedded.events[i].images[5].url; // get event img 
        // let imageEvent = $('<img>');
        // imageEvent.attr('src', image);
        // imageEvent.addClass('image');
        // $('#eventsList').append(imageEvent); // this may be swapped (we may not need images) or added to a seperate element that popualates on event details modal
        // ===== End Event Details core data (extra data for modals) =====
      } // ===== End Event List Rendering =====
    }); // ===== End ajax .then actions
  };
  // ==================== END Events API Call ====================

  // ==================== BEGIN Yelp API Call ====================
  // ==================== Yelp variables ====================

  let yelp = function () {
    loaderText = 'Finding tasty food near your event...';
    let category = "pizza";
    let location = "30308";
    let price = "2";
    const radius = "1000";
    let yelpApiKey = "4YFPvbnRG_3T1cP_B2tCpTFPpKnV2tgIvSmz926QynUmbZFl_y3eNsVBWjZLTNqx8y5Lth__B95rWD5_-iU0BF4Mpk9Dqz7LhB8gOq-ekL0guI0Wm1MQHX4jSUK2XHYx";

    let yelpQueryURL = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${category}&location=${location}&price=${price}&radius=${radius}`;
    console.log(yelpQueryURL)

    $.ajax({
      url: yelpQueryURL,
      method: "GET",
      headers: {
        "Authorization": `Bearer ${yelpApiKey}`
      }
    }).then(function (response) {
      //let dbTestObject = {"name": response.businesses[2].name, "id": response.businesses[2].id};
      console.log(response)
      console.log(response.businesses[0].alias)
    });
  }


  // ==================== END Yelp API Call ====================

  /* ----------------------------------------------------------------------------------- */
  // ---------------------------------- END API CALLs ---------------------------------- //
  /* ----------------------------------------------------------------------------------- */



  /* ----------------------------------------------------------------------------------- */
  // ------------------------------ BEGIN EVENT LISTENERS ------------------------------ //
  /* ----------------------------------------------------------------------------------- */

  // ==================== BEGIN - CLICK EVENT - start app - populate ip-based geo location ====================
  $('#start').on('click', function () {
    // $('.overlay').removeClass('hidden'); // TEST CODE
    callAPIGeo(); // gets the initial geolocation data for the user
    if (APIResponse === true) {
      // $('.overlay').addClass('hidden'); // TEST CODE
      // $('.menu1-btn').addClass('scale-in'); // reveals the next menu options (these will eventually be in a seperate component)
    };
  });
  // ==================== END - CLICK EVENT - start app - populate ip-based geo location ====================

  // ---------- Click Event - Location Confirmation
  $('#locationYes').on('click', function () {
    console.log('User confirmed - update view...');
    // this is going to change our view here
  })

  $('#locationNo').on('click', function () {
    // displays the hidden form to update the city
    $('#cityForm').css('display', 'block');
  })

  // ---------- Click Event - Events API Call
  $('#eventSearch').on('click', function () {
    callAPIEvents();
  })

  // ---------- Ajax Loading Animations
  $(document).ajaxStart(function () {
    $('#loaderText').text(loaderText);
    $(".overlay").css("display", "block");
    $(".overlay").css("opacity", "1");
  });

  $(document).ajaxComplete(function () {
    $(".overlay").css("opacity", "0");
    setTimeout(function () {
      $(".overlay").css("display", "none");
    }, 1000);
  });

  // ---------- adding and removing event search parameters from params array
  $('.btn-events').on('click', function () {
    param = $(this).text(); // gets button text
    let paramIndex = params.indexOf(param); // gets index position of this event param
    if ($(this).hasClass('btn-events-active')) { // checks to see if added
      $(this).removeClass('btn-events-active'); // removes if in params array
      $(this).css('background', '#26a69a');
      params.splice(paramIndex, 1);
    } else {
      $(this).addClass('btn-events-active'); // adds active class to this
      $(this).css('background', 'red');
      params.push($(this).text()) // adds to params array
    };
    console.log('events params: ' + params);  // TEST Code
  });



  $('#locationUpdate').on('click', function () {
    cityCheck = $('#cityNew').val();
    cityCheck = cityCheck.charAt(0).toUpperCase() + cityCheck.slice(1);
    console.log(cityCheck);
    if (cityList.indexOf(cityCheck) === -1) {
      console.log('invalid city');
      
    } else {
      city = cityCheck // not right
    }

      
    console.log(city);
    // $('#cityForm').css('display', 'none');
    $('#city').text('It looks like you are in ' + city + '.  Is this correct?');
  })

  yelp();
  /* ----------------------------------------------------------------------------------- */
  // ------------------------------- END EVENT LISTENERS ------------------------------- //
  /* ----------------------------------------------------------------------------------- */


  // =============== BEGIN COMMON FUNCTIONS (TRANSITIONS) ===============
  // ----- use this space to define things that can be recycled, like transitions 
  // =============== END COMMON FUNCTIONS (TRANSITIONS) ===============



  // us city validation
  // javascript, coffeescript, jquery...

});



