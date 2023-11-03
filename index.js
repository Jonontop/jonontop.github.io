
function find_country(){
    const input=document.getElementById("nameInput").value
    

    console.log(input)
    fetch("https://api.nationalize.io/?name="+input)
        .then(Response=>Response.json())
        .then(data=>{
            document.getElementById("name").innerHTML = data.name
            document.getElementById("country").innerHTML = data.country[0].country_id
        })
}
