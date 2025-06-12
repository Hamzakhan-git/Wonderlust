const sampleListings = [
    {
      title: "Cozy Beachfront Cottage",
      description:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1500,
      location: "Malibu",
      country: "United States",
      
      geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },

      category: "Boats"
    },
    {
      title: "Modern Loft in Downtown",
      description:
        "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "New York City",
      country: "United States",
      geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },

      category: "Boats"
    },
    {
      title: "Mountain Retreat",
      description:
        "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1000,
      location: "Aspen",
      country: "United States",
      geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },

      category: "Mountains"
    },
    {
      title: "Historic Villa in Tuscany",
      description:
        "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2500,
      location: "Florence",
      country: "Italy",
      geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },
category: "Trending"
    },
    {
      title: "Secluded Treehouse Getaway",
      description:
        "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 800,
      location: "Portland",
      country: "United States",
      geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },

      category: "Camping"
    },
    {
      title: "Beachfront Paradise",
      description:
        "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2000,
      location: "Cancun",
      country: "Mexico",
      
      geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },
category: "Trending"
    },
    {
      title: "Rustic Cabin by the Lake",
      description:
        "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 900,
      location: "Lake Tahoe",
      country: "United States",
      geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },

      category: "Boats"
    },
    {
      title: "Luxury Penthouse with City Views",
      description:
        "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 3500,
      location: "Los Angeles",
      country: "United States",
      geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },

      category: "Iconic Cities"
    },
    {
      title: "Ski-In/Ski-Out Chalet",
      description:
        "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 3000,
      location: "Verbier",
      country: "Switzerland",
 
 geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },
     category: "Mountains"
    },
    {
      title: "Safari Lodge in the Serengeti",
      description:
        "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 4000,
      location: "Serengeti National Park",
      country: "Tanzania",
    
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },
  category: "Rooms"
    },
    {
      title: "Historic Canal House",
      description:
        "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1800,
      location: "Amsterdam",
      country: "Netherlands",
 
 geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },
     category: "Iconic Cities"
    },
    {
      title: "Private Island Retreat",
      description:
        "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 10000,
      location: "Fiji",
      country: "Fiji",
      geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },
category: "Arctic"
    },
    {
      title: "Charming Cottage in the Cotswolds",
      description:
        "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "Cotswolds",
      country: "United Kingdom",
      geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },
      category: "Rooms"
    },
    {
      title: "Historic Brownstone in Boston",
      description:
        "Step back in time in this elegant historic brownstone located in the heart of Boston.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2200,
      location: "Boston",
      country: "United States",
      geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },

      category: "Castles"
    },
    {
      title: "Beachfront Bungalow in Bali",
      description:
        "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1800,
      location: "Bali",
      country: "Indonesia",
   
   geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },
   category: "Amazing Pools"
    },
    {
      title: "Mountain View Cabin in Banff",
      description:
        "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1500,
      location: "Banff",
      country: "Canada",
      
      geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },
category: "Mountains"
    },
    {
      title: "Art Deco Apartment in Miami",
      description:
        "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
      image: {
        filename: "listingimage",
        url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1600,
      location: "Miami",
      country: "United States",
      geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },

      category: "Trending"
    },
    {
      title: "Tropical Villa in Phuket",
      description:
        "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 3000,
      location: "Phuket",
      country: "Thailand",
    
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },
  category: "Amazing Pools"
    },
    {
      title: "Historic Castles in Scotland",
      description:
        "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 4000,
      location: "Scottish Highlands",
      country: "United Kingdom",
      geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },
      category: "Castles"
    },
    {
      title: "Desert Oasis in Dubai",
      description:
        "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 5000,
      location: "Dubai",
      country: "United Arab Emirates",
      geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },
      category: "Amazing Pools"
    },
    {
      title: "Rustic Log Cabin in Montana",
      description:
        "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1100,
      location: "Montana",
      country: "United States",
      geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },

      category: "Trending"
    },
    {
      title: "Beachfront Villa in Greece",
      description:
        "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2500,
      location: "Mykonos",
      country: "Greece",
      
      geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },
category: "Boats"
    },
    {
      title: "Eco-Friendly Treehouse Retreat",
      description:
        "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 750,
      location: "Costa Rica",
      country: "Costa Rica",
  
  geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },
    category: "Camping"
    },
    {
      title: "Historic Cottage in Charleston",
      description:
        "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1600,
      location: "Charleston",
      country: "United States",
      geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },

      category: "Farms"
    },
    {
      title: "Modern Apartment in Tokyo",
      description:
        "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2000,
      location: "Tokyo",
      country: "Japan",
      
      geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },
category: "Iconic Cities"
    },
    {
      title: "Lakefront Cabin in New Hampshire",
      description:
        "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "New Hampshire",
      country: "United States",
      geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },

      category: "Mountains"
    },
    {
      title: "Luxury Villa in the Maldives",
      description:
        "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 6000,
      location: "Maldives",
      country: "Maldives",
    
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },
  category: "Rooms"
    },
    {
      title: "Ski Chalet in Aspen",
      description:
        "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 4000,
      location: "Aspen",
      country: "United States",
      geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },

      category: "Trending"
    },
    {
      title: "Secluded Beach House in Costa Rica",
      description:
        "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1800,
      location: "Costa Rica",
      country: "Costa Rica",
  
  geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259] // <-- [longitude, latitude]
    },
    category: "Rooms"
    },
  ];
  
  module.exports = { data: sampleListings };
//   <% layout("/layouts/boilerplate") %>
// <script>
//     const mapToken = "<%= process.env.MAP_TOKEN %>";
//     const listing = <%- JSON.stringify(listing) %>;
// </script>


// <div class="row">
//     <div class="col-8 offset-3">
//         <h3><%= listing.title %></h3>
// </div>
    
//     <div class="card col-6 offset-3 show-card listing-card ">
//         <img src="<%= listing.image.url%>" class="card-img-top show-img" alt="listing_image">
//       <div class="card-body">
//         <p class="card-text">Owned by <i><%= listing.owner.username %></i></p>
//             <p class="card-text"><%= listing.description %> </p>
//            <p class="card-text"> &#8377; <%= listing.price.toLocaleString("en-IN") %></p>
//             <p  class="card-text"> <%= listing.location %></p>
//             <p  class="card-text"> <%= listing.country  %> </p>
//       </div>
//     </div>
//     <br>
//     <% if(currUser && listing.owner._id.equals(currUser._id)) { %>
//     <div class="btns ">
//         <a href="/listings/<%= listing._id %>/edit" class="btn btn-dark col-1 offset-3 edit-btn">Edit</a>
//         <form method="POST" action="/listings/<%= listing._id %>?_method=DELETE" ">
//             <button class="btn btn-dark offset-5">Delete</button>
//         </form>
//     </div>
//     <% } %>

//     <div class="col-8 offset-3 mb-3">
//         <% if(currUser) { %>
//             <hr> 
//         <h4>Leave a Review</h4>
//         <form action="/listings/<%=listing.id %>/reviews" method="POST" novalidate class="needs-validation">
//             <!-- <div class="mb-3 mt-3">
//                 <label for="rating" class="form-label">Rating</label>
//                 <input type="range" min="1" max="5" id="rating" name="review[rating]" class="form-range">
//             </div> -->
//              <div class="mb-3 mt-3">
//                  <label for="rating" class="form-label">Rating</label>
//                  <fieldset class="starability-slot">
//   <input type="radio" id="no-rate" class="input-no-rate" name="review[rating]" value="1" checked aria-label="No rating." />
//   <input type="radio" id="first-rate1" name="review[rating]" value="1" />
//   <label for="first-rate1" title="Terrible">1 star</label>
//   <input type="radio" id="first-rate2" name="review[rating]" value="2" />
//   <label for="first-rate2" title="Not good">2 stars</label>
//   <input type="radio" id="first-rate3" name="review[rating]" value="3" />
//   <label for="first-rate3" title="Average">3 stars</label>
//   <input type="radio" id="first-rate4" name="review[rating]" value="4" />
//   <label for="first-rate4" title="Very good">4 stars</label>
//   <input type="radio" id="first-rate5" name="review[rating]" value="5" />
//   <label for="first-rate5" title="Amazing">5 stars</label>
// </fieldset>
// </div>
//             <div class="mb-3 mt-3">
//                 <label for="comment" class="form-label">Comments</label>
//                 <textarea name="review[comment]" id="comment" cols="38" rows="5" class="form-control" required></textarea>
//                 <div class="invalid-feedback">Please add some comments for review </div>
//             </div>
//             <button class="btn btn-outline-dark" >Submit</button>
//         </form>
//         <% } %>
//         <hr>
//         <% if(listing.reviews.length > 0) { %>
//         <div class="row">
//             <p><b>All Reviews</b></p>
//         <% for(review of listing.reviews){ %>
//                <div class="card col-5 ms-3 mb-3">
//                 <div class="card-body">
//                     <h5 class="card-title">@<%= review.author.username %></h5>
//                     <p class="card-text"><%= review.comment %></p>
//                     <p class="card-text"><%= review.rating %> stars  </p>
//                     <p class="starability-result card-text" data-rating=<%= review.rating %> stars></p>
//                     <form class="mb-3" method="POST" action="/listings/<%= listing._id %>/reviews/<%= review._id %>?_method=DELETE">
//                      <button class="btn btn-sm btn-dark">Delete</button>
//                     </form>
//                 </div>
//                </div>
//                 <% } %>
//     </div>
//     <% } %>
//     </div>
//     <div class="col-6 offset-3 mb-3">
//         <h3>Where you'll be</h3>
//         <div id="map"></div>
//     </div>
// </div>
// <script src="/js/map.js"></script>