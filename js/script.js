
const button = document.querySelector("#data__button");
let printArea = document.querySelector("#printArea");
let tableArea = document.querySelector("#tableArea");



function print(){
let number = document.querySelector("#data__number");
//let abbreviation = document.querySelector("#data__abbreviation");
let profesor = document.querySelector("#data__profesor");
let link = document.querySelector("#data__link");
let category = document.querySelector("#data__category");


    printArea.value += 

`		<tr>
			<td style="padding: 5px; text-align: justify;">
                                ${number.value}</td>
			<td style="padding: 5px; text-align: justify;">
				<a href="${link.value}">${profesor.value}</a></td>
			<td style="padding: 5px; text-align: justify;">
                    ${category.value}</td>
		</tr>
`
    tableArea.innerHTML = printArea.value;


    number.value = "";
    abbreviation.value = "";
    profesor.value = "";
    link.value = "";
    category.value = "";

}



button.onclick = print;
