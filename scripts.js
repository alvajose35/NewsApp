const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
	try {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
		displayNews(data.articles);
	}
	catch (error) {
		console.error('There was an error!', error);
	}
}

function displayNews(articles) {
	const newsDiv = document.querySelector('#news');
	for (const article of articles) {
		//first Div
    	const firstDiv = document.createElement('div');
		firstDiv.classList.add("card", "mb-3", "text-bg-secondary");
		firstDiv.style.maxWidth = "540px";

		//secoond div
		const secondDiv = document.createElement('div');
		secondDiv.classList.add("row", "g-0");
		firstDiv.appendChild(secondDiv);

		//third div
		const thirdDiv = document.createElement('div');
		thirdDiv.classList.add("col-md-4");
		secondDiv.appendChild(thirdDiv);

		// Img
		const imgEl = document.createElement('img');
		imgEl.src = article.urlToImage;
		imgEl.classList.add("img-fluid", "rounded-start")
		imgEl.alt = "News source image";
		thirdDiv.appendChild(imgEl);

		//third div 2
		const third2Div = document.createElement('div');
		third2Div.classList.add("col-md-8");
		secondDiv.appendChild(third2Div);

		//fourth div
		const fourthDiv = document.createElement('div');
		fourthDiv.classList.add("card-body");
		third2Div.appendChild(fourthDiv);

		// Create and append a headline to the articleDiv
    	const title = document.createElement('h5');
		title.classList.add("card-title");
    	title.textContent = article.title;
    	fourthDiv.appendChild(title);

		// TODO: Use document.createElement and appendChild to create and append more elements
		const descrEL = document.createElement('p');
		descrEL.classList.add("card-text");
    	descrEL.textContent = article.description;
    	fourthDiv.appendChild(descrEL);


		newsDiv.appendChild(firstDiv);
	}
}
  
fetchNews();