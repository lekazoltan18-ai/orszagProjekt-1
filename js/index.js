let sz = "";

for (const item of termeszetTomb) {
    sz += `
        <div class="col-12 col-md-6 col-lg-6">
            <div class="kartya">
                <p class="text-center cimecske">${item.nev}</p>
                <p>
                    <img class="img-fluid kep" src="kepek/${item.kep}" alt="">
                </p>
                <p class="leirasSzoveg">${item.leiras}</p>

                ${
                    item.nev == "Stadionok"
                    ? `<p class="text-center">
                            <a href="nevezetessegek.html" class="ugrasGomb">Ugrás</a>
                       </p>`
                    : ""
                }
            </div>
        </div>
    `;
}

document.getElementById("foDiv").innerHTML = sz;