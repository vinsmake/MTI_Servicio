
const button = document.querySelector("#data__button");
let printArea = document.querySelector("#printArea");
let tableArea = document.querySelector("#tableArea");



function print(){
    let number = document.querySelector("#data__number");
let abbreviation = document.querySelector("#data__abbreviation");
let profesor = document.querySelector("#data__profesor");
let link = document.querySelector("#data__link");
let category = document.querySelector("#data__category");




    number = number.value;
    abbreviation = abbreviation.value;
    profesor = profesor.value;
    link = link.value;
    category= category.value;

    printArea.value += 

`		<tr>
			<td style="padding: 5px; text-align: justify;">
                                ${number}</td>
			<td style="padding: 5px; text-align: justify;">
				<a href="${link}">${abbreviation} ${profesor}</a></td>
			<td style="padding: 5px; text-align: justify;">
                    ${category}</td>
		</tr>
`
    tableArea.innerHTML = printArea.value;
}



button.onclick = print;
