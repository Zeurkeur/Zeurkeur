<!DOCTYPE>
<html>
  <head>
    <meta charset="UTF-8">
      <script>
        document.addEventListner('DOMComentLoaded', function(){
          document.querySelector('#form').onsubmit=function(){
            alert.(document.querySelector("#message").value);

        }
        document.querySelector("#abutton").onclick=function(){
          let message=document.querySelector("#message").value
          alert(`${message}`)


        }

        </script>
        </head>
        <body>
          <form id="form">
            <input id="message" type="text"/>
            <button id="abutton"></button>
            <input type="submit">
            </form>
            </body
            </html>
