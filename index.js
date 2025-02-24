const conversionRates = {
    cm: 1,
    m: 100,
    km: 100000,
    rai: 1600000,
    ngan: 400000,
    sqwa: 400,
    ft: 30.48,
    hectare: 1000000,
    acre: 404685.64,
    mile: 160934.4
};

function convert(from) {
    let value = document.getElementById(from).value;
    if (value === "" || isNaN(value)) {
        clearAll();
        return;
    }
    let baseValue = value * conversionRates[from];
    for (let unit in conversionRates) {
        if (unit !== from) {
            document.getElementById(unit).value = (baseValue / conversionRates[unit]).toFixed(6);
        }
    }
}

function clearAll() {
    document.querySelectorAll('input').forEach(input => input.value = "");
}

function formatNumber(value) {
    return parseFloat(value).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 3 });
}

