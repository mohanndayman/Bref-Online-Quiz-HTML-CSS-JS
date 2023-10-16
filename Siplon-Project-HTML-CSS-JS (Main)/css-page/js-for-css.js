  
  const root = document.getElementById("player");

  // Create an iframe element to display the video.
  const iframe = document.createElement("iframe");
  
  // Set the iframe's src.
  iframe.src = "https://www.youtube.com/embed/0W6qz0-aDaM?si=dMox7lymRCQ5-VsJ";
  
  // Add the iframe to the root.
  root.appendChild(iframe);
  
  // Fetch the playlist items for the given playlist ID.
  fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=24&playlistId=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit&key=AIzaSyAXzXr3QSlQpMq8UfYlrOF3Zcc2I768NBU`)
    .then(response => response.json())
    .then(data => {
      
      // Get the list of playlist items.
      const playlistItems = data.items;
  
      // Create a list element to store the playlist items.
      const list = document.createElement("ul");
  
      // Add each playlist item to the list.
      playlistItems.forEach(playlistItem => {
        const listItem = document.createElement("li");
        listItem.textContent = playlistItem.snippet.title;
      //   str=listItem.textContent.slice(listItem.textContent.indexOf('_') + 1);
        list.appendChild(listItem);
  
        // Add an event listener to the list item so that the video starts playing when the user clicks on it.
        listItem.addEventListener("click", () => {
          // Get the video ID for the playlist item.
          const videoId = playlistItem.snippet.resourceId.videoId;
  
          // Load the video into the iframe.
          iframe.src = `https://www.youtube.com/embed/${videoId}`;
          
        });
      });
  
      // Add the list to the root.
      root.appendChild(list);
    });
    
  
          // C:\Users\Orange\Desktop\Siplon-Project-HTML-CSS-JS (Main)\html-quiezzes\login.html
          let startQuizAtag = document.getElementById('startQuizAtag');
      let welcome = document.getElementById('welcome') 
       let username = localStorage.getItem('username')
          
          let islogged = localStorage.getItem('isloggedin')
          if(islogged == 'true'){
            welcome.textContent=`welcome ${username}`
            startQuizAtag.addEventListener('click',(e)=>{
              window.location.href='/css-quizzes/html-for-css-quiz.html'
            })
         
          }else{
        
              window.location.href='/html-quiezzes/login.html';
          }
        
        
          