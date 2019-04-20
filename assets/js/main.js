let eventsResponse = '';
let restResponse = '';
let eventsResponsePosition = 0;
let restResponsePosition = 0;

$(document).ready(function () {

  // array of cities for validation
  let cityList = ["Stankonia", "Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];

  // Declaring our 'global' variables
  let latitude = ''; // event latitude to feed to yelp
  let longitude = ''; // event longitude to feed to yelp
  let city = ''; // holds the city for dynamic text rendering
  let eventKeyword = '' // keyword for event search
  let loaderText = ''; // changes with each API call to give user feedback

  console.log('- - - - - - - - - - - - - - - - - - - - ');
  console.log("Big shoutout to team $('.group').on('click') for the Yelp help :)");

  $('.modal').modal(); // intializing modals

  let pictures = ['/assets/img/date1.jpg', '/assets/img/date2.jpg', '/assets/img/date3.jpg'];
  
  // for (z = 0; z < pictures.length; z++) {
  //   console.log(pictures.length)
  //   setInterval(function() {
  //     $('#v1').css('background-image', 'url(' + pictures[z] + ')');
  //   },2000);
  // };
  /* ----------------------------------------------------------------------------------- */
  // --------------------------------- FIRE FIRE FIRE ---------------------------------- //
  /* ----------------------------------------------------------------------------------- */
  var config = {
    apiKey: "AIzaSyDcy7crIuPJYtdVRwFQFb6Vyp5vPlZrgAE",
    authDomain: "group-project-1-12e16.firebaseapp.com",
    databaseURL: "https://group-project-1-12e16.firebaseio.com",
    projectId: "group-project-1-12e16",
    storageBucket: "group-project-1-12e16.appspot.com",
    messagingSenderId: "5760922749"
  };

  firebase.initializeApp(config);

  let database = firebase.database();

  console.log('- - - - - - - - - - - - - - - - - - - - ');
  console.log('Firebase Initialized - woot!');

  var ref = database.ref('rest')

  /* ------------------------------------------------------------------------------------- */
  // --------------------------------- BASE BASE BASE ------------------------------------ //
  /* ------------------------------------------------------------------------------------- */

  /* ----------------------------------------------------------------------------------- */
  // --------------------------------- BEGIN API CALLs --------------------------------- //
  /* ----------------------------------------------------------------------------------- */

  // ========== Begin modal to show loader while API calls are made ==========
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
  // ========== End modal to show loader while API calls are made ==========

  // ==================== BEGIN GeoLocation API Call ====================
  let callAPIGeo = function () {
    loaderText = 'Finding your location...';
    let url = 'https://api.ipdata.co/?api-key=';
    const key = '8bf6f7f9f28c7ed5495f6f6353d07d28a05c6bb9fbab598f32e7cba3';
    var queryURL = url + key;
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {

      city = response.city; // sets city 
      $('.city').text(city); // populates the text for location 

      $('#v2').css('display', 'block');

      console.log('- - - - - - - - - - - - - - - - - - - - ');
      console.log('API Response - ipdata.io')
      console.log(response); // returns the initial ip address geolocation data (city)
      console.log('- - - - - - - - - - - - - - - - - - - - ');
      console.log('User is located in ' + city);

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

    let queryURL = url + city + '&Keyword=' + eventKeyword + '&size=21' + '&apikey=' + key; // city pulled from geolocatin API call 
    $.ajax({
      url: queryURL,
      method: "GET",
      success: function (response) {
        eventsResponse = response;  // stores the response data for global access 
        console.log('- - - - - - - - - - - - - - - - - - - - ');
        console.log('API Response - TicketMaster events search stored')
      }
      // dataType: 'jsonp', // optional - needed to work around a CORS warning/error
    }).then(function (response) {

      $('#eventsList').empty(); // clears event list for re-rendering new searches

      // rendering our events search results
      for (i = 0; i < response._embedded.events.length; i++) {

        let event = response._embedded.events[i].name; // get event name
        let item = $('<button>');

        item.addClass('col s12 l4');
        item.addClass('eventCard');
        item.addClass('events-rests');
        item.addClass('hvr-shutter-out-horizontal');

        item.text(event);
        item.attr("data-event", i);

        let modalTrigger = $('<a>');

        modalTrigger.addClass('modal-trigger');
        modalTrigger.attr('href', '#modal1');
        modalTrigger.append(item)

        $('#eventsList').append(modalTrigger);
      }
      console.log('- - - - - - - - - - - - - - - - - - - - ');
      console.log('API Response - TicketMaster')
      console.log(response);
    });
  };
  // ==================== END Events API Call ====================

  // ==================== BEGIN Yelp API Call ====================
  let yelp = function () {

    loaderText = 'Finding tasty food near your event...';

    let category = "";
    let price = "3";
    const radius = "10000";
    let yelpApiKey = "4YFPvbnRG_3T1cP_B2tCpTFPpKnV2tgIvSmz926QynUmbZFl_y3eNsVBWjZLTNqx8y5Lth__B95rWD5_-iU0BF4Mpk9Dqz7LhB8gOq-ekL0guI0Wm1MQHX4jSUK2XHYx";
    let yelpQueryURL = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${category}&latitude=${latitude}&longitude=${longitude}&price=${price}&radius=${radius}`;

    $.ajax({
      url: yelpQueryURL,
      method: "GET",
      headers: {
        "Authorization": `Bearer ${yelpApiKey}`
      },
      success: function (response) {
        restResponse = response; // stores the response data for global access 
        console.log('- - - - - - - - - - - - - - - - - - - - ');
        console.log('API Response - Yelp restaurants stored');
      }
    }).then(function (response) {

      // ===== Begin Restaurant List Rendering =====
      for (i = 0; i < response.businesses.length; i++) {

        let restaurant = response.businesses[i].name; // get event name
        let item = $('<button>');

        item.addClass('col s12 l4');
        item.addClass('restCard');
        item.addClass('events-rests');
        item.addClass('hvr-shutter-out-horizontal');

        item.text(restaurant);
        item.attr("data-rest", i);

        // set our modal for restaurants
        let modalTrigger = $('<a>');

        modalTrigger.addClass('modal-trigger');
        modalTrigger.attr('href', '#modal2');

        modalTrigger.append(item) // add button to modal trigger wrapper

        // render restaurants to DOM
        $('#restaurantList').append(modalTrigger);
      }
      console.log('- - - - - - - - - - - - - - - - - - - - ');
      console.log('API Response - Yelp')
      console.log(response)
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

    $('#v1').css('display', 'none'); // update the view

    console.log('- - - - - - - - - - - - - - - - - - - - ');
    console.log('Application has started');
  });
  // ==================== END - CLICK EVENT - start app - populate ip-based geo location ====================

  // ==================== BEGIN - CLICK EVENT - VIEW CHANGE - update view 2 > 3 ====================
  $('#btn-city-yes').on('click', function () {

    $('#v2-city').addClass('scale-out');
    $('#v3').css('display', 'block');

    setTimeout(function () {
      $('#v2-city').css('display', 'none');
    }, 50);

    $('#v3').css('opacity', '1');
    $('#v2').css('min-height', '0');

    console.log('- - - - - - - - - - - - - - - - - - - - ');
    console.log('View updated - user city confirmed');
  });
  // ==================== END - CLICK EVENT - VIEW CHANGE - update view 2 > 3 ====================

  // ==================== BEGIN - CLICK EVENT - update city functionality ====================
  function city_opt1_hide() {
    $('#city-opt1').addClass('scale-out') // hides the original options
    $('#city-opt2').addClass('scale-in'); // reveals the secondary options
  }

  function city_opt2_hide() {
    $('#city-opt2').removeClass('scale-in') // hides the seondary options
    $('#city-opt1').removeClass('scale-out'); // reveals the original options
  };

  $('#btn-city-no').on('click', city_opt1_hide); // click event to reveal city update options

  $('#btn-city-stay').on('click', city_opt2_hide); // click event to revert to original city options
  $('#btn-city-stay').on('click', function () {
    $('#city-error').addClass('hidden');
  });

  // updating the city based on user input
  $('#btn-city-change').on('click', function () {

    cityCheck = $('#city-input').val(); // get input
    cityCheck = cityCheck.charAt(0).toUpperCase() + cityCheck.slice(1); // capitalize the city

    if (cityList.indexOf(cityCheck) === -1) {
      $('#city-error').removeClass('hidden'); // shows error message

      console.log('- - - - - - - - - - - - - - - - - - - - ');
      console.log('Location update denied');

    } else {

      city = cityCheck;
      $('#city-error').addClass('hidden'); // hides error message

      city_opt2_hide(); // reverts to original city options

      console.log('- - - - - - - - - - - - - - - - - - - - ');
      console.log('Location update allowed');
    };

    $('.city').text(city);
    console.log('- - - - - - - - - - - - - - - - - - - - ');
    console.log('Current city - ' + city);
  })
  // ==================== END - CLICK EVENT - update city functionality ====================

  // ========== BEGIN - CLICK EVENT - select event search parameters and call events API ========== 
  $('.btn-events').on('click', function () {

    eventKeyword = $(this).text(); // sets keyword for event search

    console.log('- - - - - - - - - - - - - - - - - - - - ');
    console.log('User event search: ' + eventKeyword);

    callAPIEvents(); // searchs events by keyword 

    // ========== Begin Events Keyword Parameters for future versions ========== //
    // This code allows for the addition of multiple events keyword functionality in a future version

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

  // ========== END - CLICK EVENT - select event search parameters and call events API ========== 

  // ========== BEGIN - CLICK EVENT - Event Modal and Event Selection ========== 
  // click event for dynamically rendered events
  $(document.body).on('click', '.eventCard', function () {

    a = $(this).attr('data-event'); // get index from data attribute
    eventsResponsePosition = a; // logs index of event for later use

    // declaring variables for rendering the event modal
    name = eventsResponse._embedded.events[a].name;
    img = eventsResponse._embedded.events[a].images[5].url;
    venue = eventsResponse._embedded.events[a]._embedded.venues[0].name;
    address = eventsResponse._embedded.events[a]._embedded.venues[0].address.line1 + ' ' + eventsResponse._embedded.events[a]._embedded.venues[0].city.name + ', ' + eventsResponse._embedded.events[a]._embedded.venues[0].state.name;
    date = eventsResponse._embedded.events[a].dates.start.localDate;
    url = eventsResponse._embedded.events[a].url;

    // load the event details into the modal
    $('#eventName').text(name);
    $('#eventIMG').attr('src', img);
    $('#eventVenue').text(venue);
    $('#eventDate').text(date);
    $('#eventAddress').text(address);
    $('#tix').attr('href', url);

    $('#eventName1').text(name);
    $('#eventIMG1').attr('src', img);
    $('#eventVenue1').text(venue);
    $('#eventDate1').text(date);
    $('#eventAddress1').text(address);

    console.log('- - - - - - - - - - - - - - - - - - - - ');
    console.log('Event updated - ' + name);
  });

  $('#eventSelect').on('click', function () {
    // setting coordinates to pass to Yelp  API
    latitude = eventsResponse._embedded.events[eventsResponsePosition]._embedded.venues[0].location.latitude;
    longitude = eventsResponse._embedded.events[eventsResponsePosition]._embedded.venues[0].location.longitude;

    $('#v3').css('display', 'none'); // change view
    $('#v4').css('display', 'block'); // change view

    yelp() // call the Yelp API

    console.log('- - - - - - - - - - - - - - - - - - - - ');
    console.log('Event selection confirmed - ' + name);
    console.log('- - - - - - - - - - - - - - - - - - - - ');
    console.log('Event stored: Lat: ' + latitude + ' Long: ' + longitude);
    console.log('- - - - - - - - - - - - - - - - - - - - ');
    console.log('View updated - location passed to Yelp API');
  });
  // ========== END - CLICK EVENT - Event Modal and Event Selection ========== 

  // ========== BEGIN - CLICK EVENT - Restaurant Modal and Restaurant Selection ========== 
  // click event for dynamically rendered restaurants
  $(document.body).on('click', '.restCard', function () {

    a = $(this).attr('data-rest');
    restResponsePosition = a; // set index position for later use

    // setting variables to render to modal
    name = restResponse.businesses[a].name;
    img = restResponse.businesses[a].image_url;
    price = restResponse.businesses[a].price;
    rating = restResponse.businesses[a].rating;
    ratingCount = restResponse.businesses[a].review_count;
    phone = restResponse.businesses[a].phone;
    address = restResponse.businesses[a].location.display_address[0] + ', ' + restResponse.businesses[a].location.display_address[1];
    url = restResponse.businesses[a].url;

    // load the restaurant details into the modal
    $('#restName').text(name);
    $('#restIMG').attr('src', img);
    $('#restPrice').text('Price: ' + price);
    $('#restRating').text(rating + ' out of 5 with ' + ratingCount + ' reviews');
    $('#restAddress').text(address);
    $('#site').attr('href', url);
    $('#restPhone').text('Phone: ' + phone);

    $('#restName1').text(name);
    $('#restIMG1').attr('src', img);
    $('#restPrice1').text('Price: ' + price);
    $('#restRating1').text(rating + ' out of 5 with ' + ratingCount + ' reviews');
    $('#restAddress1').text(address);
    $('#site1').attr('href', url);
    $('#restPhone1').text('Phone: ' + phone);

    console.log('- - - - - - - - - - - - - - - - - - - - ');
    console.log('Restaurant updated - ' + name);
  });

  $('#restSelect').on('click', function () {

    $('#v4').css('display', 'none'); // updates view
    $('#v5').css('display', 'block'); // updates view
    setTimeout(function () {
      $('#v5').css('opacity', '1');
    }, 50);

    console.log('- - - - - - - - - - - - - - - - - - - - ');
    console.log('Restaurant selection confirmed - ' + restResponse.businesses[a].name);
    console.log('- - - - - - - - - - - - - - - - - - - - ');
    console.log('Updating view to Summary.');

    data = restResponse.businesses[restResponsePosition]; // set restaurant to var for firebase

    ref.push(data); // push to firebase

    console.log('- - - - - - - - - - - - - - - - - - - - ');
    console.log('Restaurant data saved to Firebase');
  });
  // ========== BEGIN - CLICK EVENT - Restaurant Modal and Restaurant Selection ========== 

  /* ----------------------------------------------------------------------------------- */
  // ------------------------------- END EVENT LISTENERS ------------------------------- //
  /* ----------------------------------------------------------------------------------- */
});



