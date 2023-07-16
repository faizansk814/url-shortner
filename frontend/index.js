const inputval=document.getElementById("urlInput")
const submitbtn=document.getElementById("shortenBtn")
const anchor=document.getElementById("myLink")

submitbtn.addEventListener('click',()=>{
    fetch("http://localhost:4031/url/add",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({url:inputval.value})
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        const short=data.newUrl.shortid
        anchor.innerText=`http://localhost:4031/url/get/${short}`
        anchor.href=`http://localhost:4031/url/get/${short}`
        document.getElementById("copyButton").style.display="inline"
    })
    .catch((err)=>{
        console.log(err)
    })
})

document.getElementById("copyButton").addEventListener("click", function() {
    var linkText = document.getElementById("myLink").innerText;
  
    // Create a temporary textarea element
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = linkText;
    
    // Append the textarea to the body
    document.body.appendChild(tempTextArea);
    
    // Copy the text from the textarea
    tempTextArea.select();
    document.execCommand("copy");
    
    // Remove the textarea from the body
    document.body.removeChild(tempTextArea);
    
    // Alert or display a message to indicate the text has been copied
    alert("Text has been copied: " + linkText);
  });
  
