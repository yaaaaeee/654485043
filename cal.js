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

function convertToBase(value, unit) {
    return value * (conversionRates[unit] || 1);
}

function convertFromBase(value, targetUnit) {
    return value / (conversionRates[targetUnit] || 1);
}

function calculate() {
    let value1 = parseFloat(document.getElementById("value1").value);
    let unit1 = document.getElementById("unit1").value;
    let value2 = parseFloat(document.getElementById("value2").value);
    let unit2 = document.getElementById("unit2").value;
    let operator = document.getElementById("operator").value;
    let resultUnit = document.getElementById("resultUnit").value;

    if (isNaN(value1) || isNaN(value2)) {
        alert("กรุณากรอกค่าที่ถูกต้อง");
        return;
    }

    let baseValue1 = convertToBase(value1, unit1);
    let baseValue2 = convertToBase(value2, unit2);
    let result;

    switch (operator) {
        case "+":
            result = baseValue1 + baseValue2;
            break;
        case "-":
            result = baseValue1 - baseValue2;
            break;
        case "*":
            result = baseValue1 * baseValue2;
            break;
        case "/":
            result = baseValue2 !== 0 ? baseValue1 / baseValue2 : "ไม่สามารถหารด้วย 0";
            break;
        default:
            alert("ตัวดำเนินการไม่ถูกต้อง");
            return;
    }

    let finalResult = convertFromBase(result, resultUnit);
    document.getElementById("result").innerText = `ผลลัพธ์: ${finalResult.toFixed(4)} ${resultUnit}`;
}
