const unitConversions = {
    centimeter: 0.01, // 1 cm = 0.01 m
    meter: 1, // Base unit
    kilometer: 1000, // 1 km = 1000 m
    wa: 2, // 1 วา = 2 เมตร
    square_wa: 4, // 1 ตารางวา = 4 ตร.ม.
    rai: 1600, // 1 ไร่ = 1600 ตร.ม.
    ngan: 400, // 1 งาน = 400 ตร.ม.
    foot: 0.3048, // 1 ฟุต = 0.3048 เมตร
    sok: 0.5, // 1 ศอก = 0.5 เมตร
    sen: 40, // 1 เส้น = 40 เมตร
    hectare: 10000, // 1 เฮกเตอร์ = 10,000 ตร.ม.
    acre: 4046.86, // 1 เอเคอร์ = 4046.86 ตร.ม.
    mile: 1609.34 // 1 ไมล์ = 1609.34 เมตร
};

function convertToBase(value, unit) {
    return value * (unitConversions[unit] || 1);
}

function convertFromBase(value, targetUnit) {
    return value / (unitConversions[targetUnit] || 1);
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