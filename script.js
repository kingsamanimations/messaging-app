//NOMES PARA ALIMENTAR
const nomes = [
  "Harry",
  "Ross",
  "Bruce",
  "Cook",
  "Carolyn",
  "Morgan",
  "Albert",
  "Walker",
  "Randy",
  "Reed",
  "Larry",
  "Barnes",
  "Lois",
  "Wilson",
  "Jesse",
  "Campbell",
  "Ernest",
  "Rogers",
  "Theresa",
  "Patterson",
  "Henry",
  "Simmons",
  "Michelle",
  "Perry",
  "Frank",
  "Butler",
  "Shirley",
  "Brooks",
  "Rachel",
  "Edwards",
  "Christopher",
  "Perez",
  "Thomas",
  "Baker",
  "Sara",
  "Moore",
  "Chris",
  "Bailey",
  "Roger",
  "Johnson",
  "Marilyn",
  "Thompson",
  "Anthony",
  "Evans",
  "Julie",
  "Hall",
  "Paula",
  "Phillips",
  "Annie",
  "Hernandez",
  "Dorothy",
  "Murphy",
  "Alice",
  "Howard"
];

//ALIMENTAR O CHAT
for (i = 0; i < 12; i++) {
  nomes.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  $("#lista-conversas").append(`
    <li class="list-group-item p-3">
                <div class="row">
              <div class="col-3">
                <img src="https://picsum.photos/10${i}" class="img-fluid rounded-circle border mt-1">
               </div>
                <div class="col-7">
                  <p class="fw-bolder p-0 m-0">${nomes[i]}</p>
                  <p class="text-muted text-truncate">Texto escrito pelo usuário para dizer o que ele falou uhul</p>
               </div>
                <div class="col-2 p-1">
                  <small>13:07</small>
               </div>
                   </div>
              
              </li>
  `);

  /* $(".chat-area").append(`
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam atque inventore accusantium mollitia unde laudantium harum. Ipsa asperiores ex incidunt tempora. Omnis rem esse nostrum. Nihil nostrum obcaecati praesentium! Odit!</p>
  `);*/
}

// Filter conversations
$("#search").on("keyup", function () {
  var value = $(this).val().toLowerCase();
  $("#lista-conversas li").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  });
});

// Filter documents
$("#search-doc").on("keyup", function () {
  var value = $(this).val().toLowerCase();
  $("#lista-docs li").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
  });
});

function _(element){
    return documents.getElementbyId(element);
}

var label = _("label_chat");
label.addEventListener("click", function() {
    var inner_panel = _("inner_left_panel");

    var ajax = new XMLHttpRequest();
    ajax.onload = function() {
        if(ajax.status == 200 || ajax.readyState == 4){
            inner_panel.innerHTML = ajax.responseText;
        }
    }
    ajax.open("POST", "file.php", true);
    ajax.send();
})