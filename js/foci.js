let f = "";

for (const item of fociTomb) {
    f += `
        <div class="col-12 col-md-6 mb-4">
            <div class="kartya h-100">
                <p class="text-center cimecske">${item.nev}</p>

                <p class="text-center">
                    <img class="img-fluid kep" src="kepek/${item.kep}" alt="${item.nev}">
                </p>

                <p class="leirasSzoveg">${item.leiras}</p>
            </div>
        </div>
    `;
}

document.getElementById("foDiv").innerHTML = f;

document.getElementById("bundesligaTabella").innerHTML = `
    <p class="leirasSzoveg">
        A Bundesliga aktuális tabelláját és élő eredményeit az Eredmények.hu oldalán tudod megnézni.
    </p>

    <p class="text-center">
        <a href="https://www.eredmenyek.com/foci/nemetorszag/bundesliga/tabella/"
           target="_blank"
           class="eredmenyekGomb">
           Bundesliga tabella megnyitása
        </a>
    </p>
`;