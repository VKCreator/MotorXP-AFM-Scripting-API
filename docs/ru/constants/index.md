# Список констант

## Motor
- `Motor.SR` — Тип мотора: Статор-Ротор.  
  Значение: `0`
- `Motor.SRS` — Тип мотора: Статор-Ротор-Статор.  
  Значение: `1`
- `Motor.SRSRS` — Тип мотора: Статор-Ротор-Статор-Ротор-Статор.  
  Значение: `2`
- `Motor.RSR` — Тип мотора: Ротор-Статор-Ротор.  
  Значение: `3`
- `Motor.RSRSR` — Тип мотора: Ротор-Статор-Ротор-Статор-Ротор.  
  Значение: `4`

## Stator
- `Stator.Yokeless` — Статор без ярма.  
  Значение: `0`
- `Stator.Yoke` — Статор с ярмом.  
  Значение: `1`

## StatorItem
- `StatorItem.ID1` — Идентификатор статорного элемента 1 (применимо для любого типа мотора).  
  Значение: `1`
- `StatorItem.ID2` — Идентификатор статорного элемента 2 (применимо для Motor.SRS, Motor.SRSRS и Motor.RSRSR).  
  Значение: `2`
- `StatorItem.ID3` — Идентификатор статорного элемента 3 (применимо для Motor.SRSRS).    
  Значение: `3`
Статорные элементы располагаются снизу вверх

## Rotor
- `Rotor.Yokeless` — Ротор без ярма.  
  Значение: `1`
- `Rotor.Yoke` — Ротор с ярмом.  
  Значение: `2`
  
## RotorItem
- `RotorItem.ID1` — Идентификатор роторного элемента 1.  
  Значение: `1`
- `RotorItem.ID2` — Идентификатор роторного элемента 2.  
  Значение: `2`
- `RotorItem.ID3` — Идентификатор роторного элемента 3.  
  Значение: `3`
  Роторные элементы располагаются снизу вверх

## Winding
### Тип обмотки
- `Winding.Planar` — Планарная обмотка.  
  Значение: `1`
- `Winding.Toroidal` — Тороидальная обмотка.  
  Значение: `2`
  
### Количество слоев
- `Winding.SingleLayer` — Одинарный слой.  
  Значение: `1`
- `Winding.DoubleLayer` — Двойной слой.  
  Значение: `2`

### Ориентация слоев
- `Winding.UpperLower` — Ориентация слоев в обмотке верхний-нижний.  
  Значение: `1`
- `Winding.LeftRight` — Ориентация слоев в обмотке левый-правый.  
  Значение: `2`

### Тип соединения
- `Winding.Star` — Звезда.  
  Значение: `1`
- `Winding.Delta` — Треугольник.  
  Значение: `2`
  
### Модель обмотки
- `Winding.Lumped` — Lumped.  
  Значение: `0`
- `Winding.Full` — Full.  
  Значение: `1`

## Coil orientation
- `Coil.CW` — Hамотка по часовой стрелке.  
  Значение: `-1`
- `Coil.CCW` — Hамотка против часовой стрелки.  
  Значение: `+1`

## Coil direction
- `Coil.Incoming` — Incoming.  
  Значение: `+1`
- `Coil.Outcoming` — Outcoming.  
  Значение: `-1`


## PoleArrangement
- `PoleArrangement.NN` — NN.  
  Значение: `0`
- `PoleArrangement.NS` — NS.  
  Значение: `1`
- `PoleArrangement.NSNS` — NSNS.  
  Значение: `2`
- `PoleArrangement.NSSN` — NSSN.  
  Значение: `3`
- `PoleArrangement.NNSS` — NNSS.  
  Значение: `4`
- `PoleArrangement.NNNN` — NNNN.  
  Значение: `5`

## Magnetization
- `Magnetization.From` — направление "от".  
  Значение: `1`
- `Magnetization.Toward` — направление "к".  
  Значение: `2`
- `Magnetization.CW` — по часовой стрелке.  
  Значение: `3`
- `Magnetization.CCW` — против часовой стрелки.  
  Значение: `4`
  
  
## Именованные цвета

Список доступных цветов и их визуальное представление:

- `Qt.black` — черный  
  <span style="display:inline-block;width:16px;height:16px;background-color:#000000;border:1px solid #FFFFFF;"></span>  

- `Qt.white` — белый  
  <span style="display:inline-block;width:16px;height:16px;background-color:#FFFFFF;border:1px solid #000000;"></span>  

- `Qt.darkGray` — темно-серый  
  <span style="display:inline-block;width:16px;height:16px;background-color:#A9A9A9;"></span>  

- `Qt.gray` — серый  
  <span style="display:inline-block;width:16px;height:16px;background-color:#808080;"></span>  

- `Qt.lightGray` — светло-серый  
  <span style="display:inline-block;width:16px;height:16px;background-color:#D3D3D3;"></span>  

- `Qt.red` — красный  
  <span style="display:inline-block;width:16px;height:16px;background-color:#FF0000;"></span>  

- `Qt.green` — зеленый  
  <span style="display:inline-block;width:16px;height:16px;background-color:#00FF00;"></span>  

- `Qt.blue` — синий  
  <span style="display:inline-block;width:16px;height:16px;background-color:#0000FF;"></span>  

- `Qt.cyan` — голубой  
  <span style="display:inline-block;width:16px;height:16px;background-color:#00FFFF;"></span>  

- `Qt.magenta` — пурпурный  
  <span style="display:inline-block;width:16px;height:16px;background-color:#FF00FF;"></span>  

- `Qt.yellow` — желтый  
  <span style="display:inline-block;width:16px;height:16px;background-color:#FFFF00;"></span>  

- `Qt.darkRed` — темно-красный  
  <span style="display:inline-block;width:16px;height:16px;background-color:#8B0000;"></span>  

- `Qt.darkGreen` — темно-зеленый  
  <span style="display:inline-block;width:16px;height:16px;background-color:#006400;"></span>  

- `Qt.darkBlue` — темно-синий  
  <span style="display:inline-block;width:16px;height:16px;background-color:#00008B;"></span>  

- `Qt.darkCyan` — темно-голубой  
  <span style="display:inline-block;width:16px;height:16px;background-color:#008B8B;"></span>  

- `Qt.darkMagenta` — темно-пурпурный  
  <span style="display:inline-block;width:16px;height:16px;background-color:#8B008B;"></span>  

- `Qt.darkYellow` — темно-желтый  
  <span style="display:inline-block;width:16px;height:16px;background-color:#B8860B;"></span>  