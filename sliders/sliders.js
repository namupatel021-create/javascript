let images = [
    "https://img.freepik.com/free-photo/vividly-colored-hummingbird-nature_23-2151495312.jpg?semt=ais_hybrid&w=740&q=80",
    "https://plus.unsplash.com/premium_photo-1669802766544-40eba66c4fa0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8anBnJTIwaW1hZ2VzfGVufDB8fDB8fHww",
    "https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/024/692/112/large/ai-generated-ai-generative-beautiful-rhododendron-flowers-over-sunset-mountains-field-landscape-graphic-art-photo.jpg",
    "https://images.pexels.com/photos/29996343/pexels-photo-29996343.jpeg?cs=srgb&dl=pexels-gerardo-pantoja-826939143-29996343.jpg&fm=jpg",
    "https://img.freepik.com/free-photo/wet-sphere-reflective-water-abstract-beauty-generated-by-ai_188544-19616.jpg?semt=ais_hybrid&w=740&q=80",
];

let index = 0;

let slider = document.getElementById("sliderImg");

slider.src = images[index];

function next() {
    index++;

    if (index >= images.length) {
        index = 0;
    }

    slider.src = images[index];
}

function previous() {
    index--;

    if (index < 0) {
        index = images.length - 1;
    }

    slider.src = images[index];
}
