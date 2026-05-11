let sz = "";

let s = "";

for (const item of termeszetTomb) {
    let link = "#";

    if (item.nev == "Stadionok") {
        link = "nevezetessegek.html";
    } else if (item.nev == "Autóipar") {
        link = "autoipar.html";
    } else if (item.nev == "Német cégek Magyarországon") {
        link = "#";
    } else if (item.nev == "Német football") {
        link = "#";
    }

    sz += `
        <div class="col-12 col-md-6 col-lg-6 mb-4">
            <div class="kartya h-100">
                <p class="text-center cimecske">${item.nev}</p>
                <p class="text-center">
                    <img class="img-fluid kep" src="kepek/${item.kep}" alt="${item.nev}">
                </p>
                <p class="leirasSzoveg">${item.leiras}</p>

                <div class="gombDoboz">
                    <a href="${link}" class="ugrasGomb">Ugrás</a>
                </div>
            </div>
        </div>
    `;
}

document.getElementById("foDiv").innerHTML = sz;