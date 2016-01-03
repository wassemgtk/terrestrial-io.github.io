/**
 * Orignial source from: https://raw.githubusercontent.com/w3ctag/extensible-web-report-card/gh-pages/assets/toc.js
 *
 * GitHub repo: https://github.com/w3ctag/extensible-web-report-card
 */

"use strict";

var sidebar = document.querySelector("#nav");

var idCounter = 0;

var h1Index = 0;

function generateSideBar (navlist,section) {



Array.prototype.forEach.call(section.querySelectorAll("section"), function(section) {

    var headers = section.querySelectorAll("h2");

    Array.prototype.forEach.call(headers, function(grade) {


    if (grade) {
        console.log(grade.textContent);
        grade.id = grade.textContent.replace(/\s+/g, '-').toLowerCase();
        var li = document.createElement("li");
        li.innerHTML = "<a href='#" + grade.id + "'>" + grade.textContent + '</a>';
        navlist.appendChild(li);

        var gradeOl = document.createElement("ul");
        li.appendChild(gradeOl);
        gradeOl.className = "nav";

    }

    var features = section.querySelectorAll("h3");
    Array.prototype.forEach.call(features, function(feature) {
        feature.id = grade.textContent.replace(/\s+/g, '-').toLowerCase() + "-" + feature.textContent.replace(/\s+/g, '-').toLowerCase();

        var featureLI = document.createElement("li");
        featureLI.innerHTML = "<a href='#" + feature.id + "'>" + feature.textContent + '</a>';
        gradeOl.appendChild(featureLI);
    });


});



});


}

Array.prototype.forEach.call(document.querySelectorAll("section section"), function(section) {

	
    var sectionTitle = section.querySelector("h1");
    if (sectionTitle) {
        //console.log(sectionTitle.textContent);
        var h1 = document.createElement("h1");
        h1.innerHTML = "<h1>" + sectionTitle.textContent.toUpperCase() + "</h1>"
        sidebar.appendChild(h1);

        var ol = document.createElement("ul");
	    sidebar.appendChild(ol);
	    ol.className = "nav";

	    generateSideBar(ol,section);


    }

});

