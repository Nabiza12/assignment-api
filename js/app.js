
const alldata = async() =>{
    const url = ` https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data =await res.json();
    displaytools(data.data.tools.slice(0, 6));

}

const displaytools = tools =>{
    const toolcontainer = document.getElementById('tool-container');
    toolcontainer.innerHTML = "";
    tools.forEach(tool => {
        const toolsdiv = document.createElement('div');
        toolsdiv.classList.add('col');
        toolsdiv.innerHTML = `
        <div class="card h-100">
                        <img src="${tool.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">Feature</h5>
                          <p class="card-text">1.${tool.features[0]}</p>
                          <p class="card-text">2.${tool.features[1]}</p>
                          <p class="card-text">3.${tool.features[2]}</p>
                          <hr>
                          <h5 class="card-title">${tool.name}</h5>
                          <p class="card-text"><img src="node_modules/bootstrap-icons/icons/calender-check.svg">${tool.published_in}</p>

                        </div>
        </div>
        
        
        `;
        toolcontainer.appendChild(toolsdiv);

        
    })
}

alldata();

const showalldata = async() =>{
    const url = ` https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data =await res.json();
    displaytools(data.data.tools);

}

const sortdata = async() =>{
    const url = ` https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data =await res.json();
    displaytools(data.data.tools.slice(0,6));

}

