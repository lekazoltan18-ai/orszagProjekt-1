let eu = "";

for (const item of euroTomb) {
    eu += `
        <div class="col-12 col-md-8 col-lg-6 mx-auto mb-4">
            <div class="kartya euro-kartya h-100">
                <p class="text-center cimecske">${item.nev}</p>

                <p class="text-center">
                    <img class="img-fluid euro-kep" src="kepek/${item.kep}" alt="${item.nev}">
                </p>

                <p class="leirasSzoveg">${item.leiras}</p>
            </div>
        </div>
    `;
}

document.getElementById("foDiv").innerHTML = eu;