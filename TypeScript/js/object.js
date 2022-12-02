const response = {
    count : 10,
    data: [{
        pname: "Luke",
        films: ['Empires Strikes back', 'The Force Awaken']
    }, {
        pname: "Han Holo",
        films: ['A New Hope']
    }

]
};

response.data.forEach(r =>{
    let pname = r;
    console.log(pname);
});