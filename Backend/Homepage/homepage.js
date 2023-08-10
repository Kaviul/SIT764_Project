// const cardList = [
//     {
//         title: "Keira Knightley",
//         image: "images/kk1.jpg",
//         link: "About Keira",
//         desciption: "Demo"
//     },
//     {
//         title: "Olivia Wilde",
//         image: "images/od.jpg",
//         link: "About Olivia",
//         desciption: "Demo"
//     }
// ]
// const clickMe = () => {
//     alert("Thanks for clicking me. Hope you have a nice day!")
// }

// const submitForm = () => {
//     let formData = {};
//     formData.first_name = $('#first_name').val();
//     formData.last_name = $('#last_name').val();
//     formData.password = $('#password').val();
//     formData.email = $('#email').val();

//     console.log("Form Data Submitted: ", formData);
// }

// const addCards = (items) => {
//     items.forEach(item => {
//         let itemToAppend = '<div class="col s4 center-align">'+
//     '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
//     '</div><div class="card-content">'+
//     '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
//     '<div class="card-reveal">'+
//         '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
//         '<p class="card-text">'+item.desciption+'</p>'+
//       '</div></div></div>';
//       $("#card-section").append(itemToAppend)
//     });
// }

function dropFunc() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// $(document).ready(function(){
//     $('.materialboxed').materialbox();
//     $('#formSubmit').click(()=>{
//         submitForm();
//     })
//     addCards(cardList);
//     $('.modal').modal();
//   });
