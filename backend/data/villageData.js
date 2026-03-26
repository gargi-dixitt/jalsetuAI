const villages = [
  {
    id: 'V001', name: 'Rampur Baghelkhand', district: 'Sagar', division: 'Sagar', block: 'Rehli', state: 'Madhya Pradesh',
    population: 1240, waterStockLiters: 3000, dailyUsageLiters: 1500, lastTankerDate: '2025-03-10',
    coordinates: { lat: 23.8388, lng: 78.7378 },
    tankerHistory: [ { date: '2025-03-10', liters: 10000 }, { date: '2025-02-22', liters: 8000 } ]
  },
  {
    id: 'V002', name: 'Khurai Khurd', district: 'Sagar', division: 'Sagar', block: 'Khurai', state: 'Madhya Pradesh',
    population: 870, waterStockLiters: 24000, dailyUsageLiters: 900, lastTankerDate: '2025-03-18',
    coordinates: { lat: 24.0431, lng: 78.3398 },
    tankerHistory: [ { date: '2025-03-18', liters: 12000 } ]
  },
  {
    id: 'V003', name: 'Khajuri Kalan', district: 'Damoh', division: 'Sagar', block: 'Hatta', state: 'Madhya Pradesh',
    population: 560, waterStockLiters: 1680, dailyUsageLiters: 560, lastTankerDate: '2025-02-28',
    coordinates: { lat: 23.8327, lng: 79.4418 },
    tankerHistory: [ { date: '2025-02-28', liters: 6000 }, { date: '2025-02-05', liters: 5000 } ]
  },
  {
    id: 'V004', name: 'Patera Gaon', district: 'Damoh', division: 'Sagar', block: 'Patera', state: 'Madhya Pradesh',
    population: 2100, waterStockLiters: 42000, dailyUsageLiters: 2100, lastTankerDate: '2025-03-20',
    coordinates: { lat: 23.9001, lng: 79.6872 },
    tankerHistory: [ { date: '2025-03-20', liters: 20000 } ]
  },
  {
    id: 'V005', name: 'Belkheda', district: 'Panna', division: 'Sagar', block: 'Shahnagar', state: 'Madhya Pradesh',
    population: 430, waterStockLiters: 2150, dailyUsageLiters: 430, lastTankerDate: '2025-03-05',
    coordinates: { lat: 24.7172, lng: 80.1853 },
    tankerHistory: [ { date: '2025-03-05', liters: 5000 } ]
  },
  {
    id: 'V006', name: 'Amanganj Tola', district: 'Panna', division: 'Sagar', block: 'Amanganj', state: 'Madhya Pradesh',
    population: 780, waterStockLiters: 17000, dailyUsageLiters: 800, lastTankerDate: '2025-03-15',
    coordinates: { lat: 24.6312, lng: 80.0552 },
    tankerHistory: [ { date: '2025-03-15', liters: 10000 } ]
  },
  {
    id: 'V007', name: 'Nowgong Dhana', district: 'Chhatarpur', division: 'Sagar', block: 'Nowgong', state: 'Madhya Pradesh',
    population: 3200, waterStockLiters: 6400, dailyUsageLiters: 3200, lastTankerDate: '2025-03-01',
    coordinates: { lat: 25.0571, lng: 79.4520 },
    tankerHistory: [ { date: '2025-03-01', liters: 15000 }, { date: '2025-02-10', liters: 12000 } ]
  },
  {
    id: 'V008', name: 'Buxwaha Kalan', district: 'Chhatarpur', division: 'Sagar', block: 'Buxwaha', state: 'Madhya Pradesh',
    population: 960, waterStockLiters: 9600, dailyUsageLiters: 960, lastTankerDate: '2025-03-12',
    coordinates: { lat: 24.6082, lng: 79.6011 },
    tankerHistory: [ { date: '2025-03-12', liters: 9000 } ]
  },
  {
    id: 'V009', name: 'Prithvipur Khurd', district: 'Tikamgarh', division: 'Sagar', block: 'Prithvipur', state: 'Madhya Pradesh',
    population: 620, waterStockLiters: 1240, dailyUsageLiters: 620, lastTankerDate: '2025-02-20',
    coordinates: { lat: 24.9752, lng: 78.5502 },
    tankerHistory: [ { date: '2025-02-20', liters: 6000 } ]
  },
  {
    id: 'V010', name: 'Baldeogarh Tola', district: 'Tikamgarh', division: 'Sagar', block: 'Baldeogarh', state: 'Madhya Pradesh',
    population: 1100, waterStockLiters: 22000, dailyUsageLiters: 1100, lastTankerDate: '2025-03-19',
    coordinates: { lat: 24.7652, lng: 78.7523 },
    tankerHistory: [ { date: '2025-03-19', liters: 14000 } ]
  },
  {
    id: 'V011', name: 'Gyaraspur Gaon', district: 'Vidisha', division: 'Bhopal', block: 'Gyaraspur', state: 'Madhya Pradesh',
    population: 1850, waterStockLiters: 5550, dailyUsageLiters: 1850, lastTankerDate: '2025-03-08',
    coordinates: { lat: 23.9901, lng: 77.9215 },
    tankerHistory: [ { date: '2025-03-08', liters: 12000 }, { date: '2025-02-18', liters: 10000 } ]
  },
  {
    id: 'V012', name: 'Kurwai Khurd', district: 'Vidisha', division: 'Bhopal', block: 'Kurwai', state: 'Madhya Pradesh',
    population: 730, waterStockLiters: 18000, dailyUsageLiters: 730, lastTankerDate: '2025-03-17',
    coordinates: { lat: 23.8112, lng: 77.9841 },
    tankerHistory: [ { date: '2025-03-17', liters: 10000 } ]
  },
  {
    id: 'V013', name: 'Obaidullahganj Tola', district: 'Raisen', division: 'Bhopal', block: 'Obaidullahganj', state: 'Madhya Pradesh',
    population: 490, waterStockLiters: 980, dailyUsageLiters: 490, lastTankerDate: '2025-02-15',
    coordinates: { lat: 23.0572, lng: 77.6832 },
    tankerHistory: [ { date: '2025-02-15', liters: 5000 } ]
  },
  {
    id: 'V014', name: 'Silwani Kalan', district: 'Raisen', division: 'Bhopal', block: 'Silwani', state: 'Madhya Pradesh',
    population: 1560, waterStockLiters: 31200, dailyUsageLiters: 1560, lastTankerDate: '2025-03-21',
    coordinates: { lat: 23.2981, lng: 78.1432 },
    tankerHistory: [ { date: '2025-03-21', liters: 18000 } ]
  },
  {
    id: 'V015', name: 'Gotegaon Tola', district: 'Narsinghpur', division: 'Jabalpur', block: 'Gotegaon', state: 'Madhya Pradesh',
    population: 2300, waterStockLiters: 6900, dailyUsageLiters: 2300, lastTankerDate: '2025-03-04',
    coordinates: { lat: 22.8981, lng: 79.4923 },
    tankerHistory: [ { date: '2025-03-04', liters: 16000 }, { date: '2025-02-12', liters: 13000 } ]
  },
  {
    id: 'V016', name: 'Saikheda Gaon', district: 'Narsinghpur', division: 'Jabalpur', block: 'Saikheda', state: 'Madhya Pradesh',
    population: 670, waterStockLiters: 16750, dailyUsageLiters: 670, lastTankerDate: '2025-03-16',
    coordinates: { lat: 22.7012, lng: 79.2341 },
    tankerHistory: [ { date: '2025-03-16', liters: 9000 } ]
  },
  {
    id: 'V017', name: 'Kareli Khurd', district: 'Narsinghpur', division: 'Jabalpur', block: 'Kareli', state: 'Madhya Pradesh',
    population: 3800, waterStockLiters: 7600, dailyUsageLiters: 3800, lastTankerDate: '2025-02-25',
    coordinates: { lat: 22.9121, lng: 79.0891 },
    tankerHistory: [ { date: '2025-02-25', liters: 20000 }, { date: '2025-01-30', liters: 18000 } ]
  },
  {
    id: 'V018', name: 'Tendukheda Tola', district: 'Narsinghpur', division: 'Jabalpur', block: 'Tendukheda', state: 'Madhya Pradesh',
    population: 980, waterStockLiters: 23000, dailyUsageLiters: 980, lastTankerDate: '2025-03-22',
    coordinates: { lat: 23.1042, lng: 79.5611 },
    tankerHistory: [ { date: '2025-03-22', liters: 12000 } ]
  },
  {
    id: 'V019', name: 'Deori Khurd', district: 'Sagar', division: 'Sagar', block: 'Deori', state: 'Madhya Pradesh',
    population: 520, waterStockLiters: 1040, dailyUsageLiters: 520, lastTankerDate: '2025-02-18',
    coordinates: { lat: 23.3852, lng: 78.9211 },
    tankerHistory: [ { date: '2025-02-18', liters: 5500 } ]
  },
  {
    id: 'V020', name: 'Jabera Tola', district: 'Damoh', division: 'Sagar', block: 'Jabera', state: 'Madhya Pradesh',
    population: 1450, waterStockLiters: 4350, dailyUsageLiters: 1450, lastTankerDate: '2025-03-07',
    coordinates: { lat: 23.6781, lng: 79.6012 },
    tankerHistory: [ { date: '2025-03-07', liters: 11000 } ]
  },
  {
    id: 'V021', name: 'Basoda Gaon', district: 'Vidisha', division: 'Bhopal', block: 'Basoda', state: 'Madhya Pradesh',
    population: 2900, waterStockLiters: 58000, dailyUsageLiters: 2900, lastTankerDate: '2025-03-23',
    coordinates: { lat: 23.8561, lng: 77.9432 },
    tankerHistory: [ { date: '2025-03-23', liters: 25000 } ]
  },
  {
    id: 'V022', name: 'Udaipura Khurd', district: 'Raisen', division: 'Bhopal', block: 'Udaipura', state: 'Madhya Pradesh',
    population: 810, waterStockLiters: 2430, dailyUsageLiters: 810, lastTankerDate: '2025-03-02',
    coordinates: { lat: 23.0941, lng: 78.0231 },
    tankerHistory: [ { date: '2025-03-02', liters: 8000 } ]
  }
];

module.exports = { villages };
