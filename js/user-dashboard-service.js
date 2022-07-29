
var UserDashboardService = {
        init: function(){
          UserDashboardService.last();


        },

        last: function(){
              $.ajax({
              url: '../rest/last_active/'+ parse_jwt(localStorage.getItem('token')).id,
              type: "GET",
              beforeSend: function(xhr){
                xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
              },
              success: function(data) {
                //$("#membership-table").html("");
                var html = "";
              for(let i = 0; i < data.length; i++){
              
                html += `<div class="text-info text-center mt-2" id="end"><p>`+data[i].user_id+`</p></div>


                                      `;


              }
              let oldHtml = $("#end").html();
              $("#end").html(oldHtml+html);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
              toastr.error(XMLHttpRequest.responseJSON.message);

            }
            });
          },


}
