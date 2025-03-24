//BAsic Syntax of fetch API
fetch(URL, Option)
.then(Response(Response.json()))
.then(Data=>console.log(Data))
.catch(Error=>console.log(Error))

//BAsic Get Request (Fetching Data)
fetch('https://chatgpt.com/post/1')
.then(Response => Response.json)
.then(Data => console.log(Data))
.catch(Error => console.error('error :', error));

//Exapmmle Output
{
    "UserID" = 1;
    "UserName" = DEEPU;
    "Title" = 'Deepu is the Richest man in the whole world'
    "Body" =  'Deepanshu`s have his own body Not required any Other Persons Body ~ joking HAHAHAHHA'
}


//Sending DATA Post Request
fetch('https://CodeWithharry.com/data/1/post',{
Method : 'POST',
headers:{'Content-Type':'Application/Json'},
body:JSON.stringify({
    title:"New post",
    body:"THis is the Body of Post",
    userid: 1,
})
})
.then(Response => Response.JSON)
.then(Data => Data.JSON)
.catch(Error => console.error('error:' ,error))

//updating Data PUT request
fetch('https://CodeWithHarry.com',{
    method: 'PUT',
    headers: {'Content-Type,': 'application/JSON'},
    body: JSON.stringify({
        title: 'Updated Title',
        body: 'Updated Body',
        userid: 'Updated ID',
    })
})
.then(Response => Response.JSON)
.then(Data => console.log(data))
.fetch(error => console.error('error:',error))

//Updating Specific data (Patch requiest)
fetch('https://CodeWithHarry.com',{
    method: 'PATCH',
    headers:{'Content-Type':'Application/JSON'},
    body:JSON.stringify({
        title:'New Title'
    })
})
.then(Response => Response.json)
.then(Data => console.log(Data))
.catch(error=>console.error('error',error))


//Deleting DATA request
fetch('https://CodeWithHarry.com',{
    method: 'DELETE',
})
.then(Response =>{
    if (Response.ok) {
        console.log('Data Deleted, Succesfully!')
    }else{
        console.log('Failed To Delete it')
    }
})
.catch(error => console.error('error',error))


//Error Handeling
fetch('https://CodeWithHarry.com')
.then(Response => {
    if (Response = !ok) {
        throw new Error(`https Error! status ${Response.status} `);
        return Response.JSON;
    }
})
.then(data => console.log(data))
.catch(Error => console.error('error', Error))

//Using Fetch API with Async/Await (Modern Approach)
async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
fetchData();



//Fetch API in the Real World
async function displayUsers() {
    let Response = await fetch('https://CodeWithHArry.com');
    let user = await Response.JSON();

    let userLst = document.getElementById('User-List');
    user.forEach(user => {
        let li = document.createElement("li");
        li.innerText = (`${user.name} (${user.email})`);
        userLst.appendChild(li);
    });

}
displayUsers();