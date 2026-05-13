let e = "";

for (const item of autokTomb) {
    e += `
        <div class="col-12 col-md-10 col-lg-8 mx-auto mb-4">
            <div class="kartya">
                <p class="text-center cimecske">${item.nev}</p>

                <p class="text-center">
                    <img class="img-fluid kep" src="kepek/${item.kep}" alt="${item.nev}">
                </p>

                <p class="leirasSzoveg">${item.leiras}</p>
            </div>
        </div>
    `;
}

document.getElementById("foDiv").innerHTML = e;