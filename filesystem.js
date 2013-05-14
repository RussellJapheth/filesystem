window.addEventListener("DOMContentLoaded", function() {
   var inputElement = document.getElementById("inputField");
   var message = document.getElementById("messages"); 
   var content = document.getElementById("contents");

   inputElement.addEventListener("change", handleFiles, false);
   function handleFiles() {
      userFile = this.files[0];
      message.innerHTML = "name: " + userFile.name + ", size: " + userFile.size + ", last modified: " + userFile.lastModifiedDate;

      read = new FileReader();
      read.readAsBinaryString(userFile);

      read.onloadend=function()
      {
         contents.innerHTML = "<textarea id='fileUploaded'>" + read.result + "</textarea>";
         edit = document.getElementById("fileUploaded");
         console.log("edit");
         console.log(edit);
         edit.addEventListener("keyup",saveContent,false);
      }

   }

   function saveContent()
   {
      append = document.getElementById("fileUploaded").value;
      blob = new Blob([append],{ type: "text/plain"})

      message.innerHTML = "name: " + blob.name + ", size: " + blob.size + ", last modified: " + blob.lastModifiedDate;

      readSave = new FileReader();
      readSave.readAsBinaryString(blob)
      readSave.onloadend = function()
      {
         url = window.webkitURL.createObjectURL(blob);
         document.getElementById("newFile").innerHTML = '<a href="'+url+'" download>download file</a>';
      }

   }

}, false);
