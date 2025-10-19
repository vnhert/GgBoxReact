


import monitorGear from '../img/monitor/1.png';
import samsungOdyssey from '../img/monitor/2.png';
import xiaomiG from '../img/monitor/3.png';
import asusRogStrix from '../img/monitor/4.png';
import mouseLogitech from '../img/mouse/1.png';
import mouseGear from '../img/mouse/2.jpg';
import mouseMlogix from '../img/mouse/3.jpg';
import mouseProFit from '../img/mouse/4.jpg';
import corsairK100 from '../img/teclado/1.png';
import razerBlackwidow from '../img/teclado/2.png';
import asusRogAzothWhite from '../img/teclado/3.png';
import asusRogAzoth from '../img/teclado/4.png';
import msiRtx5080Vanguard from '../img/grafica/1.png';
import msiRtx5080Suprim from '../img/grafica/2.png';
import asusRogAstral from '../img/grafica/3.png';
import palitRtx5090 from '../img/grafica/4.png';

const products = [
  { "id": 1, "nombre": "Monitor Gear", "descripcion": "Monitor 22\" Full HD, Panel IPS, 100Hz", "stock": 20, "precio": 69990, "img": monitorGear, "categoria": "monitor" },
  { "id": 2, "nombre": "Samsung Odyssey", "descripcion": "OLED G6 27 pulgadas 160hz", "stock": 30, "precio": 649990, "img": samsungOdyssey, "categoria": "monitor" },
  { "id": 3, "nombre": "Xiaomi G", "descripcion": "Pro 27 pulgadas 180 hz", "stock": 40, "precio": 299990, "img": xiaomiG, "categoria": "monitor" },
  { "id": 4, "nombre": "ASUS ROG Strix XG27WCMS", "descripcion": "1ms, 240 hz, 27 pulgadas", "stock": 59, "precio": 890000, "img": asusRogStrix, "categoria": "monitor" },
  { "id": 5, "nombre": "mouse Logitech", "descripcion": "dpi 8000, laser", "stock": 18, "precio": 49990, "img": mouseLogitech, "categoria": "mouse" },
  { "id": 6, "nombre": "mouse gear", "descripcion": "7 botones programables, sensor óptico de 800 a 4000 DPI", "stock": 10, "precio": 12990, "img": mouseGear, "categoria": "mouse" },
  { "id": 7, "nombre": "mouse Mlogix", "descripcion": "alambrico, 800 dpi", "stock": 7, "precio": 5690, "img": mouseMlogix, "categoria": "mouse" },
  { "id": 8, "nombre": "Mouse Pro Fit", "descripcion": "Inalámbrico, Conexión USB, 2.4GHz", "stock": 6, "precio": 13990, "img": mouseProFit, "categoria": "mouse" },
  { "id": 9, "nombre": "Corsair K100 RGB", "descripcion": "Teclado Mecánico Corsair K100 RGB", "stock": 29, "precio": 349000, "img": corsairK100, "categoria": "teclado" },
  { "id": 10, "nombre": "Razer BlackWidow V3", "descripcion": "Razer BlackWidow V3 Mini HyperSpeed Phantom Edition", "stock": 45, "precio": 322445, "img": razerBlackwidow, "categoria": "teclado" },
  { "id": 11, "nombre": "ASUS ROG Azoth White", "descripcion": "Teclado Gamer Inalámbrico ASUS ROG Azoth White", "stock": 43, "precio": 249000, "img": asusRogAzothWhite, "categoria": "teclado" },
  { "id": 12, "nombre": "ASUS ROG Azoth", "descripcion": "Teclado Gamer Inalámbrico ASUS ROG Azoth", "stock": 23, "precio": 249995, "img": asusRogAzoth, "categoria": "teclado" },
  { "id": 13, "nombre": "MSI GeForce RTX 5080 VANGUARD", "descripcion": "MSI GeForce RTX 5080 16G VANGUARD SOC LAUNCH EDITION", "stock": 40, "precio": 1804990, "img": msiRtx5080Vanguard, "categoria": "grafica" },
  { "id": 14, "nombre": "MSI GeForce RTX 5080 SUPRIM", "descripcion": "MSI GeForce RTX 5080 16G SUPRIM LIQUID SOC", "stock": 324, "precio": 1749890, "img": msiRtx5080Suprim, "categoria": "grafica" },
  { "id": 15, "nombre": "ASUS ROG-ASTRAL-RTX5080", "descripcion": "ASUS ROG-ASTRAL-RTX5080-O16G-GAMING", "stock": 24, "precio": 1999900, "img": asusRogAstral, "categoria": "grafica" },
  { "id": 16, "nombre": "Palit GeForce RTX 5090", "descripcion": "Palit GeForce RTX 5090 GameRock OC", "stock": 32, "precio": 2849990, "img": palitRtx5090, "categoria": "grafica" }
];

export default products;