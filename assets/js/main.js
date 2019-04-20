let eventsResponse = '';
let restResponse = '';
let eventResponsePosition = 0;
let restResponsePosition = 0;

$(document).ready(function () {

  // array of cities for validation
  let cityList = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];

  let latitude = ''; // event latitude to feed to yelp
  let longitude = ''; // event longitude to feed to yelp
  let city = ''; // holds the city for dynamic text rendering
  
  // let eventKeyword = []; // array to hold event parameters (needs to be accessed by click event listener and api call - hence global scope) // for future versioning with multiple keyword
  evenyKeyword = '' // keyword for event search
  let loaderText = ''; // changes with each API call to give user feedback
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

  // ========== Begin modal to show loader while api calls are made ==========
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
  // ========== End modal to show loader while api calls are made ==========

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
      city = response.city; // sets city - swap for whatever location data we end up using - change variable name!!!!
      console.log('You are in ' + city); // TEST CODE
      $('.city').text(city); // populates the text for location (depends on APIResponse === true)
    });
  };
  // ==================== END GeoLocation API Call ====================

  // ==================== BEGIN Events API Call ====================
  let callAPIEvents = function () { // Begin ajax call for events
    loaderText = 'Finding awesome events near you...'; // Update the loader text

    let url = 'https://app.ticketmaster.com/discovery/v2/events.json?city=';
    const key = '1WLkNy3Qylx70A9ds5a5gXCT2PNoGeGq';

    // ========== Begin Events Keyword Parameters for future versions ========== //
    // ----- This code allows for the addition of multiple events keyword functionality in a future version
    // for (i = 0; i < eventKeyword.length; i++) {
    //   let keywordNew = eventKeyword[i] + '&';
    //   keyword = keyword + keywordNew;
    //   console.log(keywordNew);
    // };

    // // below prevents the events from failing by searching for all events if eventKeyword is empoty
    // if (eventKeyword.length === 0) {
    //   keyword = 'all&';
    //   console.log(keyword); // TEST CODE
    // };

    // $('#paramsList').empty(); // empty out search results from previous search
    // ========== End Events Keyword Parameters for future versions ========== //

    let queryURL = url + city + '&Keyword=' + eventKeyword + '&apikey=' + key; // city pulled from geolocatin API call (this could be moved to be called on load for efficeincy instead of tied to a click event)
    console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET",
      success: function (response) {
        eventsResponse = response;  // stores the response data for global access 
      }
      // dataType: 'jsonp', // optional - needed to work around a CORS warning/error
    }).then(function (response) {
      $('#eventsList').empty(); // clears event list for re-rendering new searches
      // ===== Begin Event List Rendering =====
      for (i = 0; i < response._embedded.events.length; i++) {
        let event = response._embedded.events[i].name; // get event name
        let restItem = $('<button>');
        restItem.addClass('col s12 l4');
        restItem.addClass('eventCard');
        restItem.addClass('hvr-shutter-out-horizontal');
        restItem.text(event);
        restItem.attr("data-event", i);
        let modalTrigger = $('<a>');
        modalTrigger.addClass('modal-trigger');
        modalTrigger.attr('href', '#modal1');
        modalTrigger.append(restItem)
        $('#eventsList').append(modalTrigger);
      } // ===== End Event List Rendering =====
    }); // ===== End ajax .then actions =====
  };
  // ==================== END Events API Call ====================

  // ==================== BEGIN Yelp API Call ====================
  // ==================== Yelp variables ====================
  let yelp = function () {
    loaderText = 'Finding tasty food near your event...';
    let category = "pizza";
    // let location = "30308";
    let price = "2";
    const radius = "10000";
    let yelpApiKey = "4YFPvbnRG_3T1cP_B2tCpTFPpKnV2tgIvSmz926QynUmbZFl_y3eNsVBWjZLTNqx8y5Lth__B95rWD5_-iU0BF4Mpk9Dqz7LhB8gOq-ekL0guI0Wm1MQHX4jSUK2XHYx";

    //let yelpQueryURL = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${category}&location=${location}&price=${price}&radius=${radius}`;
    let yelpQueryURL = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${category}&latitude=${latitude}&longitude=${longitude}&price=${price}&radius=${radius}`;
    console.log(yelpQueryURL)

    $.ajax({
      url: yelpQueryURL,
      method: "GET",
      headers: {
        "Authorization": `Bearer ${yelpApiKey}`
      },
      success: function (response) {
        restResponse = response; // stores the response data for global access 
      }
    }).then(function (response) {
      //let dbTestObject = {"name": response.businesses[2].name, "id": response.businesses[2].id};
      console.log(response)
  
      // ===== Begin Restaurant List Rendering =====
      for (i = 0; i < response.businesses.length; i++) {
        let restaurant = response.businesses[i].name; // get event name
        let restItem = $('<button>');
        restItem.addClass('col s12 l4');
        restItem.addClass('restCard');
        restItem.addClass('hvr-shutter-out-horizontal');
        restItem.text(restaurant);
        restItem.attr("data-rest", i);

        // set our modal for restaurants
        let modalTrigger = $('<a>');
        modalTrigger.addClass('modal-trigger');
        modalTrigger.attr('href', '#modal2');
        modalTrigger.append(restItem) // add button to modal trigger wrapper

        // render restaurants to DOM
        $('#restaurantList').append(modalTrigger);
      } // ===== End Retaurant List Rendering =====
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
  $('#btn-start').on('click', function () {
    callAPIGeo(); // gets the initial geolocation data for the user
    $('#v1').css('display', 'none');
  });
  // ==================== END - CLICK EVENT - start app - populate ip-based geo location ====================

  // ---------- Click Event - Location Confirmation
  $('#btn-city-yes').on('click', function () {
    // this is going to change our view here
    console.log('User confirmed - update view...');
    $('#v2-city').addClass('scale-out');
    setTimeout(function () {
      $('#v2-city').addClass('display-none');
    }, 50);

    $('#v3').css('opacity', '1');
    $('#v2').css('min-height', '0');
  });

  function city_opt1_hide() {
    // hides the original options
    $('#city-opt1').addClass('scale-out')
    // reveals the secondary options
    $('#city-opt2').addClass('scale-in');
  }
  function city_opt2_hide() {
    // hides the seondary options
    $('#city-opt2').removeClass('scale-in')
    // reveals the original options
    $('#city-opt1').removeClass('scale-out');
  };

  $('#btn-city-no').on('click', city_opt1_hide);

  $('#btn-city-stay').on('click', city_opt2_hide);

  // ========== adding and removing event search parameters from eventKeyword array ========== //
  $('.btn-events').on('click', function () {
    eventKeyword = $(this).text();
    console.log(eventKeyword);
    callAPIEvents();

    // ========== Begin Events Keyword Parameters for future versions ========== //
    // ----- This code allows for the addition of multiple events keyword functionality in a future version

    // param = $(this).text(); // gets button text
    // let paramIndex = eventKeyword.indexOf(param); // gets index position of this event param
    // if ($(this).hasClass('btn-events-active')) { // checks to see if added
    //   $(this).removeClass('btn-events-active'); // removes if in eventKeyword array
    //   $(this).css('background', 'white');
    //   $(this).css('color', 'black');
    //   eventKeyword.splice(paramIndex, 1);
    // } else {
    //   $(this).addClass('btn-events-active'); // adds active class to this
    //   $(this).css('background', 'lightseagreen');
    //   $(this).css('color', 'white');
    //   eventKeyword.push($(this).text()) // adds to eventKeyword array
    // };
    // console.log('events eventKeyword: ' + eventKeyword);  // TEST Code
    // ========== End Events Keyword Parameters for future versions ========== //

  });

  $('#btn-city-change').on('click', function () {
    cityCheck = $('#city-input').val();
    cityCheck = cityCheck.charAt(0).toUpperCase() + cityCheck.slice(1);
    if (cityList.indexOf(cityCheck) === -1) {
      $('#city-error').removeClass('hidden');
      console.log(cityCheck + ' is an invalid city');
    } else {
      city = cityCheck;
      $('#city-error').addClass('hidden');
      city_opt2_hide();

    };
    console.log(city);
    $('.city').text(city);
  })

   // click event for dynamically rendered restaurants
  $(document.body).on('click', '.eventCard', function () {
    a = $(this).attr('data-event');
    console.log(a);
    name = eventsResponse._embedded.events[a].name;
    img = eventsResponse._embedded.events[a].images[5].url;
    venue = eventsResponse._embedded.events[a]._embedded.venues[0].name;
    address = eventsResponse._embedded.events[a]._embedded.venues[0].address.line1 + ' ' + eventsResponse._embedded.events[a]._embedded.venues[0].city.name + ', ' + eventsResponse._embedded.events[a]._embedded.venues[0].state.name;
    date = eventsResponse._embedded.events[a].dates.start.localDate;
    url = eventsResponse._embedded.events[a].url
    eventsResponsePosition = $(this).attr('data-event');

    // load the event details into the modal
    $('#eventName').text(name);
    $('#eventIMG').attr('src', img);
    $('#eventVenue').text(venue);
    $('#eventDate').text(date);
    $('#eventAddress').text(address);
    $('#tix').attr('href', url);
  });

  $('#eventSelect').on('click', function () {
    latitude = eventsResponse._embedded.events[eventsResponsePosition]._embedded.venues[0].location.latitude;
    console.log(latitude);
    longitude = eventsResponse._embedded.events[eventsResponsePosition]._embedded.venues[0].location.longitude;
    console.log(longitude);
    yelp()
    $('#v3').css('display','none');
  });

// ----------------------------------------------------------------------------------------------------------------

  // click event for dynamically rendered restaurants
  $(document.body).on('click', '.restCard', function () {
    a = $(this).attr('data-rest');
    name = restResponse.businesses[a].name;
    img = restResponse.businesses[a].image_url;
    price = restResponse.businesses[a].price;
    rating = restResponse.businesses[a].rating;
    ratingCount = restResponse.businesses[a].review_count;
    phone = restResponse.businesses[a].phone;
    address = restResponse.businesses[a].location.display_address[0] + ', ' + restResponse.businesses[a].location.display_address[1];
    url = restResponse.businesses[a].url;
    
    restResponsePosition = a;
    console.log(restResponse.businesses[a].name);

    // load the restaurant details into the modal
    $('#restName').text(name);
    $('#restIMG').attr('src', img);
    $('#restPrice').text('Price: ' + price);
    $('#restRating').text(rating + ' out of 5 with ' + ratingCount + ' reviews');
    $('#restAddress').text(address);
    $('#site').attr('href', url);
    $('#restPhone').text(phone);
  });

  $('#restSelect').on('click', function () {
   $('#v4').css('display', 'none');
   console.log('User selected ' + restResponse.businesses[a].name + ' for dining.');
   console.log('Updating view to Summary.');
  });

  /* ----------------------------------------------------------------------------------- */
  // ------------------------------- END EVENT LISTENERS ------------------------------- //
  /* ----------------------------------------------------------------------------------- */


  // =============== BEGIN COMMON FUNCTIONS (TRANSITIONS) ===============
  // ----- use this space to define things that can be recycled, like transitions 

  // ---------- Ajax Loading Animations


  // =============== END COMMON FUNCTIONS (TRANSITIONS) ===============

});



