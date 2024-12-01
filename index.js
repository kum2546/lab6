function calculateFuelCost() {
      // รับค่าจากผู้ใช้
      const distance = parseFloat(document.getElementById('distance').value);
      const fuelConsumption = parseFloat(document.getElementById('fuelConsumption').value);
      const fuelPrice = parseFloat(document.getElementById('fuelPrice').value);

      // ตรวจสอบค่าที่ป้อนว่าถูกต้องหรือไม่
      if (isNaN(distance) || isNaN(fuelConsumption) || isNaN(fuelPrice)) {
        document.getElementById('result').innerHTML = "กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้อง";
        return;
      }

      // คำนวณค่าน้ำมัน
      const fuelNeeded = (distance / 100) * fuelConsumption; // จำนวนลิตรที่ต้องใช้
      const totalCost = fuelNeeded * fuelPrice; // ค่าน้ำมันทั้งหมด

      // แสดงผลลัพธ์
      document.getElementById('result').innerHTML =
        `ค่าน้ำมันทั้งหมด: ${totalCost.toFixed(2)} บาท`;
}