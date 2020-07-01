/**
 * @name handleFail
 * @param err - error thrown by any function
 * @description Helper function to handle errors
 */
let handleFail = function(err){
    console.log("Error : ", err);
};

// Queries the container in which the remote feeds belong
let remoteContainer= document.getElementById("remote-container");
/**
 * @name addVideoStream
 * @param elementId
 * @description Helper function to add the video stream to "remote-container"
 */
function addVideoStream(elementId){
    let streamDiv=document.createElement("div"); // Create a new div for every stream
    streamDiv.id=elementId;                       // Assigning id to div
    streamDiv.style.transform="rotateY(180deg)"; // Takes care of lateral inversion (mirror image)
    remoteContainer.appendChild(streamDiv);      // Add new div to container
}
/**
 * @name removeVideoStream
 * @param evt - Remove event
 * @description Helper function to remove the video stream from "remote-container"
 */
function removeVideoStream (elementId) {
    let remDiv = document.getElementById(elementId);
    if(remDiv) remDiv.parentNode.removeChild(remDiv);
}