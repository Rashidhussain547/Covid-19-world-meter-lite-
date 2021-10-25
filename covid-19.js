var information = new Array(31);
information[0] = new Array("United States",46312782,756362,3652614,679958537,333548370);
information[1] = new Array("India",454743,454743,33567367,600769717,1397790892);
information[2] = new Array("Brazil",21729763,605682,20907224,63776166,214540859);
information[3] = new Array("Autralia",46312782,756362,3652614,679958537,333548370);
information[4] = new Array("Canada",454743,454743,33567367,600769717,1397790892);
information[5] = new Array("Indonesia",21729763,605682,20907224,63776166,214540859);
information[6] = new Array("Albania",454743,454743,33567367,600769717,1397790892);
information[7] = new Array("England",21729763,605682,20907224,63776166,214540859);
information[8] = new Array("South Africa",46312782,756362,3652614,679958537,333548370);
information[9] = new Array("Ireland",454743,454743,33567367,600769717,1397790892);
information[10] = new Array("Scotland",21729763,605682,20907224,63776166,214540859);
information[11] = new Array("West indies",46312782,756362,3652614,679958537,333548370);
information[12] = new Array("Pakistan",454743,454743,33567367,600769717,1397790892);
information[13] = new Array("Srilanka",21729763,605682,20907224,63776166,214540859);
information[14] = new Array("Bangladesh",454743,454743,33567367,600769717,1397790892);
information[15] = new Array("New zealand",21729763,605682,20907224,63776166,214540859);
information[16] = new Array("Spain",46312782,756362,3652614,679958537,333548370);
information[17] = new Array("Turkey",454743,454743,33567367,600769717,1397790892);
information[18] = new Array("Russia",21729763,605682,20907224,63776166,214540859);
information[19] = new Array("France",46312782,756362,3652614,679958537,333548370);
information[20] = new Array("Afghanistan",454743,454743,33567367,600769717,1397790892);
information[21] = new Array("Iran",21729763,605682,20907224,63776166,214540859);
information[22] = new Array("Italy",454743,454743,33567367,600769717,1397790892);
information[23] = new Array("Iraq",21729763,605682,20907224,63776166,214540859);
information[24] = new Array("Switzerland",46312782,756362,3652614,679958537,333548370);
information[25] = new Array("Netherland",454743,454743,33567367,600769717,1397790892);
information[26] = new Array("Taiwan",21729763,605682,20907224,63776166,214540859);
information[27] = new Array("Qatar",46312782,756362,3652614,679958537,333548370);
information[28] = new Array("Oman",454743,454743,33567367,600769717,1397790892);
information[29] = new Array("Dubai",21729763,605682,20907224,63776166,214540859);
information[30] = new Array("Saudi arab",454743,454743,33567367,600769717,1397790892);
information[31] = new Array("Germany",21729763,605682,20907224,63776166,214540859);
document.write("<table border=1> <tr><th>Country</th><th>Total death</th><th>Total Cases</th><th>Total recovered</th><th>Total test</th><th>Population</th></tr>")
for(i=0; i<information.length; i++){
    document.write("<tr>")
    for(j=0; j<information[i].length; j++){
        document.write("<td>"+information[i][j]+"</td>")
    }
    document.write("</tr>")
}

document.write("</table>")