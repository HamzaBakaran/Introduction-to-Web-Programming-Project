var MembershipService = {
        init: function(){
          MembershipService.list();

        },

        list: function(){
        /*  $.get("rest/users", function(data) {
            $("#user-list").html("");
            var html = "";
            */
            $.ajax({
            url: "rest/usermembership",
            type: "GET",
            beforeSend: function(xhr){
              xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
            },
            success: function(data) {
              //$("#membership-table").html("");
              var html = "";
            for(let i = 0; i < data.length; i++){
              html += `<tr>
                                      <th>`+data[i].id+` </th>
                                      <th>`+data[i].name+` </th>
                                      <th>`+data[i].description+` </th>
                                      <th>`+data[i].start_date+`</th>
                                      <th>`+data[i].end_date+`</th>
                                    </tr>`;
            }
            let oldHtml = $("#membership-table").html();
            $("#membership-table").html(oldHtml+html);
          },
          error: function(XMLHttpRequest, textStatus, errorThrown) {
            toastr.error(XMLHttpRequest.responseJSON.message);

          }
          });
        },
        }
          
