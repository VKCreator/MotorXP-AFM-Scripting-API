# Список констант

## Motor
- `Motor.SR` — статор-ротор.  
  Значение: `0`
- `Motor.SRS` — статор-ротор-статор.  
  Значение: `1`
- `Motor.SRSRS` — статор-ротор-статор-ротор-статор.  
  Значение: `2`
- `Motor.RSR` — ротор-статор-ротор.  
  Значение: `3`
- `Motor.RSRSR` — ротор-статор-ротор-статор-ротор.  
  Значение: `4`

## Stator
- `Stator.Yokeless` — без ярма.  
  Значение: `0`
- `Stator.Yoke` — с ярмом.  
  Значение: `1`

## StatorItem
- `StatorItem.ID1` — элемент 1.  
  Значение: `1`
- `StatorItem.ID2` — элемент 2.  
  Значение: `2`
- `StatorItem.ID3` — элемент 3.  
  Значение: `3`
- `StatorItem.LayerLower` — нижний слой.  
  Значение: `1`
- `StatorItem.LayerUpper` — верхний слой.  
  Значение: `2`

## Rotor
- `Rotor.Yokeless` — без ярма.  
  Значение: `1`
- `Rotor.Yoke` — с ярмом.  
  Значение: `2`
  
## RotorItem
- `RotorItem.ID1` — элемент 1.  
  Значение: `1`
- `RotorItem.ID2` — элемент 2.  
  Значение: `2`
- `RotorItem.ID3` — элемент 3.  
  Значение: `3`
- `RotorItem.LayerLower` — нижний слой.  
  Значение: `1`
- `RotorItem.LayerUpper` — верхний слой.  
  Значение: `2`
  
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

## Coil
- `Coil.CW` — намотка по часовой стрелке.  
  Значение: `1`
- `Coil.CCW` — намотка против часовой стрелки.  
  Значение: `2`

## Winding
### Тип обмотки
- `Winding.Planar` — планарная.  
  Значение: `1`
- `Winding.Toroidal` — тороидальная.  
  Значение: `2`
  
### Количество слоев
- `Winding.SingleLayer` — одинарный.  
  Значение: `1`
- `Winding.DoubleLayer` — двойной.  
  Значение: `2`

### Ориентация слоев
- `Winding.UpperLower` — верхний-нижний.  
  Значение: `1`
- `Winding.LeftRight` — левый-правый.  
  Значение: `2`

### Тип соединения
- `Winding.Star` — звезда.  
  Значение: `1`
- `Winding.Delta` — треугольник.  
  Значение: `2`
  
### Подключения
- `'1-2'`
- `'1||2'`
- `'1-2-3'`
- `'1||2||3'`
- `'1-2-3-4'`
- `'1||2||3||4'`
- `'(1-2)||(3-4)'`
- `'(1-3)||(2-4)'`
- `'(1-4)||(2-3)'`

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